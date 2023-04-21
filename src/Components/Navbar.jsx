import React from "react";
import logo from "../assets/react.svg"
import "./Navbar.css"
export default function Navbar(){
    return (
        <header>
            <nav className="navbar">
                <img src={logo} width="60px"></img>
                <h3 className="ReactFacts navtext">ReactFacts</h3>
                <h4 className="ReactCourse navtext">React Course - Project 1</h4>
            </nav>
        </header>

    )
}