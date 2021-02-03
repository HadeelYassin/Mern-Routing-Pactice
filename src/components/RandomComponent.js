import React from 'react'

export const NumberComponent = (props) => {
 if (isNaN(props.random)){
     return(<h1>The word is {props.random}</h1>)
     
 }
 return(
     <h1>The number is {props.random}</h1>
 )
    
   
      
}

export default NumberComponent