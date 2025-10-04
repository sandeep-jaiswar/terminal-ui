import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "../../src/hooks/useDebounce";

describe("useDebounce", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("returns initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 500));

    expect(result.current).toBe("initial");
  });

  it("debounces value changes", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "initial", delay: 500 } },
    );

    expect(result.current).toBe("initial");

    rerender({ value: "updated", delay: 500 });

    // Value should still be initial before timeout
    expect(result.current).toBe("initial");

    // Fast-forward time with act
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Now value should be updated
    expect(result.current).toBe("updated");
  });

  it("cancels previous timeout on rapid changes", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      { initialProps: { value: "first" } },
    );

    rerender({ value: "second" });
    act(() => {
      jest.advanceTimersByTime(300);
    });

    rerender({ value: "third" });
    act(() => {
      jest.advanceTimersByTime(300);
    });

    // Still initial value
    expect(result.current).toBe("first");

    // Complete the timeout
    act(() => {
      jest.advanceTimersByTime(200);
    });

    // Should be the latest value
    expect(result.current).toBe("third");
  });

  it("works with different delay values", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "initial", delay: 1000 } },
    );

    rerender({ value: "updated", delay: 1000 });

    act(() => {
      jest.advanceTimersByTime(999);
    });
    expect(result.current).toBe("initial");

    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(result.current).toBe("updated");
  });

  it("works with complex objects", () => {
    const obj1 = { name: "John", age: 30 };
    const obj2 = { name: "Jane", age: 25 };

    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      { initialProps: { value: obj1 } },
    );

    expect(result.current).toBe(obj1);

    rerender({ value: obj2 });
    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe(obj2);
  });

  it("works with numbers", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      { initialProps: { value: 0 } },
    );

    rerender({ value: 100 });
    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe(100);
  });
});
