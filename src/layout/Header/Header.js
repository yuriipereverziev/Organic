import React from 'react';
import './scss/Header.scss';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/img/logo.png';
import search from '../../assets/img/search.svg';
import cart from '../../assets/img/cart.svg';
import Toggle from '../../components/ToggleBtn/Toggle';

const Header = () => {
  const { t, i18n } = useTranslation();

  const onChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="visually-hidden">{t('header.title')}</h1>
        <div className="header__wrapper">

          <div className="header__info">

            <div className="header__language language">
              <button className="language__btn" onClick={() => onChangeLang('en')} type="button">English</button>
              <button className="language__btn" onClick={() => onChangeLang('ua')} type="button">Ukraine</button>
            </div>

            <Toggle />
          </div>

          <nav className="header__nav nav">
            <img className="header__logo" src={logo} alt="logo" />
            <ul className="nav-site site">
              <li className="site__item"><a className="site__link active" href="/#">{t('header.home')}</a></li>
              <li className="site__item"><a className="site__link" href="/#">{t('header.about')}</a></li>
              <li className="site__item"><a className="site__link" href="/#">{t('header.shop')}</a></li>
              <li className="site__item"><a className="site__link" href="/#">{t('header.page')}</a></li>
              <li className="site__item"><a className="site__link" href="/#">{t('header.contact')}</a></li>
            </ul>
            <ul className="nav-user user">
              <li className="user__login"><a className="user__login-btn" href="/#">{t('header.login')}</a></li>
              <li className="user__search">
                <button type="button" className="user__search-btn">
                  <img className="search__img" src={search} alt="search" />
                </button>
              </li>
              <li className="user__cart">
                <button type="button" className="user__cart-btn">
                  <img className="cart__img" src={cart} alt="cart" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
