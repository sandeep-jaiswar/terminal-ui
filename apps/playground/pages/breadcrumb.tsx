import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@sandeep-jaiswar/navigation";

export default function BreadcrumbDemo() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        padding: "2rem",
        color: "#fff",
      }}
    >
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Breadcrumb Component Demo
        </h1>
        <p style={{ color: "#666", marginBottom: "2rem" }}>
          Bloomberg Terminal-inspired breadcrumb navigation component
        </p>
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
          Trading Context
        </h2>
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/portfolio">Portfolio</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/portfolio/aapl">AAPL</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem current>Details</BreadcrumbItem>
        </Breadcrumb>

        <div
          style={{
            marginTop: "2rem",
            padding: "1.5rem",
            backgroundColor: "#1a1a1a",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
            Apple Inc. (AAPL)
          </h3>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
            $150.25
          </div>
          <div style={{ color: "#4af6c3", fontSize: "1rem" }}>
            +2.45 (+1.66%)
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
          Market Navigation
        </h2>
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/markets">Markets</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/markets/equities">Equities</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/markets/equities/us">US</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem current>Technology</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
          Custom Separator
        </h2>
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbSeparator separator="/" />
          <BreadcrumbItem href="/analytics">Analytics</BreadcrumbItem>
          <BreadcrumbSeparator separator="/" />
          <BreadcrumbItem current>Reports</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div
        style={{
          marginTop: "4rem",
          padding: "1.5rem",
          backgroundColor: "#1a1a1a",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
          Design Features
        </h3>
        <ul style={{ listStyle: "none", padding: 0, color: "#666" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            ✓ <strong style={{ color: "#0068ff" }}>Clickable links:</strong>{" "}
            Terminal blue (#0068ff)
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            ✓ <strong style={{ color: "#0068ff" }}>Current page:</strong> White,
            non-clickable
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            ✓ <strong style={{ color: "#0068ff" }}>Hover state:</strong> Lighter
            blue transition
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            ✓ <strong style={{ color: "#0068ff" }}>Separators:</strong> Gray
            chevrons
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            ✓ <strong style={{ color: "#0068ff" }}>Accessibility:</strong> ARIA
            labels, keyboard navigation
          </li>
        </ul>
      </div>
    </div>
  );
}
