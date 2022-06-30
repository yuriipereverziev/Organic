import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FeaturedItemView from './FeaturedItemView';

const FeaturedItem = ({
  image,
  title,
  price,
  index,
  onDragStart,
  onDrop,
  id,
  item
}) => {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(-1);

  const toggleClass = () => {
    setActive(!active);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 39 && step < 5) {
      setStep((prevState) => prevState + 1);
    } else if (e.keyCode === 37 && step > 0) {
      setStep((prevState) => prevState - 1);
    } else if (e.keyCode === 27 && step >= 0) {
      setStep(-1);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <FeaturedItemView
      srcImage={image}
      title={title}
      price={price}
      index={index}
      onDragStart={onDragStart}
      onDrop={onDrop}
      id={id}
      step={step}
      item={item}
      isActive={active}
      toggleClass={toggleClass}
      handleKeyPress={handleKeyPress}
    />
  );
};

FeaturedItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  item: PropTypes.shape({}).isRequired,
};

export default FeaturedItem;
