import type { NextPage } from 'next';
import { Button, Card, CardHeader, CardContent, CardFooter } from '@sandeep-jaiswar/ui';
import { useState } from 'react';

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Action completed!');
    }, 2000);
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ marginBottom: '2rem' }}>@sandeep-jaiswar/ui Playground</h1>
      <p style={{ marginBottom: '2rem', color: '#666' }}>Development playground for testing components</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Card Variants</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Card variant="default" style={{ width: '240px' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Default Card</h4>
              <p style={{ color: '#666', fontSize: '0.875rem' }}>Standard card style</p>
            </Card>
            
            <Card variant="elevated" style={{ width: '240px' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Elevated Card</h4>
              <p style={{ color: '#666', fontSize: '0.875rem' }}>Card with shadow</p>
            </Card>
            
            <Card variant="outlined" style={{ width: '240px' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Outlined Card</h4>
              <p style={{ color: '#666', fontSize: '0.875rem' }}>Transparent background</p>
            </Card>
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Trading Card Example</h2>
          <Card variant="elevated" style={{ width: '320px' }}>
            <CardHeader>
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                  AAPL | 150.00 +1.50 (+1.01%)
                </h3>
              </div>
              <button
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#666',
                  cursor: 'pointer',
                  fontSize: '1.25rem',
                }}
              >
                ⚙
              </button>
            </CardHeader>
            
            <CardContent>
              <div style={{ marginBottom: '1rem' }}>
                <svg width="100%" height="60" style={{ marginBottom: '0.5rem' }}>
                  <polyline
                    points="0,50 20,45 40,40 60,35 80,30 100,25 120,30 140,20 160,15 180,10 200,5"
                    fill="none"
                    stroke="#4af6c3"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p style={{ color: '#666', fontSize: '0.875rem' }}>
                News: Apple stock rises on strong earnings report.
              </p>
            </CardContent>
            
            <CardFooter>
              <Button variant="secondary" size="sm" style={{ flex: 1 }}>
                View Chart
              </Button>
              <Button variant="primary" size="sm" style={{ flex: 1 }}>
                Trade
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Dashboard Grid</h2>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(3, 1fr)", 
            gap: "1rem",
            maxWidth: "900px"
          }}>
            <Card variant="elevated" style={{ gridColumn: "span 2" }}>
              <CardHeader>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  Portfolio Overview
                </h3>
              </CardHeader>
              <CardContent>
                <p style={{ color: '#4af6c3', fontSize: '1.5rem', marginBottom: '0.5rem' }}>+12.5% Today</p>
                <p style={{ color: '#666', fontSize: '0.875rem' }}>Total Value: $1.2M</p>
              </CardContent>
            </Card>
            
            <Card variant="elevated">
              <CardHeader>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  Market Summary
                </h3>
              </CardHeader>
              <CardContent>
                <p style={{ color: '#ff433d', fontSize: '0.875rem' }}>S&P 500: -0.45%</p>
                <p style={{ color: '#ff433d', fontSize: '0.875rem' }}>NASDAQ: -0.68%</p>
              </CardContent>
            </Card>
            
            <Card variant="elevated">
              <CardHeader>
                <h3 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  Top Gainers
                </h3>
              </CardHeader>
              <CardContent>
                <div style={{ fontSize: '1.125rem' }}>20 BB 93</div>
                <div style={{ color: '#0068ff', fontSize: '0.75rem' }}>Moomss 11.9M</div>
              </CardContent>
            </Card>
            
            <Card variant="elevated">
              <CardHeader>
                <h3 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  Top Losers
                </h3>
              </CardHeader>
              <CardContent>
                <div style={{ fontSize: '1.125rem' }}>10.8B1B5</div>
                <div style={{ color: '#0068ff', fontSize: '0.75rem' }}>Moomss 1F.1M</div>
              </CardContent>
            </Card>
            
            <Card variant="elevated">
              <CardHeader>
                <h3 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  Commodities
                </h3>
              </CardHeader>
              <CardContent>
                <div style={{ fontSize: '1.125rem' }}>10B9.D3</div>
                <div style={{ color: '#0068ff', fontSize: '0.75rem' }}>Moomss 11.3M</div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Button Variants</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="primary" onClick={handleClick} loading={loading}>
              Primary
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Buy</Button>
            <Button variant="danger">Sell</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Button Sizes</h2>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Trading Example</h2>
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            padding: '2rem', 
            borderRadius: '8px',
            border: '1px solid #333'
          }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>AAPL - $150.25</h3>
            <p style={{ marginBottom: '1.5rem', color: '#4af6c3' }}>+2.45 (+1.66%)</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Button variant="success" size="lg">
                Buy 100 shares
              </Button>
              <Button variant="danger" size="lg">
                Sell Position
              </Button>
              <Button variant="secondary">Set Alert</Button>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Button States</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button loading>Loading...</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
