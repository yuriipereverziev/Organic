import React, {Component} from "react";

import "./Footer.scss"
import logoWhite from "../../assets/img/logo-white.png";

export default class Footer extends Component{
    render() {
        return(
            <div className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <img className="footer__logo logo" src={logoWhite} alt="logo"/>
                        <ul className="social-list">
                            <li className="social-item social-item--figma"><a className="social-item__link"
                                                                              href="https://www.figma.com/file/0Z0gvYHA3PBQ3AW60JIt3J/Orgamic-ShopWebsite?node-id=0%3A1"
                                                                              target="_blank" rel="noreferrer">
                                <svg className="figma" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
                                     fill="white">
                                    <path
                                        d="M183.03955,94.00049A39.98706,39.98706,0,0,0,162,20.001H94A39.98706,39.98706,0,0,0,72.96045,94.00049,39.96375,39.96375,0,0,0,72.96143,162,39.9924,39.9924,0,1,0,134,195.99951v-39.47a39.98084,39.98084,0,1,0,49.03955-62.529ZM190,60.001a28.03114,28.03114,0,0,1-27.98047,27.99951L162,88l-.03857.001L134,88V32.001h28A28.03145,28.03145,0,0,1,190,60.001Zm-124,0a28.03145,28.03145,0,0,1,28-28h28V88H94l-.019.00049A28.03132,28.03132,0,0,1,66,60.001ZM66,128a28.03123,28.03123,0,0,1,27.981-27.99951L94,100.001l28-.00074V155.999L94,156A28.03146,28.03146,0,0,1,66,128Zm28,95.999A27.99951,27.99951,0,1,1,94,168l28-.00073v28.00024A28.03135,28.03135,0,0,1,94,223.999ZM162,156a27.99952,27.99952,0,0,1-.03857-55.999H162l.019-.00049A27.99976,27.99976,0,0,1,162,156Z"></path>
                                </svg>
                            </a></li>
                            <li className="social-item social-item--linkedin"><a className="social-item__link"
                                                                                 href="https://www.linkedin.com/in/yuriipereverziev/"
                                                                                 target="_blank" rel="noreferrer">
                                <svg className="linkedin" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="white">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                </svg>
                            </a></li>
                            <li className="social-item social-item--github"><a className="social-item__link"
                                                                               href="https://github.com/yuriipereverziev/yuriipereverziev.github.io"
                                                                               target="_blank" rel="noreferrer">
                                <svg className="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="white">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                </svg>
                            </a></li>
                        </ul>
                        <p className="footer__create">Created by Yurii Pereverziev</p>
                        <p className="footer__copyright">Copyright © 2021, Orgamic. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        );
    }
}