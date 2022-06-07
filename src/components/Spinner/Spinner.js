import React, {Component} from "react";
import "./Spinner.scss"

export default class Spinner extends Component {
    render() {
        return (
            <div className="loading">
                <h3>Loading</h3>
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