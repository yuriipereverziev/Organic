import React, {Component} from "react";
import star from "../../assets/img/star.svg";

export default class FeaturedItemView extends Component {

    render() {
        const {srcImage, title, price, index, onDragStart, onDrop, id, isActive, step, toggleClass, handleKeyPress } = this.props
        const activeClass = `${isActive ? ' featured-item__active' : '' || step === index ? ' featured-item__active' : ''}`;

        return(
            <li className={`featured-item${activeClass}`}
                id={id}
                onClick={toggleClass}
                onKeyDown={handleKeyPress}
                draggable={true}
                onDragOver={(e) => e.preventDefault()}
                onDragStart={onDragStart}
                onDrop={onDrop}>

                <div className="featured-item__top">
                    <img className="featured-item__img" src={srcImage} alt={title}
                         onLoad={() => console.log("loaded")}
                         onError={() => console.log("error")}/>
                </div>
                <div className="featured-item__main">

                    <span className="featured-item__price">
                        ${price.newPrice} - ${price.oldPrice}
                    </span>

                    <h3 className="featured-item__title">{title}</h3>

                    <div className="featured-item__rating">
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                    </div>
                    <a className="featured-item__btn btn" href="/#">SHOP NOW</a>
                </div>
            </li>
        )
    }

}