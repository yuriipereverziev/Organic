import React, {Component} from "react";
import Storeapi from "../../services/Storeapi";
import RandomView from "./RandomView";

export default class RandomProduct extends Component {
    storeapi = new Storeapi();

    state = {
        product: {},
    }

    componentDidMount() {
        this.updateProduct();
        this.interval = setInterval(this.updateProduct, 500);
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
            <RandomView title={title} image={image} category={category} />
        )
    }
}
