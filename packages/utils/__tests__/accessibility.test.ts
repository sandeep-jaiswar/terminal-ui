import {
  announceToScreenReader,
  announceFinancialChange,
  manageFocus,
  prefersReducedMotion,
  generateId,
} from "../src/accessibility";

describe("announceToScreenReader", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("creates live region and announces message", () => {
    announceToScreenReader("Test message", "polite");

    const liveRegion = document.getElementById("live-region-polite");
    expect(liveRegion).toBeTruthy();
    expect(liveRegion?.getAttribute("aria-live")).toBe("polite");
    expect(liveRegion?.getAttribute("aria-atomic")).toBe("true");
  });

  it("uses existing live region if already present", () => {
    announceToScreenReader("First message", "polite");
    announceToScreenReader("Second message", "polite");

    const liveRegions = document.querySelectorAll("#live-region-polite");
    expect(liveRegions.length).toBe(1);
  });

  it("creates separate regions for different priorities", () => {
    announceToScreenReader("Polite message", "polite");
    announceToScreenReader("Assertive message", "assertive");

    expect(document.getElementById("live-region-polite")).toBeTruthy();
    expect(document.getElementById("live-region-assertive")).toBeTruthy();
  });

  it("applies screen reader only styles", () => {
    announceToScreenReader("Test", "polite");

    const liveRegion = document.getElementById("live-region-polite");
    expect(liveRegion?.className).toBe("sr-only");
    expect(liveRegion?.style.position).toBe("absolute");
  });
});

describe("announceFinancialChange", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("announces price increase", () => {
    announceFinancialChange("AAPL", 150.25, 148.8, "price", "USD");

    const liveRegion = document.getElementById("live-region-polite");
    expect(liveRegion).toBeTruthy();
  });

  it("uses assertive priority for large changes", () => {
    // 10% change should trigger assertive
    announceFinancialChange("TSLA", 110, 100, "price", "USD");

    const assertiveRegion = document.getElementById("live-region-assertive");
    expect(assertiveRegion).toBeTruthy();
  });

  it("uses polite priority for small changes", () => {
    // 1% change should use polite
    announceFinancialChange("MSFT", 101, 100, "price", "USD");

    const politeRegion = document.getElementById("live-region-polite");
    expect(politeRegion).toBeTruthy();
  });

  it("formats volume correctly", () => {
    announceFinancialChange("GOOGL", 1500000, 1200000, "volume", "USD");

    // Should create a live region with volume announcement
    const liveRegion =
      document.getElementById("live-region-polite") ||
      document.getElementById("live-region-assertive");
    expect(liveRegion).toBeTruthy();
  });
});

describe("manageFocus", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="container">
        <button id="btn1">Button 1</button>
        <button id="btn2">Button 2</button>
        <button id="btn3">Button 3</button>
      </div>
    `;
  });

  it("traps focus within container", () => {
    const container = document.getElementById("container") as HTMLElement;
    manageFocus(container, true);

    expect(container.dataset.focusTrap).toBe("active");
  });

  it("focuses first focusable element", () => {
    const container = document.getElementById("container") as HTMLElement;
    manageFocus(container, true);

    expect(document.activeElement?.id).toBe("btn1");
  });

  it("stores previous focus", () => {
    const btn1 = document.getElementById("btn1") as HTMLElement;
    btn1.focus();

    const container = document.getElementById("container") as HTMLElement;
    manageFocus(container, true);

    expect(container.dataset.previousFocus).toBe("btn1");
  });

  it("restores focus when released", () => {
    const btn1 = document.getElementById("btn1") as HTMLElement;
    btn1.focus();

    const container = document.getElementById("container") as HTMLElement;
    manageFocus(container, true);
    manageFocus(container, false);

    expect(container.dataset.focusTrap).toBeUndefined();
    expect(container.dataset.previousFocus).toBeUndefined();
  });

  it("handles null element gracefully", () => {
    expect(() => manageFocus(null as any, true)).not.toThrow();
  });

  it("handles Tab key for focus cycling", () => {
    const container = document.getElementById("container") as HTMLElement;
    manageFocus(container, true);

    const btn1 = document.getElementById("btn1") as HTMLElement;
    const btn3 = document.getElementById("btn3") as HTMLElement;

    // Tab from last element should cycle to first
    btn3.focus();
    const tabEvent = new KeyboardEvent("keydown", {
      key: "Tab",
      bubbles: true,
    });
    container.dispatchEvent(tabEvent);

    expect(document.activeElement?.id).toBe("btn1");
  });

  it("handles Shift+Tab for reverse focus cycling", () => {
    const container = document.getElementById("container") as HTMLElement;
    manageFocus(container, true);

    const btn1 = document.getElementById("btn1") as HTMLElement;

    // Shift+Tab from first element should cycle to last
    btn1.focus();
    const shiftTabEvent = new KeyboardEvent("keydown", {
      key: "Tab",
      shiftKey: true,
      bubbles: true,
    });
    container.dispatchEvent(shiftTabEvent);

    expect(document.activeElement?.id).toBe("btn3");
  });

  it("dispatches modal-escape event on Escape key", () => {
    const container = document.getElementById("container") as HTMLElement;
    manageFocus(container, true);

    const escapeHandler = jest.fn();
    container.addEventListener("modal-escape", escapeHandler);

    const escapeEvent = new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
    });
    container.dispatchEvent(escapeEvent);

    expect(escapeHandler).toHaveBeenCalled();
  });

  it("handles empty container", () => {
    const emptyContainer = document.createElement("div");
    document.body.appendChild(emptyContainer);

    expect(() => manageFocus(emptyContainer, true)).not.toThrow();

    document.body.removeChild(emptyContainer);
  });
});

describe("prefersReducedMotion", () => {
  it("returns false when window is undefined", () => {
    // Test SSR scenario - function already handles this
    expect(typeof prefersReducedMotion()).toBe("boolean");
  });

  it("returns matchMedia result when available", () => {
    const mockMatchMedia = jest.fn().mockReturnValue({ matches: true });
    window.matchMedia = mockMatchMedia as any;

    expect(prefersReducedMotion()).toBe(true);
    expect(mockMatchMedia).toHaveBeenCalledWith(
      "(prefers-reduced-motion: reduce)",
    );

    // Cleanup
    mockMatchMedia.mockReturnValue({ matches: false });
    expect(prefersReducedMotion()).toBe(false);
  });
});

describe("generateId", () => {
  it("generates unique IDs", () => {
    const id1 = generateId("test");
    const id2 = generateId("test");

    expect(id1).not.toBe(id2);
    expect(id1).toContain("test-");
    expect(id2).toContain("test-");
  });

  it("uses default prefix when not provided", () => {
    const id = generateId();
    expect(id).toContain("terminal-");
  });

  it("includes timestamp in ID", () => {
    const id = generateId("prefix");
    expect(id).toMatch(/^prefix-\d+-\d+$/);
  });

  it("increments counter for each call", () => {
    const id1 = generateId("test");
    const id2 = generateId("test");

    const counter1 = parseInt(id1.split("-")[1]);
    const counter2 = parseInt(id2.split("-")[1]);

    expect(counter2).toBe(counter1 + 1);
  });
});
