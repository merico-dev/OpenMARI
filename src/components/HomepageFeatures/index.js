import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '规范化指标定义',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        遵循《软件研发效能度量规范》标准，<br/>避免概念歧义，统一数据治理。
      </>
    ),
  },
  {
    title: '目标明确的系统化度量',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        从效能改进的目标出发，<br/>选取视图和指标，进行系统化度量。
      </>
    ),
  },
  {
    title: '合理有效的改进措施',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        向团队询问正确的问题，定位关联指标，<br/>辅助根因分析，快速迭代改进。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
