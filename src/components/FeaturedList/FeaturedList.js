import React, {Component} from "react";

import FeaturedItem from "../FeaturedItem";

export default class FeaturedList extends Component {

    render() {
        const {FeaturedDate} = this.props

        return (
            <ul className="featured-list">
                {
                    FeaturedDate.map(featuredData => {
                        return (<FeaturedItem {...featuredData } key={featuredData.id}/>)
                    })
                }
            </ul>
        )
    }
}
