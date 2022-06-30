import React, { useContext } from 'react';
import './scss/toggle.scss';
import { ThemeContext } from '../../context/ThemeDark/ThemeContext';

const Toggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <label htmlFor="toggle-button" className="text">
      <input
        type="checkbox"
        name="toggle"
        id="toggle-button"
        className="toggle-button"
        onClick={toggleTheme}
        readOnly
      />
      &nbsp;
      {`${theme}`}
      &nbsp;Theme
    </label>
  );
};

export default Toggle;
