import type { NextPage } from 'next';
import { Button } from '@sandeep-jaiswar/ui';

const Home: NextPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>@sandeep-jaiswar/ui Playground</h1>
      <p>Development playground for testing components</p>
      <div style={{ marginTop: '2rem' }}>
        <Button onClick={() => alert('Button clicked!')}>
          Test Button
        </Button>
      </div>
    </div>
  );
};

export default Home;
