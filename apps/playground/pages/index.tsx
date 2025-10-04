import type { NextPage } from 'next';
import { Button } from '@sandeep-jaiswar/ui';
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
