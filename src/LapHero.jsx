import React from "react";
import { ReactDOM } from "react";

export default function LapHero(){
    return(
        <div className="laphero">
            <div className="hphero">
                <h1 className="hp-header" >HP Spectre x360 16</h1>
                <p className="hp-text" >Packed with premium features</p>
                <img src="hphero.png" className="hp-img" />
            </div>
            <div className="dellhero">
                <h1 className="dell-header" >Latitude Laptops & 2-in-l PCs</h1>
                <p className="dell-text" >Business Performance & Collaboration</p>
                <img src="dellhero.png" className="dell-img" />
            </div>
        </div>
    )
}