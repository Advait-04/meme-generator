import React from "react";
import trollFace from "./../images/Troll Face.png";

import "./../styles/header.css";

export default function Header() {
    return (
        <div className="header">
            <img className="logo" src={trollFace} alt="trollFace"></img>
            <span className="title">Meme Generator</span>
        </div>
    );
}
