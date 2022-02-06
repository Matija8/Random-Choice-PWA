import { RandomChoice } from 'components/choice';
import { SiteHead } from 'components/site-head';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className={``}>
      <SiteHead title="Random Choice App!" />
      <main style={{ marginTop: '10vh' }}>
        <RandomChoice />
      </main>
    </div>
  );
};

export default Home;
