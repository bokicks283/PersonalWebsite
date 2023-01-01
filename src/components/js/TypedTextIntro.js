import React from "react"
import "../css/TypedTextIntro.css"

function TypedTextIntro(props) {
    return (
        <div class="typed-container">
            <p class="typed">Hello, My name is <span class="intro-name">{props.name}</span>.</p>
            <p class="typed2">I'm a software engineer.</p>
            <p class="typed3"> Welcome to my website!</p>
        </div>
    );
}

export default TypedTextIntro;