import React from "react";
import "./Promo.scss"

export default class Promo extends React.Component {
    render() {
        return(
            <section className="block promo">
                <div className="container">
                    <ul className="slider">
                        <li className="promo__wrapper">
                            <h2 className="promo__title">TASTY & HEALTHY&nbsp;<span
                                className="promo__stroke">ORGANIC</span> FOOD EVERYDAY</h2>
                            <button className="promo__btn btn">SHOP NOW</button>
                            <div className="promo__banner">ORANGE LEMON</div>
                        </li>

                    </ul>
                </div>
            </section>
        );
    }
}