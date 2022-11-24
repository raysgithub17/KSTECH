import React from "react";
import { ReactDOM } from "react";
import './SignIn3.css'
import './SignIn1.css'
import { Link } from "react-router-dom";

export default function SignIn3(){
    return(
        <div>
    
        <div className="gap"></div>
        <div className="gap"></div>
        <div className="gap"></div>
            <div className="sign-in-3-BSS">
            
            <div className="auto-group-avks-8iN">
              <p className="having-trouble-logging-in-get-help-SDG">
                <span className="having-trouble-logging-in-get-help-SDG-sub-0">Having trouble logging in ?</span>
                <span className="having-trouble-logging-in-get-help-SDG-sub-1"> </span>
                <span className="having-trouble-logging-in-get-help-SDG-sub-2"> Get Help</span>
              </p>
              <p className="log-in-using-password-xjL">
                <span className="log-in-using-password-xjL-sub-0">Log in using</span>
                <span className="log-in-using-password-xjL-sub-1"> </span>
                <span className="log-in-using-password-xjL-sub-2">   Password</span>
              </p>
              <p className="send-to-6380020723-dU6">send to 6380020723</p>
              <p className="resend-otp-in-00-28-YLA">
                <span className="resend-otp-in-00-28-YLA-sub-0">Resend OTP in: </span>
                <span className="resend-otp-in-00-28-YLA-sub-1">00:28</span>
              </p>
              <p className="verify-with-otp-EcJ">Verify with OTP</p>
              <div className="auto-group-jbwg-jJA">
                <input type="text" className="rectangle-2-fBp" />
                <input type="text" className="rectangle-3-b5U" />
                <input type="text" className="rectangle-4-WiE" />
                <input type="text" className="rectangle-5-Fvi" />
              </div>
              <img className="screenshot-2022-11-07-at-908-1-y62" src="otp.png" />
              <button className="auto-group-tk1t-TG6" onclick="location.href='main-page.html'"><Link to="/" >CONTINUE</Link></button>
            </div>
            <div className="desktop-3-L4z">
            </div>
                  </div>
        </div>
    )
}