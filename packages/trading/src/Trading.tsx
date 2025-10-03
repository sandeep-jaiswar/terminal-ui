import React from 'react';

export interface WatchlistProps {
  children?: React.ReactNode;
}

export function Watchlist({ children }: WatchlistProps): JSX.Element {
  return <div data-component="watchlist">{children}</div>;
}

Watchlist.displayName = 'Watchlist';

export interface PortfolioProps {
  children?: React.ReactNode;
}

export function Portfolio({ children }: PortfolioProps): JSX.Element {
  return <div data-component="portfolio">{children}</div>;
}

Portfolio.displayName = 'Portfolio';

export interface OrderBookProps {
  children?: React.ReactNode;
}

export function OrderBook({ children }: OrderBookProps): JSX.Element {
  return <div data-component="orderbook">{children}</div>;
}

OrderBook.displayName = 'OrderBook';
