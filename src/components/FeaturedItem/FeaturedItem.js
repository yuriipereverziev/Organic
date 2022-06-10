import React, {Component} from "react";
import FeaturedItemView from "./FeaturedItemView";
import PropTypes from "prop-types";

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
        const {image, title, price, index, onDragStart, onDrop, id, order, item } = this.props

        return (
            <FeaturedItemView srcImage={image} title={title} price={price} index={index} order={order}
                  onDragStart={onDragStart} onDrop={onDrop} id={id} step={step} item={item}
                  isActive={isActive}  toggleClass={this.toggleClass} handleKeyPress={this.handleKeyPress}/>
        )
    }
}

FeaturedItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    onDragStart: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    order: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
}
