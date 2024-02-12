import React from "react"
import "../css/NavBar.css"
function NavBar(props) {
    return (
        <div class="nav-bar">
            <div class="nav-bar-text">
                <p class="nav-bar-text">{props.text}</p>
            </div>
            <img class="nav-search-icon" src={props.reactLogo} alt=""/>
        </div>
    )
} 

export default NavBar 