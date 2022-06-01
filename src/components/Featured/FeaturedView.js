import React, {Component} from "react";
import FeaturedList from "../FeaturedList";

export default class FeaturedView extends Component {


    render() {
        const {featuredListData, bblSort, sortItem, deleteItem, addItem, handleDrag, handleDrop} = this.props
        return (
            <section className="block featured">
                <div className="container">
                    <h2 className="featured__title title">Featured Products</h2>

                    <div className="featured__sort">
                        <button className="featured__btn">All</button>
                        <button className="featured__btn">Food</button>
                        <button className="featured__btn">Organic</button>
                        <button className="featured__btn">Fruits</button>
                        <button className="featured__btn active" onClick={bblSort}>bblSort</button>
                        <button className="featured__btn active" onClick={sortItem}>Sort()</button>
                        <button className="featured__btn active" onClick={deleteItem}>Delete Item</button>
                        <button className="featured__btn active" onClick={addItem}>Add Item</button>
                    </div>

                    <FeaturedList FeaturedDate={featuredListData} handleDrag={handleDrag} handleDrop={handleDrop}/>
                </div>
            </section>
        )
    }
}