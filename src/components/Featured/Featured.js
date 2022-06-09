import React, {Component} from "react";

import "./Featured.scss"

import FeaturedView from "./FeaturedView";
import Storeapi from "../../services/Storeapi";

export default class Featured extends Component {
    storeapi = new Storeapi();

    maxId = 100;
    maxOrder = 100;

    state = {
        featuredListData: [],
        dragId: null,
        loading: true,

    }

    onProductLoaded = (featuredListData) => {
        this.setState(() => {
            const newArr = [...featuredListData]
            let count = 1

            newArr.map((item) => {
                item.order = count++
                return item
            })

            return {
                featuredListData: newArr,
                loading: false,
                error: false,
            }
        })
    }

    componentDidMount() {
        this.updateProductLimit();
    }

    onError = (err) => {

        this.setState({
            error: true,
            loading: false
        })
    }

    updateProductLimit = () => {
        const limit = 6;
        this.storeapi
            .getProductsLimit(limit)
            .then(this.onProductLoaded)
            .catch(this.onError);
    }

    sortItem = () => {

        this.setState(({featuredListData}) => {

            const newArray = [...featuredListData]

            newArray.sort((a, b) => {
                return a.price > b.price ? 1 : -1
            })

            return {
                featuredListData: newArray
            }
        })
    }

    bblSort = () => {
        this.setState(({featuredListData}) => {

            const arr = [...featuredListData]

            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < (arr.length - i - 1); j++) {

                    if (arr[j].price > arr[j + 1].price) {

                        let temp = arr[j]
                        arr[j] = arr[j + 1]
                        arr[j + 1] = temp
                    }
                }
            }

            return {
                featuredListData: arr
            }
        })
    }

    deleteItem = () => {
        this.setState(({featuredListData}) => {
            const newArray = [...featuredListData.slice(0, featuredListData.length - 1)]
            return {featuredListData: newArray}
        })
    }

    addItem = () => {
        const newItem = {
            id: this.maxId++,
            order: this.maxOrder++,
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }

        this.setState(({featuredListData}) => {
            const newArray = [...featuredListData, newItem]
            return {featuredListData: newArray}
        })
    }

    handleDrag = (e, id) => {
        this.setState({
            dragId: id
        })
    };

    handleDrop = (e, card) => {
        const {dragId} = this.state

        this.setState(({featuredListData}) => {
            const newArray = [...featuredListData]

            const dragItem = newArray.find((item) => item.id === dragId);
            const dropItem = newArray.find((item) => item.id === card.id);

            const newArrayData = newArray.map((item) => {
                if (item.id === dragId) {
                    return {...item, order: dropItem.order}
                }
                if (item.id === card.id) {
                    return {...item, order: dragItem.order}
                }
                return item;
            });

            newArrayData.sort((a, b) => {
                return a.order - b.order
            })

            return {featuredListData: newArrayData}
        })
    };

    render() {
        const {featuredListData, loading, error} = this.state

        return (
            <FeaturedView featuredListData={featuredListData}
                          bblSort={this.bblSort}
                          sortItem={this.sortItem}
                          deleteItem={this.deleteItem}
                          addItem={this.addItem}
                          handleDrag={this.handleDrag}
                          handleDrop={this.handleDrop}
                          loading={loading}
                          error={error}
            />
        );
    }
}