import React, { Component } from 'react';
import './scss/Header.scss';
import logo from '../../assets/img/logo.png';
import search from '../../assets/img/search.svg';
import cart from '../../assets/img/cart.svg';
import Toggle from '../../components/ToggleBtn/Toggle';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <h1 className="visually-hidden">Organic Shop</h1>
          <div className="header__wrapper">

            <Toggle />

            <nav className="header__nav nav">
              <img className="header__logo" src={logo} alt="logo" />
              <ul className="nav-site site">
                <li className="site__item"><a className="site__link active" href="/#">Home +</a></li>
                <li className="site__item"><a className="site__link" href="/#">About +</a></li>
                <li className="site__item"><a className="site__link" href="/#">Shop +</a></li>
                <li className="site__item"><a className="site__link" href="/#">Page +</a></li>
                <li className="site__item"><a className="site__link" href="/#">Contact</a></li>
              </ul>
              <ul className="nav-user user">
                <li className="user__login"><a className="user__login-btn" href="/#"> Login</a></li>
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
  }
}
