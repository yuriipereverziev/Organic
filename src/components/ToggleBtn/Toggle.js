import React, { Component } from 'react';
import './scss/toggle.scss';
import { Consumer } from '../../context/ThemeDark/ThemeContext';

class Toggle extends Component {
  render() {
    return (
      <Consumer>
        {(context) => (
          <label htmlFor="toggle-button" className="text">
            <input
              type="checkbox"
              name="toggle"
              id="toggle-button"
              className="toggle-button"
              onClick={context.toggleTheme}
              readOnly
            />
            &nbsp;
            {`${context.theme}`}
            &nbsp;Theme
          </label>
        )}
      </Consumer>
    );
  }
}

export default Toggle;
