import React from "react"
import { ReactDOM } from "react"
import './SignIn1.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {  Link } from "react-router-dom";
export default function SignIn1(){
return(
  <div>
      <div className="sign-in-1-Lf4">
            <div className="gap"></div>
            <div className="gap"></div>
            <div ></div>
            <div className="auto-group-b2fc-vae">
              <p className="login-or-signup-7wx">
                <span className="login-or-signup-7wx-sub-0">Login </span>
                <span className="login-or-signup-7wx-sub-1"> </span>
                <span className="login-or-signup-7wx-sub-2"> or </span>
                <span className="login-or-signup-7wx-sub-3"> </span>
                <span className="login-or-signup-7wx-sub-4">Signup</span>
              </p>
              <div className="auto-group-fhtn-EYi">
                <input type="text" className="auto-group-ne4i-Zqt" placeholder="    +91  |  Mobile Number*" />
                <p className="by-continuing-i-agree-to-the-terms-of-use-privacy-policy-UrN">
                  <span className="by-continuing-i-agree-to-the-terms-of-use-privacy-policy-UrN-sub-0">By continuing, I agree to the</span>
                  <span className="by-continuing-i-agree-to-the-terms-of-use-privacy-policy-UrN-sub-1"> Terms of Use </span>
                  <span className="by-continuing-i-agree-to-the-terms-of-use-privacy-policy-UrN-sub-2">&amp;</span>
                  <span className="by-continuing-i-agree-to-the-terms-of-use-privacy-policy-UrN-sub-3">
                    Privacy
                    <br />
                    Policy
                  </span>
                </p>
                <button className="auto-group-vbky-vEW"><Link to="/signin2">CONTINUE</Link></button>
                <p className="having-trouble-logging-in-get-help-oJJ">
                  <span className="having-trouble-logging-in-get-help-oJJ-sub-0">Having trouble logging in ? </span>
                  <span className="having-trouble-logging-in-get-help-oJJ-sub-1"> Get Help</span>
                </p>
                <p>hello guys</p>
              </div>
            </div>
          </div>
  </div>
)
}