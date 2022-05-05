import React, {Component} from "react";

import "./Benefit.scss"
import benefitGirl from "../../assets/img/benefit-girl.png";
import biological from "../../assets/img/biological.png";
import speciality from "../../assets/img/speciality.png";

export default class Benefit extends Component{
    render() {
        return(
            <section className="block benefit">
                <div className="container">
                    <div className="benefit__wrapper">

                        <img className="benefit__img" src={benefitGirl} alt="girl"/>

                        <div className="benefit__main">
                            <h2 className="title benefit__title">We Are Healthy Food Organic.</h2>
                            <p className="benefit__text">Lorem Ipsum is simply dummy text of the printing and
                                typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when
                                an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It
                                has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.</p>
                            <div className="benefit__info">
                                <div className="benefit-bio">
                                    <img className="benefit-bio__img" src={biological} alt="biological"/>
                                    <div className="benefit-bio__wrapper">
                                        <h3 className="benefit-bio__title">Biological Benefits</h3>
                                        <p className="benefit-bio__text">We're making room for self care today with
                                            plan.</p>
                                    </div>
                                </div>
                                <div className="benefit-spec">
                                    <img className="benefit-spec__img" src={speciality} alt="speciality"/>
                                    <div className="benefit-spec__wrapper">
                                        <h3 className="benefit-spec__title">Speciality Product</h3>
                                        <p className="benefit-spec__text">We're making room for self care today with
                                            plan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="benefit__banner">ABOUT US</div>
                    </div>
                </div>
            </section>
        );
    }
}