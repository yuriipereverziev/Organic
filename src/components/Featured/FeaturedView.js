import React, {Component} from "react";
import FeaturedList from "../FeaturedList";
import Spinner from "../Spinner/Spinner";

export default class FeaturedView extends Component {


    render() {
        const {featuredListData, bblSort, sortItem, deleteItem, addItem, handleDrag, handleDrop, loading} = this.props


        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <FeaturedList FeaturedDate={featuredListData}
                                                 handleDrag={handleDrag} handleDrop={handleDrop}/> : null;

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

                    {spinner}
                    {content}

                </div>
            </section>
        )
    }
}