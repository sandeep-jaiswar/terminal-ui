import React from "react";
import {
  Sidebar,
  NavigationItem,
  NavigationGroup,
} from "@sandeep-jaiswar/navigation";
import { Icon } from "@sandeep-jaiswar/icons";

export default function NavigationDemo() {
  const [activeItem, setActiveItem] = React.useState("Dashboard");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Sidebar>
        <NavigationGroup label="MAIN">
          <NavigationItem
            icon={<Icon name="trending-up" size={20} />}
            active={activeItem === "Home"}
            onClick={() => setActiveItem("Home")}
          >
            Home
          </NavigationItem>
          <NavigationItem
            icon={<Icon name="chart-line" size={20} />}
            active={activeItem === "News"}
            onClick={() => setActiveItem("News")}
          >
            News
          </NavigationItem>
          <NavigationItem
            icon={<Icon name="chart-line" size={20} />}
            active={activeItem === "Dashboard"}
            onClick={() => setActiveItem("Dashboard")}
            badge="LIVE"
          >
            Dashboard
          </NavigationItem>
          <NavigationItem
            icon={<Icon name="trending-up" size={20} />}
            active={activeItem === "Markets"}
            onClick={() => setActiveItem("Markets")}
          >
            Markets
          </NavigationItem>
        </NavigationGroup>

        <NavigationGroup label="PORTFOLIO">
          <NavigationItem
            icon={<Icon name="dollar-sign" size={20} />}
            active={activeItem === "Positions"}
            onClick={() => setActiveItem("Positions")}
          >
            Positions
          </NavigationItem>
          <NavigationItem
            icon={<Icon name="trending-up" size={20} />}
            active={activeItem === "Orders"}
            onClick={() => setActiveItem("Orders")}
            badge="3"
          >
            Orders
          </NavigationItem>
        </NavigationGroup>

        <NavigationGroup label="TOOLS">
          <NavigationItem
            icon={<Icon name="search" size={20} />}
            active={activeItem === "Research"}
            onClick={() => setActiveItem("Research")}
          >
            Research
          </NavigationItem>
          <NavigationItem
            icon={<Icon name="alert-circle" size={20} />}
            active={activeItem === "Alerts"}
            onClick={() => setActiveItem("Alerts")}
            badge="7"
          >
            Alerts
          </NavigationItem>
          <NavigationItem
            icon={<Icon name="settings" size={20} />}
            active={activeItem === "Settings"}
            onClick={() => setActiveItem("Settings")}
          >
            Settings
          </NavigationItem>
        </NavigationGroup>
      </Sidebar>

      <main
        style={{
          flex: 1,
          padding: "2rem",
          backgroundColor: "#000",
          color: "#fff",
          overflow: "auto",
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
            {activeItem}
          </h1>
          <p style={{ color: "#666", marginBottom: "2rem" }}>
            {activeItem === "Dashboard" &&
              "Real-time market overview and portfolio performance"}
            {activeItem === "Markets" &&
              "Live market data and trading opportunities"}
            {activeItem === "Positions" &&
              "View and manage your current positions"}
            {activeItem === "Orders" && "Active and pending orders"}
            {activeItem === "Research" && "Market research and analysis tools"}
            {activeItem === "Alerts" && "Price alerts and notifications"}
            {activeItem === "Settings" &&
              "Application preferences and configuration"}
            {activeItem === "Home" && "Your personalized trading workspace"}
            {activeItem === "News" && "Latest market news and updates"}
          </p>
        </div>

        {/* Mock trading interface */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          {[
            {
              symbol: "AAPL",
              name: "Apple Inc.",
              price: 150.25,
              change: 2.45,
              percent: 1.66,
            },
            {
              symbol: "GOOGL",
              name: "Alphabet Inc.",
              price: 2850.75,
              change: -15.3,
              percent: -0.53,
            },
            {
              symbol: "MSFT",
              name: "Microsoft Corp.",
              price: 385.5,
              change: 5.25,
              percent: 1.38,
            },
          ].map((stock) => (
            <div
              key={stock.symbol}
              style={{
                backgroundColor: "#1a1a1a",
                padding: "1.5rem",
                borderRadius: "4px",
                border: "1px solid #333",
              }}
            >
              <h3
                style={{
                  fontSize: "0.875rem",
                  color: "#666",
                  marginBottom: "0.5rem",
                  fontFamily: "'SF Mono', Monaco, Consolas, monospace",
                }}
              >
                {stock.symbol} · {stock.name}
              </h3>
              <div
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "0.25rem",
                  fontFamily: "'SF Mono', Monaco, Consolas, monospace",
                }}
              >
                ${stock.price.toFixed(2)}
              </div>
              <div
                style={{
                  color: stock.change >= 0 ? "#4af6c3" : "#ff433d",
                  fontSize: "0.875rem",
                  fontFamily: "'SF Mono', Monaco, Consolas, monospace",
                }}
              >
                {stock.change >= 0 ? "+" : ""}
                {stock.change.toFixed(2)} ({stock.change >= 0 ? "+" : ""}
                {stock.percent.toFixed(2)}%)
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
