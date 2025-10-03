import type { NextPage } from 'next';
import { Button } from '@sandeep-jaiswar/ui';
import { formatCurrency } from '@sandeep-jaiswar/utils';

const Home: NextPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>@sandeep-jaiswar/ui Examples</h1>
      <p>Usage examples for the component library</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Button Examples</h2>
        <Button onClick={() => alert('Buy order placed!')}>
          Buy 100 AAPL @ {formatCurrency(150.25)}
        </Button>
      </section>
    </div>
  );
};

export default Home;
