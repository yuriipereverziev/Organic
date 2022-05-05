import React from "react";

import "./Featured.scss"

import FeaturedList from "../FeaturedList";

const Featured = () => {

    return (
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

                <FeaturedList/>

            </div>
        </section>
    );

}

export default Featured