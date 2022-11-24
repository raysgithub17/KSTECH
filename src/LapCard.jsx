
import React from "react";
import { ReactDOM } from "react";

export default function LapCard(){
    return(
        <div className="lapcard1">
            <div className="lapcard">
                <div className="macaircard">
                    <img src="macair.png" className="macaircard-img" />
                    <h1 className="macair-header" >MacBook Pro</h1>
                    <p className="macair-text" >₹180000 only</p>
                </div>
                <div className="spectracard">
                    <img src="hpspectra.png" className="spectracard-img" />
                    <h1 className="spectra-header" >HP Spectra x360 14</h1>
                    <p className="spectra-text" >₹90000 only</p>
                </div>
                <div className="xps17card">
                    <img src="xps17.png" className="xps17-img" />
                    <h1 className="xps17-header" >XPS 15 Laptop</h1>
                    <p className="xps17-text" >₹100000 only</p>
                </div>
            </div>
            <div className="lapcard">
                <div className="macaircard">
                    <img src="macpro.png" className="macaircard-img" />
                    <h1 className="macair-header" >MacBook Air</h1>
                    <p className="macair-text" >₹120000 only</p>
                </div>
                <div className="spectracard">
                    <img src="omen.png" className="spectracard-img" />
                    <h1 className="spectra-header" >HP OMEN Laptop</h1>
                    <p className="spectra-text" >₹80000 only</p>
                </div>
                <div className="xps17card">
                    <img src="xps13.png" className="xps17-img" />
                    <h1 className="xps17-header" >XPS 13 Laptop</h1>
                    <p className="xps17-text" >₹90000 only</p>
                </div>
            </div>
        </div>
        
    )
}