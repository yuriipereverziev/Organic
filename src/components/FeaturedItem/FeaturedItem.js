import React, {Component} from "react";
import star from "../../assets/img/star.svg";

export default class FeaturedItem extends Component {

    state = {
        isActive: false,
        step: -1,
    }

    toggleClass = () => {
        const currentState = this.state.isActive;
        this.setState({
            isActive: !currentState,
        });
    };

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress)
    }

    handleKeyPress = (event) => {
        if (event.keyCode === 39 && this.state.step < 5) {
            this.setState(prevState => ({
                step: prevState.step + 1
            }))
        } else if (event.keyCode === 37 && this.state.step > 0 ) {
            this.setState(prevState => ({
                step: prevState.step - 1
            }))
        }
        else if (event.keyCode === 27 && this.state.step >= 0 ) {
            this.setState( () => ({
                step: -1
            }))
        }
    }

    render() {
        const {step, isActive} = this.state
        const {srcImage, title, price, index, onDragStart, onDrop, id } = this.props

        const activeClass = `${isActive ? ' featured-item__active' : '' || step === index ? ' featured-item__active' : ''}`;

        return (
            <li className={`featured-item${activeClass}`}
                id={id}
                onClick={this.toggleClass}
                onKeyDown={this.handleKeyPress}
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