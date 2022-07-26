import React, { useContext } from 'react';
import Header from '../../layout/Header';
import Promo from '../Promo/Promo';
import Discount from '../Discount';
import Benefit from '../Benefit';
import Categories from '../Categories';
import Statistics from '../Statistics';
import Featured from '../Featured/Featured';
import Offer from '../Offer';
import News from '../News/News';
import Footer from '../../layout/Footer';
import { ThemeContext } from '../../context/ThemeDark/ThemeContext';

const Root = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Header />
      <Promo />
      <Discount />
      <Benefit />
      <Categories />
      <Statistics />
      <Featured />
      <Offer />
      <News />
      <Footer />
    </div>
  );
};

export default Root;
