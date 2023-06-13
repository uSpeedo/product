import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageMain from '@site/src/components/HomepageMain';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig, i18n } = useDocusaurusContext();

  console.log("i18n", siteConfig, i18n.currentLocale)

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate id="title"></Translate>
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/sms/sdk/signature-2">
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Docs`}
      description="uSpeedo SMS document">
      <HomepageHeader />
      <HomepageMain />
    </Layout>
  );
}
