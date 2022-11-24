import React from "react";
import './SignIn2.css';
import './SignIn1.css'
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
export default function SignIn2(){
    return(
          
              <div>
                
                  <div className="sign-in-2-zKC">
                
                    <div className="auto-group-wrce-6U2">
                      <div className="auto-group-eqmq-rTC">
                        <p className="enter-account-password-MPx">Enter Account Password</p>
                        <p className="for-additional-security-please-enter-your-accound-password-H2i">
                          For  additional security, please enter your account
                          <br />
                          password
                        </p>
                        <input type="password" className="auto-group-h33g-MYN" name="fname" placeholder="Password" />
                        <button className="auto-group-eapj-HTx"><Link to="/signin3" >CONTINUE</Link></button>
                        <p className="have-trouble-logging-in-get-help-xKC">
                          <span className="have-trouble-logging-in-get-help-xKC-sub-0">Have trouble logging in ?</span>
                          <span className="have-trouble-logging-in-get-help-xKC-sub-1"> </span>
                          <span className="have-trouble-logging-in-get-help-xKC-sub-2"> Get Help</span>
                        </p>
                        <p className="or-continue-with-DeS">Or  continue with</p>
                        <div className="auto-group-djsj-KxN">
                          <div className="ellipse-1-rxJ">
                          </div>
                          <div className="ellipse-2-mpN">
                          </div>
                        </div>
                        <div className="auto-group-4upt-uQn">
                          <p className="email-om4">EMAIL</p>
                          <p className="google-ZES">GOOGLE</p>
                        </div>
                        <button className="auto-group-iowx-6kA"><Link to="/signin3" >CONTINUE</Link></button>
                      </div>
                      <GoogleIcon className="google-original-k42"></GoogleIcon> 
                      <EmailIcon className="messageduotone-5c6" />
                    </div>
                  </div>
              </div>
    )
}