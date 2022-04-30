import './App.scss';

import logo from './assets/img/logo.png';
import broccoli from './assets/img/broccoli.png';
import setVegetables from './assets/img/set-vegetables.png';
import benefitGirl from './assets/img/benefit-girl.png';
import biological from './assets/img/biological.png';
import speciality from './assets/img/speciality.png';
import strawberry from './assets/img/strawberry.png';
import paper from './assets/img/paper.png';
import newsLime from './assets/img/news-lime.png';
import name from './assets/img/name.png';
import tags from './assets/img/tags.png';
import comment from './assets/img/comment.png';
import logoWhite from './assets/img/logo-white.png';

function App() {
    return (
        <div className="App">
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

            <section className="block promo">
                <div className="container">
                    <ul className="slider">
                        <li className="promo__wrapper">
                            <h2 className="promo__title">TASTY & HEALTHY&nbsp;<span
                                className="promo__stroke">ORGANIC</span> FOOD EVERYDAY</h2>
                            <button className="promo__btn btn">SHOP NOW</button>
                            <div className="promo__banner">ORANGE LEMON</div>
                        </li>
                        {/*<li className="promo__wrapper">*/}
                        {/*    <h2 className="promo__title">TASTY & HEALTHY&nbsp;<span*/}
                        {/*        className="promo__stroke">ORGANIC</span> FOOD EVERYDAY</h2>*/}
                        {/*    <button className="promo__btn btn">SHOP NOW</button>*/}
                        {/*    <div className="promo__banner">ORANGE LEMON</div>*/}
                        {/*</li>*/}
                        {/*<li className="promo__wrapper">*/}
                        {/*    <h2 className="promo__title">TASTY & HEALTHY&nbsp;<span*/}
                        {/*        className="promo__stroke">ORGANIC</span> FOOD EVERYDAY</h2>*/}
                        {/*    <button className="promo__btn btn">SHOP NOW</button>*/}
                        {/*    <div className="promo__banner">ORANGE LEMON</div>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </section>
            <section className="block discount">
                <div className="container">
                    <div className="discount__wrapper">
                        <div className="discount-block">
                            <div className="discount-block__info">
                                <h3 className="discount-block__title">Get 10% off on Vegetables</h3>
                                <p className="discount-block__text">Shop our selection of organic fresh vegetables in a
                                    discounted price. 10% off on all vegetables.</p>
                                <button className="discount-block__btn">SHOP NOW</button>
                            </div>
                            {/*<picture>*/}
                            {/*    <source type="image/webp" srcSet="img/broccoli.webp">*/}
                            {/*        <img className="discount-block__img" src="./img/broccoli.png" alt="image"/>*/}
                            {/*    </source>*/}
                            {/*</picture>*/}

                            <img className="discount-block__img" src={broccoli} alt="broccoli"/>

                        </div>
                        <div className="discount-block discount-block--blue">
                            <div className="discount-block__info">
                                <h3 className="discount-block__title">Get 10% off on Vegetables</h3>
                                <p className="discount-block__text">Shop our selection of organic fresh vegetables in a
                                    discounted price. 10% off on all vegetables.</p>
                                <button className="discount-block__btn discount-block__btn--blue">SHOP NOW</button>
                            </div>
                            {/*<picture>*/}
                            {/*    <source type="image/webp" srcSet="img/set-vegetables.webp">*/}
                            {/*        <img className="discount-block__img" src="./img/set-vegetables.png" alt="image"/>*/}
                            {/*    </source>*/}
                            {/*</picture>*/}

                            <img className="discount-block__img" src={setVegetables} alt="vegetables"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="block benefit">
                <div className="container">
                    <div className="benefit__wrapper">
                        {/*<picture>*/}
                        {/*    <source media="(max-width: 1023px)" srcSet="img/dot.png">*/}
                        {/*        <img className="benefit__img" src="./img/benefit-girl.png" alt="image"/>*/}
                        {/*    </source>*/}
                        {/*</picture>*/}

                        <img className="benefit__img" src={benefitGirl} alt="girl"/>

                        <div className="benefit__main">
                            <h2 className="title benefit__title">We Are Healthy Food Organic.</h2>
                            <p className="benefit__text">Lorem Ipsum is simply dummy text of the printing and
                                typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when
                                an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It
                                has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.</p>
                            <div className="benefit__info">
                                <div className="benefit-bio">
                                    <img className="benefit-bio__img" src={biological} alt="biological"/>
                                    <div className="benefit-bio__wrapper">
                                        <h3 className="benefit-bio__title">Biological Benefits</h3>
                                        <p className="benefit-bio__text">We're making room for self care today with
                                            plan.</p>
                                    </div>
                                </div>
                                <div className="benefit-spec">
                                    <img className="benefit-spec__img" src={speciality} alt="speciality"/>
                                    <div className="benefit-spec__wrapper">
                                        <h3 className="benefit-spec__title">Speciality Product</h3>
                                        <p className="benefit-spec__text">We're making room for self care today with
                                            plan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="benefit__banner">ABOUT US</div>
                    </div>
                </div>
            </section>
            <section className="block categories">
                <div className="container">
                    <h2 className="visually-hidden">Categories</h2>
                    <ul className="categories-list">
                        <li className="categories-item"><img className="categories-item__img" src={strawberry}
                                                             alt="strawberry"/>
                            <h3 className="categories-item__title">Vegetables</h3>
                            <p className="categories-item__text">Purchasing from select family farmers who farm
                                onganically.</p><a className="categories-item__btn btn" href="/#">SHOP NOW</a>
                        </li>
                        <li className="categories-item"><img className="categories-item__img" src={strawberry}
                                                             alt="strawberry"/>
                            <h3 className="categories-item__title">Vegetables</h3>
                            <p className="categories-item__text">Purchasing from select family farmers who farm
                                onganically.</p><a className="categories-item__btn btn" href="/#">SHOP NOW</a>
                        </li>
                        <li className="categories-item"><img className="categories-item__img" src={strawberry}
                                                             alt="strawberry"/>
                            <h3 className="categories-item__title">Vegetables</h3>
                            <p className="categories-item__text">Purchasing from select family farmers who farm
                                onganically.</p><a className="categories-item__btn btn" href="/#">SHOP NOW</a>
                        </li>
                        <li className="categories-item"><img className="categories-item__img" src={strawberry}
                                                             alt="strawberry"/>
                            <h3 className="categories-item__title">Vegetables</h3>
                            <p className="categories-item__text">Purchasing from select family farmers who farm
                                onganically.</p><a className="categories-item__btn btn" href="/#">SHOP NOW</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="block statistics">
                <div className="container">
                    <h2 className="visually-hidden">Statistics</h2>
                    <ul className="statistics__list">
                        <li className="statistics__item">1570+<span className="statistics__info">Total Products</span>
                        </li>
                        <li className="statistics__item">3560+<span className="statistics__info">Satisfied
                            Clients</span>
                        </li>
                        <li className="statistics__item">4550+<span className="statistics__info">Project
                            Completed</span>
                        </li>
                        <li className="statistics__item">130+<span className="statistics__info">Awards Winning</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="block featured">
                <div className="container">
                    <h2 className="featured__title title">Featured Products</h2>
                    <div className="featured__sort">
                        <button className="featured__btn active">All</button>
                        <button className="featured__btn">Food</button>
                        <button className="featured__btn">Organic</button>
                        <button className="featured__btn">Fruits</button>
                        <button className="featured__btn">Health</button>
                        <button className="featured__btn">Seafood</button>
                    </div>
                    <ul className="featured-list">
                        <li className="featured-item">
                            <div className="featured-item__top">
                                <img className="featured-item__img" src={paper} alt="paper"/></div>
                            <div className="featured-item__main">
                                <h3 className="featured-item__title">Red Pepper</h3><span
                                className="featured-item__price">$10.00
                                - $20.00</span>
                                <div className="featured-item__rating">
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                </div>
                                <a className="featured-item__btn btn" href="/#">SHOP NOW</a>
                            </div>
                        </li>
                        <li className="featured-item">
                            <div className="featured-item__top"><img className="featured-item__img" src={paper}
                                                                     alt="paper"/></div>
                            <div className="featured-item__main">
                                <h3 className="featured-item__title">Red Pepper</h3><span
                                className="featured-item__price">$10.00
                                - $20.00</span>
                                <div className="featured-item__rating">
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                </div>
                                <a className="featured-item__btn btn" href="/#">SHOP NOW</a>
                            </div>
                        </li>
                        <li className="featured-item">
                            <div className="featured-item__top"><img className="featured-item__img" src={paper}
                                                                     alt="paper"/></div>
                            <div className="featured-item__main">
                                <h3 className="featured-item__title">Red Pepper</h3><span
                                className="featured-item__price">$10.00
                                - $20.00</span>
                                <div className="featured-item__rating">
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                </div>
                                <a className="featured-item__btn btn" href="/#">SHOP NOW</a>
                            </div>
                        </li>
                        <li className="featured-item">
                            <div className="featured-item__top"><img className="featured-item__img" src={paper}
                                                                     alt="paper"/></div>
                            <div className="featured-item__main">
                                <h3 className="featured-item__title">Red Pepper</h3><span
                                className="featured-item__price">$10.00
                                - $20.00</span>
                                <div className="featured-item__rating">
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                </div>
                                <a className="featured-item__btn btn" href="/#">SHOP NOW</a>
                            </div>
                        </li>
                        <li className="featured-item">
                            <div className="featured-item__top"><img className="featured-item__img" src={paper}
                                                                     alt="paper"/></div>
                            <div className="featured-item__main">
                                <h3 className="featured-item__title">Red Pepper</h3><span
                                className="featured-item__price">$10.00
                                - $20.00</span>
                                <div className="featured-item__rating">
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                </div>
                                <a className="featured-item__btn btn" href="/#">SHOP NOW</a>
                            </div>
                        </li>
                        <li className="featured-item">
                            <div className="featured-item__top"><img className="featured-item__img" src={paper}
                                                                     alt="paper"/></div>
                            <div className="featured-item__main">
                                <h3 className="featured-item__title">Red Pepper</h3><span
                                className="featured-item__price">$10.00
                                - $20.00</span>
                                <div className="featured-item__rating">
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                    <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.891 8.087a.753.753 0 0 0-.218.663l.608 3.367a.739.739 0 0 1-.308.738.753.753 0 0 1-.8.055l-3.03-1.58a.775.775 0 0 0-.342-.09h-.186a.555.555 0 0 0-.185.062L3.4 12.89a.8.8 0 0 1-.486.075.76.76 0 0 1-.61-.87l.61-3.366a.766.766 0 0 0-.218-.67L.225 5.665a.739.739 0 0 1-.184-.773.768.768 0 0 1 .608-.513l3.4-.494a.76.76 0 0 0 .603-.416L6.15.397a.712.712 0 0 1 .137-.185l.061-.048a.46.46 0 0 1 .11-.089l.075-.027L6.649 0h.288c.258.027.484.18.602.41l1.519 3.06a.76.76 0 0 0 .567.416l3.4.494c.288.04.528.24.623.513a.743.743 0 0 1-.198.773l-2.56 2.421Z" fill="#F90"/></svg>
                                </div>
                                <a className="featured-item__btn btn" href="/#">SHOP NOW</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="block offer">
                <div className="container">
                    <div className="offer__wrapper">
                        <h2 className="offer__title">Dhamaka offer</h2>
                        <p className="offer__subtitle">35%&nbsp;<span>off</span></p><a className="offer__btn" href="/#">BUY
                        NOW</a>
                    </div>
                    <div className="offer__banner">ORANGE</div>
                </div>
            </section>
            <section className="block news">
                <div className="container">
                    <h2 className="news__title title">LATEST BLOG</h2>
                    <ul className="news-list">
                        <li className="news-item">
                            {/*<picture>*/}
                            {/*    <source type="image/webp" srcSet="img/news-lime.webp">*/}
                            {/*        */}
                            {/*        <img className="news-item__prod" src="./img/news-lime.png alt="image"/>*/}
                            {/*    </source>*/}
                            {/*</picture>*/}
                            <img className="news-item__prod" src={newsLime} alt="lime"/>
                            <div className="news-item__main">
                                <div className="news-item__info">
                                    <div className="news-item__name">
                                        <img className="news-item__img" src={name} alt="name"/><span
                                        className="news-item__decription">By: Admin</span></div>
                                    <div className="news-item__services">
                                        <img className="news-item__img" src={tags} alt="tags"/><span
                                        className="news-item__decription">Services</span></div>
                                    <div className="news-item__comment">
                                        <img className="news-item__img" src={comment} alt="comment"/><span
                                        className="news-item__decription">04 Comment</span></div>
                                </div>
                                <div className="news-item__text">Common engine oil problems and solutions</div>
                                <div className="news-item__footer"><span className="news-item__calendar">August 27,
                                    2021</span><a className="news-item__btn" href="/#">READ MORE ›</a></div>
                            </div>
                        </li>
                        <li className="news-item">
                            {/*<picture>*/}
                            {/*    <source type="image/webp" srcSet="img/news-lime.webp"><img className="news-item__prod"*/}
                            {/*                                                               src="./img/news-lime.png*/}
                            {/*                                                               alt="image"/>*/}
                            {/*    </source>*/}
                            {/*</picture>*/}
                            <img className="news-item__prod" src={newsLime} alt="lime"/>
                            <div className="news-item__main">
                                <div className="news-item__info">
                                    <div className="news-item__name">
                                        <img className="news-item__img" src={name} alt="name"/>
                                        <span className="news-item__decription">By: Admin</span>
                                    </div>
                                    <div className="news-item__services">
                                        <img className="news-item__img" src={tags} alt="tags"/>
                                        <span className="news-item__decription">Services</span>
                                    </div>
                                    <div className="news-item__comment">
                                        <img className="news-item__img" src={comment} alt="comment"/>
                                        <span className="news-item__decription">04 Comment</span>
                                    </div>
                                </div>
                                <div className="news-item__text">Common engine oil problems and solutions</div>
                                <div className="news-item__footer"><span className="news-item__calendar">August 27,
                                    2021</span><a className="news-item__btn" href="/#">READ MORE ›</a></div>
                            </div>
                        </li>
                        <li className="news-item">
                            {/*<picture>*/}
                            {/*    <source type="image/webp" srcSet="img/news-lime.webp"><img className="news-item__prod"*/}
                            {/*                                                               src="./img/news-lime.png*/}
                            {/*                                                               alt="image"/>*/}
                            {/*    </source>*/}
                            {/*</picture>*/}
                            <img className="news-item__prod" src={newsLime} alt="lime"/>
                            <div className="news-item__main">
                                <div className="news-item__info">
                                    <div className="news-item__name">
                                        <img className="news-item__img" src={name} alt="name"/><span
                                        className="news-item__description">By: Admin</span></div>
                                    <div className="news-item__services">
                                        <img className="news-item__img" src={tags} alt="tags"/><span
                                        className="news-item__description">Services</span></div>
                                    <div className="news-item__comment">
                                        <img className="news-item__img" src={comment} alt="comment"/>
                                        <span className="news-item__description">04 Comment</span></div>
                                </div>
                                <div className="news-item__text">Common engine oil problems and solutions</div>
                                <div className="news-item__footer"><span className="news-item__calendar">August 27,
                                    2021</span><a className="news-item__btn" href="/#">READ MORE ›</a></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <img className="footer__logo logo" src={logoWhite} alt="logo"/>
                        <ul className="social-list">
                            <li className="social-item social-item--figma"><a className="social-item__link"
                                                                              href="https://www.figma.com/file/0Z0gvYHA3PBQ3AW60JIt3J/Orgamic-ShopWebsite?node-id=0%3A1"
                                                                              target="_blank" rel="noreferrer" >
                                <svg className="figma" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
                                     fill="white">
                                    <path
                                        d="M183.03955,94.00049A39.98706,39.98706,0,0,0,162,20.001H94A39.98706,39.98706,0,0,0,72.96045,94.00049,39.96375,39.96375,0,0,0,72.96143,162,39.9924,39.9924,0,1,0,134,195.99951v-39.47a39.98084,39.98084,0,1,0,49.03955-62.529ZM190,60.001a28.03114,28.03114,0,0,1-27.98047,27.99951L162,88l-.03857.001L134,88V32.001h28A28.03145,28.03145,0,0,1,190,60.001Zm-124,0a28.03145,28.03145,0,0,1,28-28h28V88H94l-.019.00049A28.03132,28.03132,0,0,1,66,60.001ZM66,128a28.03123,28.03123,0,0,1,27.981-27.99951L94,100.001l28-.00074V155.999L94,156A28.03146,28.03146,0,0,1,66,128Zm28,95.999A27.99951,27.99951,0,1,1,94,168l28-.00073v28.00024A28.03135,28.03135,0,0,1,94,223.999ZM162,156a27.99952,27.99952,0,0,1-.03857-55.999H162l.019-.00049A27.99976,27.99976,0,0,1,162,156Z"></path>
                                </svg>
                            </a></li>
                            <li className="social-item social-item--linkedin"><a className="social-item__link"
                                                                                 href="https://www.linkedin.com/in/yuriipereverziev/"
                                                                                 target="_blank" rel="noreferrer" >
                                <svg className="linkedin" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="white">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                </svg>
                            </a></li>
                            <li className="social-item social-item--github"><a className="social-item__link"
                                                                               href="https://github.com/yuriipereverziev/yuriipereverziev.github.io"
                                                                               target="_blank" rel="noreferrer" >
                                <svg className="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="white">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                </svg>
                            </a></li>
                        </ul>
                        <p className="footer__create">Created by Yurii Pereverziev</p>
                        <p className="footer__copyright">Copyright © 2021, Orgamic. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
