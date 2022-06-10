import React, {Component} from "react";
import RandomProduct from "../RandomProduct/RandomProduct";
import PropTypes from "prop-types";

export default class NewsView extends Component {
    render() {

        const {showRandomProduct, toggleRandom} = this.props



        const productItem = showRandomProduct ? <RandomProduct/> : null;

        return(
            <section className="block news">
                <div className="container">
                    <h2 className="news__title title">LATEST BLOG</h2>

                    <ul className="news-list">
                        {productItem}
                    </ul>

                    <button className="btn" onClick={toggleRandom}>Toggle Random</button>
                </div>
            </section>
        )
    }
}

NewsView.propTypes = {
    showRandomProduct: PropTypes.bool.isRequired,
    toggleRandom: PropTypes.func.isRequired,
}