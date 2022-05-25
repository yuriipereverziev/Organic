import React, {Component} from "react";


import Storeapi from "../../services/Storeapi";

import tags from "../../assets/img/tags.png";
import comment from "../../assets/img/comment.png";
import name from "../../assets/img/name.png";

export default class RandomProduct extends Component {

    storeapi = new Storeapi();

    state = {
        product: {},
    }

    componentDidMount() {
        this.updateProduct();
        this.interval = setInterval(this.updateProduct, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onProductLoaded = (product) => {
        this.setState({
            product
        })
    }

    updateProduct = () => {
        const id = Math.floor(Math.random()*10);
        this.storeapi
            .getProduct(id)
            .then(this.onProductLoaded);
    }

    componentDidUpdate( prevProps, prevState, snapshot) {
        console.log('componentDidUpdate()')
    }

    render() {
        const {product: { title,image,category}} = this.state;

        return (
            <li className="news-item">
                <img className="news-item__prod" src={image} alt="lime"/>
                <div className="news-item__main">
                    <div className="news-item__info">
                        <div className="news-item__name">
                            <img className="news-item__img" src={name} alt="name"/>
                            <span className="news-item__description">By: Admin</span>
                        </div>
                        <div className="news-item__services">
                            <img className="news-item__img" src={tags} alt="tags"/>
                            <span className="news-item__description">{category}</span>
                        </div>
                        <div className="news-item__comment">
                            <img className="news-item__img" src={comment} alt="comment"/>
                            <span className="news-item__description">04 Comment</span>
                        </div>
                    </div>
                    <h3 className="news-item__title">{title}</h3>
                    <div className="news-item__footer">
                        <span className="news-item__calendar">August 27, 2021</span>
                        <a className="news-item__btn" href="/#">READ MORE ›</a>
                    </div>
                </div>
            </li>
        )
    }
}
