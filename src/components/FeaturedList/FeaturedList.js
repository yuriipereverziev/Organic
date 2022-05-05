import React from "react";

import paper from "../../assets/img/paper.png";
import cabbage from "../../assets/img/cabbage.png";
import tomato from "../../assets/img/tomato.png";
import garlic from "../../assets/img/garlic.png";
import meat from "../../assets/img/meat.png";
import watermelon from "../../assets/img/watermelon.png";

import FeaturedItem from "../FeaturedItem";

const FeaturedList = () => {

    const featuredListData = [{
        id: '01',
        srcImage: paper,
        title: 'Red Pepper',
        price: '$10.00 - $20.00',
    },
        {
            id: '02',
            srcImage: cabbage,
            title: 'Cabbage',
            price: '$30.00 - $15.00',
        },
        {
            id: '03',
            srcImage: tomato,
            title: 'Tomato',
            price: '$15.00',
        },
        {
            id: '04',
            srcImage: garlic,
            title: 'Garlic',
            price: '$18.00',
        },
        {
            id: '05',
            srcImage: meat,
            title: 'Meat Beef',
            price: '$45.00',
        },
        {
            id: '06',
            srcImage: watermelon,
            title: 'Watermelon',
            price: '$11.00',
        }
    ];

    return (
        <ul className="featured-list">
            {featuredListData.map(item => (<FeaturedItem {...item} key={item.id}/>))}
        </ul>
    )
}

export default FeaturedList
