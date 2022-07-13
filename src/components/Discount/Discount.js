import React from 'react';
import './scss/Discount.scss';
import { useTranslation } from 'react-i18next';
import broccoli from '../../assets/img/broccoli.png';
import setVegetables from '../../assets/img/set-vegetables.png';

const Discount = () => {
  const { t } = useTranslation('', { keyPrefix: 'discount' });
  return (
    <section className="block discount">
      <div className="container">
        <div className="discount__wrapper">
          <div className="discount-block">
            <div className="discount-block__info">
              <h3 className="discount-block__title">{t('title')}</h3>
              <p className="discount-block__text">
                {t('text')}
              </p>
              <button type="button" className="discount-block__btn">{t('btn')}</button>
            </div>

            <img className="discount-block__img" src={broccoli} alt="broccoli" />

          </div>

          <div className="discount-block discount-block--blue">
            <div className="discount-block__info">
              <h3 className="discount-block__title">{t('title')}</h3>
              <p className="discount-block__text">
                {t('text')}
              </p>
              <button type="button" className="discount-block__btn discount-block__btn--blue">{t('btn')}</button>
            </div>

            <img className="discount-block__img" src={setVegetables} alt="vegetables" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
