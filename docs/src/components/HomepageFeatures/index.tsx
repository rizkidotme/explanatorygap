import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Belajar sendiri dengan sukarela (autonomy)',
    description: (
      <>
        Autonomi adalah aspek penting dalam pembelajaran aktif. 
        riset menunjukkan bahwa siswa yang memiliki kebebasan dalam memilih topik yang akan dipelajari, memiliki kemampuan untuk mengembangkan keterampilan yang lebih baik.
      </>
    ),
  },
  {
    title: 'Fokus pada relevansi industri (relevance)',
    description: (
      <>
        Dunia begitu cepat berubah kurikulum Universitas yang rigid dalam 4 tahun menyediakan keterampilan yang tidak realevan secara praktis bagi industri. untuk itu perlunya kemampuan membaca pasar.
      </>
    ),
  },
  {
    title: 'Diberdayakan oleh Komnunitas (community)',
    description: (
      <>
        Mari bergabung dengan komunitas ICP Challenge untuk membangun ekosistem pembelajaran yang lebih baik.
        dengan adanya komunitas, kita dapat saling berbagi dan saling membantu untuk mencapai tujuan bersama.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
