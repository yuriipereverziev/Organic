import React, {Component} from "react";

import paper from "../../assets/img/paper.png";
import cabbage from "../../assets/img/cabbage.png";
import tomato from "../../assets/img/tomato.png";
import garlic from "../../assets/img/garlic.png";
import meat from "../../assets/img/meat.png";
import watermelon from "../../assets/img/watermelon.png";

import FeaturedItem from "../FeaturedItem";

export default class FeaturedList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            featuredListData: [{
                id: '01',
                srcImage: paper,
                title: 'Red Pepper',

                price: [
                    {
                        id: '01-1',
                        newPrice: "$20.00"
                    },
                    {
                        id: '01-2',
                        oldPrice: "$25.00"
                    },
                ],
            },
                {
                    id: '02',
                    srcImage: cabbage,
                    title: 'Cabbage',

                    price: [
                        {
                            id: '02-1',
                            newPrice: "$15.00"
                        },
                        {
                            id: '02-2',
                            oldPrice: "$30.00"
                        },
                    ],
                },
                {
                    id: '03',
                    srcImage: tomato,
                    title: 'Tomato',

                    price: [
                        {
                            id: '03-1',
                            newPrice: "$10.00"
                        },
                        {
                            id: '03-2',
                            oldPrice: "$15.00"
                        },
                    ],
                },
                {
                    id: '04',
                    srcImage: garlic,
                    title: 'Garlic',
                    price: [
                        {
                            id: '04-1',
                            newPrice: "$18.00"
                        },
                        {
                            id: '04-2',
                            oldPrice: "$25.00"
                        },
                    ],
                },
                {
                    id: '05',
                    srcImage: meat,
                    title: 'Meat Beef',
                    price: [
                        {
                            id: '05-1',
                            newPrice: "$35.00"
                        },
                        {
                            id: '05-2',
                            oldPrice: "$45.00"
                        },
                    ],
                },
                {
                    id: '06',
                    srcImage: watermelon,
                    title: 'Watermelon',

                    price: [
                        {
                            id: '06-1',
                            newPrice: "$9.00"
                        },
                        {
                            id: '06-2',
                            oldPrice: "11.00"
                        },
                    ],
                },
            ]
        }
    }


    render() {
        return (

            <ul className="featured-list">
                {
                    this.state.featuredListData.map(featuredData => {
                        return (<FeaturedItem {...featuredData } key={featuredData.id}/>)
                    })
                }

            </ul>
        )
    }
}
