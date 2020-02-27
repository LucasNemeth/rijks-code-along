import React from 'react';

const Art = (props) =>{
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.imgUrl} alt={props.title}/>
            <p>{props.longTitle}</p>
        </div>
    )
}

export default Art;