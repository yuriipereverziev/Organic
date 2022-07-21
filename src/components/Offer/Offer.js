import React from 'react';
import './scss/Offer.scss';
import { useTranslation } from 'react-i18next';

const Offer = () => {
  const { t } = useTranslation('', { keyPrefix: 'offer' });
  return (
    <section className="block offer">
      <div className="container">
        <div className="offer__wrapper">
          <h2 className="offer__title">{t('title')}</h2>
          <p className="offer__subtitle">
            35%&nbsp;
            <span>{t('discount')}</span>
          </p>
          <a className="offer__btn" href="/#">{t('btn')}</a>
        </div>
        <div className="offer__banner">{t('banner')}</div>
      </div>
    </section>
  );
};

export default Offer;
