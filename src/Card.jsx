import React from "react";
import { ReactDOM } from "react";

export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } 
    else if (props.openSpots !== 0 ) {
        badgeText = "AVAILABLE"
    }



    return(
        <div className="card" >
            {badgeText && <div className="card--badge">{badgeText}</div>}   
            <img src={props.img} className="card-img" />
            <div className="card-stat">
                <img src="Star 1.png" className="star" />
                <span>5.0</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.stock}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold" >From ₹{props.price}</span> only </p>
        </div>
    )
}