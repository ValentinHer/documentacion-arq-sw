import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <div style={{ display: "flex", backgroundColor: '#334', alignItems: 'center', justifyContent: 'space-around' }}>
        <div style={{marginBlock: 40}}>
          <Heading as="h1" style={{color: 'white', fontSize: 50, marginBottom: 60, flexWrap: 'wrap'}}>
            {siteConfig.title}
          </Heading>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Empezar a aprender 🚀
            </Link>
          </div>
        </div>
        {/* <img src="/img/patterns-01.png" style={{marginBlock: 40}} /> */}
        <img src="/img/iterator-es.png" style={{marginBlock: 40}} />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentacion de partrones de diseño de comportamiento"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
