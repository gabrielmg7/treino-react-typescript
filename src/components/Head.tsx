import React from 'react'

function Head(props:any){
    return(
        <div className = {"head-title"}>
            <img className = {"head-icon"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30Gcy3-zix_Lv2aSksnA2dJXgZb8OV6bfwg&usqp=CAU" alt="icon" />
            <h2>{props.name}</h2>
        </div>
    )
}

export default Head