import React, {Component} from "react";

import "./News.scss"
import newsLime from "../../assets/img/news-lime.png";
import name from "../../assets/img/name.png";
import tags from "../../assets/img/tags.png";
import comment from "../../assets/img/comment.png";

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName:'Admin',
            label: 'Services',
            title: 'Common engine oil problems and solutions',
            date: 'August 23',
            comments: '04 Comment',
        };
    }

    showResultState = () => {
        this.setState({
            userName:'Адмін',
            label: 'Послуги',
            title: 'Поширені проблеми з моторним маслом і способи їх вирішення',
            date: '23 серпня',
            comments: '04 Коментарі',
        })
    }

    render() {
        return (
            <section className="block news">
                <div className="container">
                    <h2 className="news__title title">LATEST BLOG</h2>
                    <ul className="news-list">
                        <li className="news-item">
                            <img className="news-item__prod" src={newsLime} alt="lime"/>
                            <div className="news-item__main">
                                <div className="news-item__info">
                                    <div className="news-item__name">
                                        <img className="news-item__img" src={name} alt="name"/><span
                                        className="news-item__description">By: {this.state.userName}</span></div>
                                    <div className="news-item__services">
                                        <img className="news-item__img" src={tags} alt="tags"/><span
                                        className="news-item__description">{this.state.label}</span></div>
                                    <div className="news-item__comment">
                                        <img className="news-item__img" src={comment} alt="comment"/><span
                                        className="news-item__description">{this.state.comments}</span></div>
                                </div>
                                <h3 className="news-item__title">{this.state.title}</h3>
                                <div className="news-item__footer"><span className="news-item__calendar">{this.state.date},
                                    2021</span><button onClick={this.showResultState} className="news-item__btn">SHOW STATE ›</button>
                                </div>
                            </div>
                        </li>
                        <li className="news-item">
                            <img className="news-item__prod" src={newsLime} alt="lime"/>
                            <div className="news-item__main">
                                <div className="news-item__info">
                                    <div className="news-item__name">
                                        <img className="news-item__img" src={name} alt="name"/>
                                        <span className="news-item__description">By: Admin</span>
                                    </div>
                                    <div className="news-item__services">
                                        <img className="news-item__img" src={tags} alt="tags"/>
                                        <span className="news-item__description">Services</span>
                                    </div>
                                    <div className="news-item__comment">
                                        <img className="news-item__img" src={comment} alt="comment"/>
                                        <span className="news-item__description">04 Comment</span>
                                    </div>
                                </div>
                                <h3 className="news-item__title">Common engine oil problems and solutions</h3>
                                <div className="news-item__footer"><span className="news-item__calendar">August 27,
                                    2021</span><a className="news-item__btn" href="/#">READ MORE ›</a></div>
                            </div>
                        </li>
                        <li className="news-item">
                            <img className="news-item__prod" src={newsLime} alt="lime"/>
                            <div className="news-item__main">
                                <div className="news-item__info">
                                    <div className="news-item__name">
                                        <img className="news-item__img" src={name} alt="name"/><span
                                        className="news-item__description">By: Admin</span></div>
                                    <div className="news-item__services">
                                        <img className="news-item__img" src={tags} alt="tags"/><span
                                        className="news-item__description">Services</span></div>
                                    <div className="news-item__comment">
                                        <img className="news-item__img" src={comment} alt="comment"/>
                                        <span className="news-item__description">04 Comment</span></div>
                                </div>
                                <h3 className="news-item__title">Common engine oil problems and solutions</h3>
                                <div className="news-item__footer"><span className="news-item__calendar">August 28,
                                    2021</span><a className="news-item__btn" href="/#">READ MORE ›</a></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}