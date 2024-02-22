import React from "react"
import "../css/NavBar.css"
function NavBar(props) {
    return (
        <nav class="nav-bar">
            <div class="nav-bar-content">
                <p class="nav-bar-text">{props.text}</p>
            </div>
            <img class="nav-search-icon" src={props.reactLogo} alt=""/>
        </nav>
    )
} 

export default NavBar 
