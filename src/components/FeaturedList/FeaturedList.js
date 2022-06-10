import React, {Component} from "react";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PropTypes from "prop-types";

export default class FeaturedList extends Component {
    render() {
        const {FeaturedDate, handleDrag, handleDrop} = this.props

        return (
            <ul className="featured-list">
                {FeaturedDate.map((featuredData, index) => {
                        return (
                            <FeaturedItem{...featuredData}
                                 key={featuredData.id}
                                 index={index}
                                 item={featuredData}
                                 onDragStart={handleDrag}
                                 onDrop={handleDrop}
                                 id={featuredData.id}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}

FeaturedList.propTypes = {
    FeaturedDate: PropTypes.array.isRequired,
    handleDrag: PropTypes.func.isRequired,
    handleDrop: PropTypes.func.isRequired,
}

