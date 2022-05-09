import React, {Component} from "react";

import "./Categories.scss"
import strawberry from "../../assets/img/strawberry.png";

export default class Categories extends Component {
    render() {
        return (
            <section className="block categories">
                <div className="container">
                    <h2 className="visually-hidden">Categories</h2>
                    <ul className="categories-list">
                        <li className="categories-item">
                            <img className="categories-item__img" src={strawberry} alt="strawberry"/>
                            <h3 className="categories-item__title">Vegetables</h3>
                            <p className="categories-item__text">Purchasing from select family farmers who farm
                                onganically.</p>
                            <a className="categories-item__btn btn" href="/#">SHOP NOW</a>
                        </li>
                        <li className="categories-item">
                            <img className="categories-item__img" src={strawberry} alt="strawberry"/>
                            <h3 className="categories-item__title">Vegetables</h3>
                            <p className="categories-item__text">Purchasing from select family farmers who farm
                                onganically.</p>
                            <a className="categories-item__btn btn" href="/#">SHOP NOW</a>
                        </li>
                        <li className="categories-item">
                            <img className="categories-item__img" src={strawberry} alt="strawberry"/>
                            <h3 className="categories-item__title">Vegetables</h3>
                            <p className="categories-item__text">Purchasing from select family farmers who farm
                                onganically.</p>
                            <a className="categories-item__btn btn" href="/#">SHOP NOW</a>
                        </li>
                        <li className="categories-item">
                            <img className="categories-item__img" src={strawberry} alt="strawberry"/>
                            <h3 className="categories-item__title">Vegetables</h3>
                            <p className="categories-item__text">Purchasing from select family farmers who farm
                                onganically.</p>
                            <a className="categories-item__btn btn" href="/#">SHOP NOW</a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}