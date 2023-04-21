import React from "react";
import "./MainContent.css";

export default function MainContent(){
    return (
        <div className="Container">
            <h1 className="title MCtext">Fun Facts About React</h1>
            <ul className="list MCtext">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
       
    )
}