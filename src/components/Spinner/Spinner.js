import React, {Component} from "react";
import "./Spinner.scss"

export default class Spinner extends Component {
    render() {
        return (
            <div className="loading">
                <h2>Loading</h2>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}