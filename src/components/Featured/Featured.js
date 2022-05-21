import React, {Component} from "react";

import "./Featured.scss"
import FeaturedList from "../FeaturedList";

import paper from "../../assets/img/paper.png";
import cabbage from "../../assets/img/cabbage.png";
import tomato from "../../assets/img/tomato.png";
import garlic from "../../assets/img/garlic.png";
import meat from "../../assets/img/meat.png";
import watermelon from "../../assets/img/watermelon.png";

export default class Featured extends Component {

    maxId = 100;

    state = {
        featuredListData: [{
            id: '01',
            srcImage: paper,
            title: 'Red Pepper',

            price: {
                newPrice: '20.00',
                oldPrice: '25.00'
            },
        },

            {
                id: '02',
                srcImage: cabbage,
                title: 'Cabbage',

                price: {
                    newPrice: '15.00',
                    oldPrice: '30.00'
                },
            },

            {
                id: '04',
                srcImage: garlic,
                title: 'Garlic',
                price: {
                    newPrice: '18.00',
                    oldPrice: '25.00'
                },
            },
            {
                id: '03',
                srcImage: tomato,
                title: 'Tomato',

                price: {
                    newPrice: '10.00',
                    oldPrice: '15.00'
                },
            },

            {
                id: '05',
                srcImage: meat,
                title: 'Meat Beef',
                price: {
                    newPrice: '35.00',
                    oldPrice: '45.00'
                },

            },

            {
                id: '06',
                srcImage: watermelon,
                title: 'Watermelon',

                price: {
                    newPrice: '25.00',
                    oldPrice: '30.00'
                },
            },
        ]
    }


    sortItem = () => {
        const newArray = [...this.state.featuredListData]

        newArray.sort((a, b) => {
            return a.price.newPrice > b.price.newPrice ? 1 : -1
        })

        this.setState({
            featuredListData: newArray
        })
    }

    bblSort = () => {
        const arr = [...this.state.featuredListData]

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < (arr.length - i - 1); j++) {

                if (arr[j].price.newPrice > arr[j + 1].price.newPrice) {

                    let temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
            }
        }

        this.setState({
            featuredListData: arr
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
            srcImage: watermelon,
            title: 'New Product',

            price: {
                    newPrice: "19.00",
                    oldPrice: "22.00"
            },
        }

        this.setState(({featuredListData}) => {
            const newArray = [...featuredListData, newItem]
            return {featuredListData: newArray}
        })
    }

    render() {
        const {featuredListData} = this.state


        return (
            <section className="block featured">
                <div className="container">
                    <h2 className="featured__title title">Featured Products</h2>

                    <div className="featured__sort">
                        <button className="featured__btn ">All</button>
                        <button className="featured__btn">Food</button>
                        <button className="featured__btn">Organic</button>
                        <button className="featured__btn">Fruits</button>
                        <button className="featured__btn active" onClick={this.bblSort}>bblSort</button>
                        <button className="featured__btn active" onClick={this.sortItem}>Sort()</button>
                        <button className="featured__btn active" onClick={this.deleteItem}>Delete Item</button>
                        <button className="featured__btn active" onClick={this.addItem}>Add Item</button>
                    </div>

                    <FeaturedList FeaturedDate={featuredListData}/>
                </div>
            </section>
        );
    }
}