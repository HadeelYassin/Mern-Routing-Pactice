import React from 'react'

export const ColorsComponent = (props) => { 
    
    const style={color:props.color1,background:props.color2}
    if (isNaN(props.random)){
        return(<h1 style={style}>The word is {props.random}</h1>)
        
    }
    return(
        <h1>The number is {props.random}</h1>
    )
}
export default ColorsComponent
