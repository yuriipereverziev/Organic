import React, {Component} from "react";
import "./Promo.scss"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PromoView from "./PromoView";


export default class Promo extends Component {

    state = {
        sliderData: [
            {
                id: "1",
                title: "TASTY & HEALTHY",
                subtitle: "FOOD EVERYDAY",
                name: "ORGANIC",
                btnText: "SHOP NOW",
                banner: "ORANGE LEMON"
            },
            {
                id: "2",
                title: "TASTY & HEALTHY",
                subtitle: "FOOD EVERYDAY",
                name: "ORGANIC",
                btnText: "SHOP NOW",
                banner: "ORANGE LEMON"
            },
            {
                id: "3",
                title: "TASTY & HEALTHY",
                subtitle: "FOOD EVERYDAY",
                name: "ORGANIC",
                btnText: "SHOP NOW",
                banner: "ORANGE LEMON"
            }
        ]
    }

    render() {

        const {sliderData} = this.state



        return (
            <section className="block promo">
                <div className="container">
                    <ul className="slider">
                        <PromoView sliderData={sliderData}/>
                    </ul>
                </div>
            </section>
        );
    }
}