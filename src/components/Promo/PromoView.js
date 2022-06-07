import React, {Component} from "react";
import Slider from "react-slick";

export default class PromoView extends Component {

    render() {
        const {sliderData} = this.props

        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 4000,
        };


        return(
            <Slider {...settings}>
                {sliderData.map((sliderData) => {
                    return (
                        <li className="promo__wrapper" key={sliderData.id} >
                            <h2 className="promo__title">{sliderData.title}&nbsp;
                                <span className="promo__stroke">{sliderData.name}</span>
                                {sliderData.subtitle}
                            </h2>
                            <button className="promo__btn btn">{sliderData.btnText}</button>
                            <div className="promo__banner">{sliderData.banner}</div>
                        </li>
                    )
                })}
            </Slider>
        )
    }
}