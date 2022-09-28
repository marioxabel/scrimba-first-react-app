import React from "react";
import logo from "../assets/react-logo.png"
import "./NavBar.css"


export default function MainContent() {
    return (
        <div className="main">
            <div className="blueHeader">
                <img src={logo} alt="react logo" />
                <h2>ReactFacts</h2>
            </div>
            <div>
                <h4>React Course - Project 1</h4>
            </div>
        </div>
    )
}