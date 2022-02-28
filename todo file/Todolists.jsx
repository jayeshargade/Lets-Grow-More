import React from "react";
const Todolists=(props)=>{
   

    return (
        <>
        <div className="todo_style"> 
        
        <i className ="jayesh"aria-hidden="true"
        onClick={()=>{
            props.onSelect(props.id)
        }}/>
    <li>{props.text}</li>
    </div>
    </>

    );

}
export default Todolists;