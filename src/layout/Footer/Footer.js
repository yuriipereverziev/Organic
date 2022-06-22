import React, { Component } from 'react';

import './scss/Footer.scss';
import logoWhite from '../../assets/img/logo-white.png';
import figma from '../../assets/img/figma.svg';
import linkedin from '../../assets/img/linkedin.svg';
import github from '../../assets/img/github.svg';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <img className="footer__logo logo" src={logoWhite} alt="logo" />
            <ul className="social-list">
              <li className="social-item social-item--figma">
                <a
                  className="social-item__link"
                  href="https://www.figma.com/file/0Z0gvYHA3PBQ3AW60JIt3J/Orgamic-ShopWebsite?node-id=0%3A1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="figma" src={figma} alt="figma" />
                </a>
              </li>
              <li className="social-item social-item--linkedin">

                <a
                  className="social-item__link"
                  href="https://www.linkedin.com/in/yuriipereverziev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="linkedin" src={linkedin} alt="linkedin" />
                </a>
              </li>
              <li className="social-item social-item--github">
                <a
                  className="social-item__link"
                  href="https://github.com/yuriipereverziev/yuriipereverziev.github.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="github" src={github} alt="github" />
                </a>
              </li>
            </ul>
            <p className="footer__create">Created by Yurii Pereverziev</p>
            <p className="footer__copyright">Copyright © 2021, Orgamic. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}
