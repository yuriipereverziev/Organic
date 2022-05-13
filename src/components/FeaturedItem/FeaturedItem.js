import React from "react";
import star from "../../assets/img/star.svg";

const FeaturedItem = ({srcImage, title, price}) => {

    return (
        <li className="featured-item">
            <div className="featured-item__top">
                <img className="featured-item__img" src={srcImage} alt={title}/>
            </div>
            <div className="featured-item__main">

                {price.map((priceEl) => {
                    return (
                        <span className="featured-item__price" key={priceEl.id}>
                            ${priceEl.newPrice}{priceEl.oldPrice}
                        </span>
                    )
                })}

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

export default FeaturedItem
