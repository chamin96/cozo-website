import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
       return (
        <footer id="footer">
            <div className="container footer-border footer-top">
                <div className="row">
                <div className="col-lg-4 col-md-6 footer-contact">
                    <img src="assets/img/logo.svg" className="footer-logo"/>
                    <div className="social-media">
                    <img src="assets/icons/facebook.svg"/>
                    <img src="assets/icons/twitter.svg" className="pad-m-l"/>
                    <img src="assets/icons/instagram.svg" className="pad-m-l"/>
                    </div>
                    <div>
                    <span className="copyright-msg">@copyright 2020. All Rights Reserved</span>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Overview</h4>
                    <ul>
                    <li><a href="#">Shop by Category</a></li>
                    <li><a href="#">Shop by Vendor</a></li>
                    <li><a href="#">Featured Items</a></li>
                    <li><a href="#">Connect to a Professional</a></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Product Management</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>

                <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Contact</h4>
                    <ul>
                    <li><a href="#">help@gmail.com</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>
       );
    }
 }

 export default Footer;