import React, {Component} from "react";

import "./News.scss"

import RandomProduct from "../RandomProduct";

export default class News extends Component {

    state = {
        showRandomProduct: true,
    }

    toggleRandomProduct = () => {
        this.setState((state) => {
            return {
                showRandomProduct: !state.showRandomProduct
            }
        });
    };


    render() {

        const productItem = this.state.showRandomProduct ? <RandomProduct/> : null;

        return (
            <section className="block news">
                <div className="container">
                    <h2 className="news__title title">LATEST BLOG</h2>

                    <ul className="news-list">
                        {productItem}
                    </ul>

                    <button className="btn" onClick={this.toggleRandomProduct}>Toggle Random</button>
                </div>
            </section>
        );
    }
}