import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal, ModalHeader, ModalContent, ModalFooter } from "../src/Modal";

describe("Modal", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  afterEach(() => {
    document.body.style.overflow = "";
  });

  it("renders when isOpen is true", () => {
    render(
      <Modal isOpen={true}>
        <ModalContent>Test content</ModalContent>
      </Modal>
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    render(
      <Modal isOpen={false}>
        <ModalContent>Test content</ModalContent>
      </Modal>
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("calls onClose when backdrop is clicked", async () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <ModalContent>Test content</ModalContent>
      </Modal>
    );

    const backdrop = screen.getByRole("presentation");
    fireEvent.click(backdrop);

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  it("does not call onClose when modal content is clicked", () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <ModalContent>Test content</ModalContent>
      </Modal>
    );

    const content = screen.getByText("Test content");
    fireEvent.click(content);

    expect(handleClose).not.toHaveBeenCalled();
  });

  it("does not close on backdrop click when disableBackdropClick is true", () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} disableBackdropClick={true}>
        <ModalContent>Test content</ModalContent>
      </Modal>
    );

    const backdrop = screen.getByRole("presentation");
    fireEvent.click(backdrop);

    expect(handleClose).not.toHaveBeenCalled();
  });

  it("calls onClose when Escape key is pressed", async () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <ModalContent>Test content</ModalContent>
      </Modal>
    );

    fireEvent.keyDown(document, { key: "Escape" });

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  it("does not close on Escape key when disableEscapeKey is true", () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} disableEscapeKey={true}>
        <ModalContent>Test content</ModalContent>
      </Modal>
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(handleClose).not.toHaveBeenCalled();
  });

  it("prevents body scroll when open", () => {
    const { rerender } = render(
      <Modal isOpen={true}>
        <ModalContent>Test content</ModalContent>
      </Modal>
    );

    expect(document.body.style.overflow).toBe("hidden");

    rerender(
      <Modal isOpen={false}>
        <ModalContent>Test content</ModalContent>
      </Modal>
    );

    expect(document.body.style.overflow).toBe("");
  });

  it("has correct ARIA attributes", () => {
    render(
      <Modal isOpen={true} aria-label="Test modal">
        <ModalContent>Test content</ModalContent>
      </Modal>
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAttribute("aria-label", "Test modal");
  });

  it("applies small size class correctly", () => {
    render(
      <Modal isOpen={true} size="sm">
        <ModalContent>Test content</ModalContent>
      </Modal>
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveClass("max-w-[360px]");
  });

  it("applies medium size class correctly", () => {
    render(
      <Modal isOpen={true} size="md">
        <ModalContent>Test content</ModalContent>
      </Modal>
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveClass("max-w-[480px]");
  });

  it("applies large size class correctly", () => {
    render(
      <Modal isOpen={true} size="lg">
        <ModalContent>Test content</ModalContent>
      </Modal>
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveClass("max-w-[720px]");
  });

  it("applies custom className", () => {
    render(
      <Modal isOpen={true} className="custom-class">
        <ModalContent>Test content</ModalContent>
      </Modal>
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveClass("custom-class");
  });
});

describe("ModalHeader", () => {
  it("renders children correctly", () => {
    render(<ModalHeader>Test Header</ModalHeader>);

    expect(screen.getByText("Test Header")).toBeInTheDocument();
  });

  it("renders close button when showClose is true", () => {
    const handleClose = jest.fn();
    render(
      <ModalHeader showClose={true} onClose={handleClose}>
        Test Header
      </ModalHeader>
    );

    const closeButton = screen.getByLabelText("Close dialog");
    expect(closeButton).toBeInTheDocument();
  });

  it("does not render close button when showClose is false", () => {
    render(<ModalHeader showClose={false}>Test Header</ModalHeader>);

    const closeButton = screen.queryByLabelText("Close dialog");
    expect(closeButton).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const handleClose = jest.fn();
    render(
      <ModalHeader showClose={true} onClose={handleClose}>
        Test Header
      </ModalHeader>
    );

    const closeButton = screen.getByLabelText("Close dialog");
    await userEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    const { container } = render(
      <ModalHeader className="custom-header">Test Header</ModalHeader>
    );

    const header = container.firstChild as HTMLElement;
    expect(header).toHaveClass("custom-header");
  });
});

describe("ModalContent", () => {
  it("renders children correctly", () => {
    render(<ModalContent>Test Content</ModalContent>);

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <ModalContent className="custom-content">Test Content</ModalContent>
    );

    const content = container.firstChild as HTMLElement;
    expect(content).toHaveClass("custom-content");
  });
});

describe("ModalFooter", () => {
  it("renders children correctly", () => {
    render(
      <ModalFooter>
        <button>Cancel</button>
        <button>Confirm</button>
      </ModalFooter>
    );

    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <ModalFooter className="custom-footer">
        <button>Test</button>
      </ModalFooter>
    );

    const footer = container.firstChild as HTMLElement;
    expect(footer).toHaveClass("custom-footer");
  });
});

describe("Modal Integration", () => {
  it("renders complete modal with all sub-components", () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <ModalHeader onClose={handleClose}>Test Title</ModalHeader>
        <ModalContent>Test Content</ModalContent>
        <ModalFooter>
          <button onClick={handleClose}>Close</button>
        </ModalFooter>
      </Modal>
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
    expect(screen.getByText("Close")).toBeInTheDocument();
  });

  it("closes modal when footer button is clicked", async () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <ModalHeader onClose={handleClose}>Test Title</ModalHeader>
        <ModalContent>Test Content</ModalContent>
        <ModalFooter>
          <button onClick={handleClose}>Close</button>
        </ModalFooter>
      </Modal>
    );

    const closeButton = screen.getByText("Close");
    await userEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
