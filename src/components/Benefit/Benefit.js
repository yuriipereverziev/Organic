import React from 'react';

import './scss/Benefit.scss';
import { useTranslation } from 'react-i18next';
import benefitGirl from '../../assets/img/benefit-girl.png';
import biological from '../../assets/img/biological.png';
import speciality from '../../assets/img/speciality.png';

const Benefit = () => {
  const { t } = useTranslation('', { keyPrefix: 'benefit' });
  return (
    <section className="block benefit">
      <div className="container">
        <div className="benefit__wrapper">

          <img className="benefit__img" src={benefitGirl} alt="girl" />

          <div className="benefit__main">
            <h2 className="title benefit__title">{t('title')}</h2>
            <p className="benefit__text">
              {t('text')}
            </p>
            <div className="benefit__info">
              <div className="benefit-bio">
                <img className="benefit-bio__img" src={biological} alt="biological" />
                <div className="benefit-bio__wrapper">
                  <h3 className="benefit-bio__title">{t('bioTitle')}</h3>
                  <p className="benefit-bio__text">
                    {t('bioText')}
                  </p>
                </div>
              </div>
              <div className="benefit-spec">
                <img className="benefit-spec__img" src={speciality} alt="speciality" />
                <div className="benefit-spec__wrapper">
                  <h3 className="benefit-spec__title">{t('specTitle')}</h3>
                  <p className="benefit-spec__text">
                    {t('specText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="benefit__banner">{t('banner')}</div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
