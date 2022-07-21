import React from 'react';
import { useTranslation } from 'react-i18next';
import './scss/Categories.scss';
import strawberry from '../../assets/img/strawberry.png';

const Categories = () => {
  const { t } = useTranslation('', { keyPrefix: 'categories' });
  return (
    <section className="block categories">
      <div className="container">
        <h2 className="visually-hidden">Categories</h2>
        <ul className="categories-list">
          <li className="categories-item">
            <img className="categories-item__img" src={strawberry} alt="strawberry" />
            <h3 className="categories-item__title">{t('title')}</h3>
            <p className="categories-item__text">
              {t('text')}
            </p>
            <a className="categories-item__btn btn" href="/#">{t('btn')}</a>
          </li>
          <li className="categories-item">
            <img className="categories-item__img" src={strawberry} alt="strawberry" />
            <h3 className="categories-item__title">{t('title')}</h3>
            <p className="categories-item__text">
              {t('text')}
            </p>
            <a className="categories-item__btn btn" href="/#">{t('btn')}</a>
          </li>
          <li className="categories-item">
            <img className="categories-item__img" src={strawberry} alt="strawberry" />
            <h3 className="categories-item__title">{t('title')}</h3>
            <p className="categories-item__text">
              {t('text')}
            </p>
            <a className="categories-item__btn btn" href="/#">{t('btn')}</a>
          </li>
          <li className="categories-item">
            <img className="categories-item__img" src={strawberry} alt="strawberry" />
            <h3 className="categories-item__title">{t('title')}</h3>
            <p className="categories-item__text">
              {t('text')}
            </p>
            <a className="categories-item__btn btn" href="/#">{t('btn')}</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Categories;
