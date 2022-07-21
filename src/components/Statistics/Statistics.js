import React from 'react';
import './scss/Statistics.scss';
import { useTranslation } from 'react-i18next';

const Statistics = () => {
  const { t } = useTranslation('', { keyPrefix: 'statistics' });
  return (
    <section className="block statistics">
      <div className="container">

        <h2 className="visually-hidden">Statistics</h2>
        <ul className="statistics__list">
          <li className="statistics__item">
            1570+
            <span className="statistics__info">{t('text1')}</span>
          </li>
          <li className="statistics__item">
            3560+
            <span className="statistics__info">{t('text2')}</span>
          </li>
          <li className="statistics__item">
            4550+
            <span className="statistics__info">{t('text3')}</span>
          </li>
          <li className="statistics__item">
            130+
            <span className="statistics__info">{t('text4')}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Statistics;
