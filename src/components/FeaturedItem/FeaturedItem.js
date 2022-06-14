import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeaturedItemView from './FeaturedItemView';

export default class FeaturedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      step: -1,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  toggleClass = () => {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  };

  handleKeyPress = (e) => {
    const { step } = this.state;

    if (e.keyCode === 39 && step < 5) {
      this.setState((prevState) => ({
        step: prevState.step + 1
      }));
    } else if (e.keyCode === 37 && step > 0) {
      this.setState((prevState) => ({
        step: prevState.step - 1
      }));
    } else if (e.keyCode === 27 && step >= 0) {
      this.setState(() => ({
        step: -1
      }));
    }
  };

  render() {
    const {
      step,
      isActive
    } = this.state;
    const {
      image,
      title,
      price,
      index,
      onDragStart,
      onDrop,
      id,
      order,
      item
    } = this.props;

    return (
      <FeaturedItemView
        srcImage={image}
        title={title}
        price={price}
        index={index}
        order={order}
        onDragStart={onDragStart}
        onDrop={onDrop}
        id={id}
        step={step}
        item={item}
        isActive={isActive}
        toggleClass={this.toggleClass}
        handleKeyPress={this.handleKeyPress}
      />
    );
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
  item: PropTypes.shape({}).isRequired,
};
