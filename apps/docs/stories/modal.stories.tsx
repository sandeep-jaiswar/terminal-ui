import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal, ModalHeader, ModalContent, ModalFooter } from "@sandeep-jaiswar/modal";
import { Button } from "@sandeep-jaiswar/ui";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "terminal",
      values: [
        { name: "terminal", value: "#000000" },
      ],
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "The size variant of the modal",
    },
    isOpen: {
      control: { type: "boolean" },
      description: "Whether the modal is open",
    },
    disableBackdropClick: {
      control: { type: "boolean" },
      description: "Prevent closing on backdrop click",
    },
    disableEscapeKey: {
      control: { type: "boolean" },
      description: "Prevent closing on Escape key",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

/**
 * Default modal with medium size
 */
export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div style={{ padding: "2rem" }}>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        </div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="md">
          <ModalHeader onClose={() => setIsOpen(false)}>
            Standard Dialog Title
          </ModalHeader>
          <ModalContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </ModalContent>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              OK
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

/**
 * Small modal for compact confirmations (360px)
 */
export const Small: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div style={{ padding: "2rem" }}>
          <Button onClick={() => setIsOpen(true)}>Open Small Modal</Button>
        </div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm">
          <ModalHeader onClose={() => setIsOpen(false)}>
            Confirm Action?
          </ModalHeader>
          <ModalContent>
            <p>Are you sure you want to proceed?</p>
          </ModalContent>
          <ModalFooter>
            <Button variant="secondary" size="sm" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="success" size="sm" onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

/**
 * Medium modal for standard dialogs (480px)
 */
export const Medium: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div style={{ padding: "2rem" }}>
          <Button onClick={() => setIsOpen(true)}>Open Medium Modal</Button>
        </div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="md">
          <ModalHeader onClose={() => setIsOpen(false)}>
            Terminal Settings
          </ModalHeader>
          <ModalContent>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Art Battings</span>
                <Button variant="ghost" size="sm">Toggle</Button>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Mehics Todo</span>
                <Button variant="ghost" size="sm">Toggle</Button>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Netiny Padlis</span>
                <Button variant="ghost" size="sm">Toggle</Button>
              </div>
            </div>
          </ModalContent>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              Apply
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

/**
 * Large modal for data forms (720px)
 */
export const Large: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div style={{ padding: "2rem" }}>
          <Button onClick={() => setIsOpen(true)}>Open Large Modal</Button>
        </div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg">
          <ModalHeader onClose={() => setIsOpen(false)}>
            Create New Account
          </ModalHeader>
          <ModalContent>
            <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    backgroundColor: "#333333",
                    border: "1px solid #666666",
                    borderRadius: "0.25rem",
                    color: "white",
                    fontSize: "0.875rem",
                  }}
                />
              </div>
              <div>
                <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    backgroundColor: "#333333",
                    border: "1px solid #666666",
                    borderRadius: "0.25rem",
                    color: "white",
                    fontSize: "0.875rem",
                  }}
                />
              </div>
              <div>
                <label htmlFor="account-type" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  Account Type
                </label>
                <select
                  id="account-type"
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    backgroundColor: "#333333",
                    border: "1px solid #666666",
                    borderRadius: "0.25rem",
                    color: "white",
                    fontSize: "0.875rem",
                  }}
                >
                  <option>Standard</option>
                  <option>Premium</option>
                  <option>Enterprise</option>
                </select>
              </div>
              <div>
                <label htmlFor="notes" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  Notes
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    backgroundColor: "#333333",
                    border: "1px solid #666666",
                    borderRadius: "0.25rem",
                    color: "white",
                    fontSize: "0.875rem",
                    resize: "vertical",
                  }}
                />
              </div>
            </form>
          </ModalContent>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="success" onClick={() => setIsOpen(false)}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

/**
 * Trading confirmation modal - Buy action
 */
export const TradingBuy: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div style={{ padding: "2rem" }}>
          <Button variant="success" onClick={() => setIsOpen(true)}>
            Buy 100 AAPL
          </Button>
        </div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm">
          <ModalHeader onClose={() => setIsOpen(false)}>
            Confirm Buy Order
          </ModalHeader>
          <ModalContent>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#666666" }}>Symbol:</span>
                <span style={{ fontFamily: "monospace" }}>AAPL</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#666666" }}>Quantity:</span>
                <span style={{ fontFamily: "monospace" }}>100 shares</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#666666" }}>Price:</span>
                <span style={{ fontFamily: "monospace" }}>$150.25</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #333333", paddingTop: "0.75rem" }}>
                <span style={{ color: "#666666" }}>Total:</span>
                <span style={{ fontFamily: "monospace", fontWeight: "bold" }}>$15,025.00</span>
              </div>
            </div>
          </ModalContent>
          <ModalFooter>
            <Button variant="secondary" size="sm" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="success" size="sm" onClick={() => setIsOpen(false)}>
              Execute Order
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

/**
 * Trading confirmation modal - Sell action
 */
export const TradingSell: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div style={{ padding: "2rem" }}>
          <Button variant="danger" onClick={() => setIsOpen(true)}>
            Sell 50 TSLA
          </Button>
        </div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm">
          <ModalHeader onClose={() => setIsOpen(false)}>
            Confirm Sell Order
          </ModalHeader>
          <ModalContent>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#666666" }}>Symbol:</span>
                <span style={{ fontFamily: "monospace" }}>TSLA</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#666666" }}>Quantity:</span>
                <span style={{ fontFamily: "monospace" }}>50 shares</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#666666" }}>Price:</span>
                <span style={{ fontFamily: "monospace" }}>$245.80</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #333333", paddingTop: "0.75rem" }}>
                <span style={{ color: "#666666" }}>Total:</span>
                <span style={{ fontFamily: "monospace", fontWeight: "bold" }}>$12,290.00</span>
              </div>
            </div>
          </ModalContent>
          <ModalFooter>
            <Button variant="secondary" size="sm" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" size="sm" onClick={() => setIsOpen(false)}>
              Execute Order
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

/**
 * Warning modal for alerts
 */
export const Warning: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div style={{ padding: "2rem" }}>
          <Button variant="warning" onClick={() => setIsOpen(true)}>
            Show Warning
          </Button>
        </div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm">
          <ModalHeader onClose={() => setIsOpen(false)}>
            ⚠️ Risk Warning
          </ModalHeader>
          <ModalContent>
            <p>
              This operation involves high risk. Please ensure you understand the
              implications before proceeding.
            </p>
          </ModalContent>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="warning" onClick={() => setIsOpen(false)}>
              I Understand
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

/**
 * Modal without backdrop dismiss
 */
export const NoBackdropDismiss: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div style={{ padding: "2rem" }}>
          <Button onClick={() => setIsOpen(true)}>Open Modal (No Backdrop Dismiss)</Button>
        </div>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="md"
          disableBackdropClick={true}
        >
          <ModalHeader onClose={() => setIsOpen(false)}>
            Required Action
          </ModalHeader>
          <ModalContent>
            <p>
              This modal cannot be dismissed by clicking outside. You must use the
              close button or cancel action.
            </p>
          </ModalContent>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              Proceed
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

/**
 * Modal without escape key dismiss
 */
export const NoEscapeDismiss: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div style={{ padding: "2rem" }}>
          <Button onClick={() => setIsOpen(true)}>Open Modal (No Escape Key)</Button>
        </div>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="md"
          disableEscapeKey={true}
        >
          <ModalHeader onClose={() => setIsOpen(false)}>
            Critical Operation
          </ModalHeader>
          <ModalContent>
            <p>
              This modal cannot be dismissed with the Escape key. You must explicitly
              choose an action.
            </p>
          </ModalContent>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

/**
 * All size variants showcase
 */
export const AllSizes: Story = {
  render: () => {
    const [smallOpen, setSmallOpen] = useState(false);
    const [mediumOpen, setMediumOpen] = useState(false);
    const [largeOpen, setLargeOpen] = useState(false);

    return (
      <>
        <div style={{ padding: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button onClick={() => setSmallOpen(true)}>Small (360px)</Button>
          <Button onClick={() => setMediumOpen(true)}>Medium (480px)</Button>
          <Button onClick={() => setLargeOpen(true)}>Large (720px)</Button>
        </div>

        <Modal isOpen={smallOpen} onClose={() => setSmallOpen(false)} size="sm">
          <ModalHeader onClose={() => setSmallOpen(false)}>
            Small Modal
          </ModalHeader>
          <ModalContent>
            <p>This is a small modal (360px width) for compact confirmations.</p>
          </ModalContent>
          <ModalFooter>
            <Button variant="secondary" size="sm" onClick={() => setSmallOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={mediumOpen} onClose={() => setMediumOpen(false)} size="md">
          <ModalHeader onClose={() => setMediumOpen(false)}>
            Medium Modal
          </ModalHeader>
          <ModalContent>
            <p>This is a medium modal (480px width) for standard dialogs.</p>
          </ModalContent>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setMediumOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={largeOpen} onClose={() => setLargeOpen(false)} size="lg">
          <ModalHeader onClose={() => setLargeOpen(false)}>
            Large Modal
          </ModalHeader>
          <ModalContent>
            <p>This is a large modal (720px width) for data forms and complex content.</p>
          </ModalContent>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setLargeOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};
