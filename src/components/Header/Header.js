import React from "react";
import "./Header.scss"
import logo from "../../assets/img/logo.png";

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <h1 className="visually-hidden">Organic Shop</h1>
                    <div className="header__wrapper">
                        <nav className="header__nav nav"><img className="header__logo" src={logo} alt="logo"/>
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
                                    <button className="user__search-btn">
                                        <svg className="search__img" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.07906 13.1581C10.4364 13.1581 13.1581 10.4364 13.1581 7.07906C13.1581 3.72169 10.4364 1 7.07906 1C3.72169 1 1 3.72169 1 7.07906C1 10.4364 3.72169 13.1581 7.07906 13.1581Z" stroke="black" />
                                            <path d="M11.3071 11.623L13.6904 14.0002" stroke="black" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="user__cart">
                                    <button className="user__cart-btn">
                                        <svg className="cart__img" width="16" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 1.499.26.694 8.266c.055.675.62 1.194 1.297 1.191h7.86a1.297 1.297 0 0 0 1.286-1.114l.684-4.725a.967.967 0 0 0-.818-1.094c-.046-.007-10.763-.01-10.763-.01M9.196 6.437h1.998" stroke="#000" /><path  d="M4.174 13.215a.392.392 0 1 1 0 .784.392.392 0 0 1 0-.784ZM12.302 13.215a.393.393 0 1 1 0 .785.393.393 0 0 1 0-.785Z" fill="#000" stroke="#000" /></svg>
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