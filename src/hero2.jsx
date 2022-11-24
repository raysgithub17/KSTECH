import React from "react";
import { ReactDOM } from "react";

export default function Hero2(){
    return(
        <div className="hero2">
            <div className="samsunghero">
                <h1 className="samsung-header" >Galaxy Z Fold4</h1>
                <p className="samsung-text" >Gift Yourself a Surprise Unfold</p>
                <img src="samsung fold.png" className="samsunghero-img" />
            </div>
            <div className="pixelhero">
                <h1 className="pixel-header" >Pixel 7 Pro</h1>
                <p className="pixel-text" >The most helpful Google phones</p>
                <img src="googlepixelhero.png" className="pixelhero-img" />
            </div>
        </div>
    )
}