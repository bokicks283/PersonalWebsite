import React from "react"
import "../css/AnimatedBackground.css"
class AnimatedBackground extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {lightCount: props.lightCount};
    }

    createLightDivs(){
        var divs = []
        for (var i = 0; i < this.lightCount; i++){
          divs.push(<div class={`light-${i}`}></div>)
        }
        return divs
    }
    render(){
        return (
            <div class='bg-container'>
                {this.createLightDivs()}
            </div>
        )
    }
    
} 

export default AnimatedBackground 