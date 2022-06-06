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
                featuredListData: newArr
            }
        })
    }

    componentDidMount() {
        this.updateProductLimit();
    }

    updateProductLimit = () => {
        const limit = 6;
        this.storeapi
            .getProductsLimit(limit)
            .then(this.onProductLoaded);
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

    handleDrag = (e) => {
        this.setState({
            dragId: Number(e.currentTarget.id)
        })
    };

    handleDrop = (e) => {
        const dragItem = this.state.featuredListData.find((item) => item.id === this.state.dragId);
        const dropItem = this.state.featuredListData.find((item) => item.id === Number(e.currentTarget.id));

        const dragItemOrder = dragItem.order;
        const dropItemOrder = dropItem.order;

        const newItemState = this.state.featuredListData.map((item) => {

            if (item.id === this.state.dragId) {
                item.order = dropItemOrder;
            }
            if (item.id === Number(e.currentTarget.id)) {
                item.order = dragItemOrder;
            }
            return item;
        });

        newItemState.sort((a, b) => {
            return a.order - b.order
        })

        this.setState({
            featuredListData: newItemState
        })
    };

    render() {
        const {featuredListData} = this.state

        return (
            <FeaturedView featuredListData={featuredListData}
                          bblSort={this.bblSort}
                          sortItem={this.sortItem}
                          deleteItem={this.deleteItem}
                          addItem={this.addItem}
                          handleDrag={this.handleDrag}
                          handleDrop={this.handleDrop}
            />
        );
    }
}