import { RandomChoice } from 'components/choice';
import { SiteHead } from 'components/site-head';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className={``}>
      <SiteHead title="Random Choice App!" />
      <main style={{ paddingTop: '4rem', inset: 0, position: 'absolute' }}>
        <RandomChoice />
      </main>
    </div>
  );
};

export default Home;
