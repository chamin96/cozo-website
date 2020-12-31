import React, { useState } from "react";

export const SignUp = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(false);
    const [errorObj, setErrorObj] = useState({});
    const emailRegex = RegExp(
        '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    );

    const handleSignup = () => {
        if (!name || !email || !phoneNumber || !address || !password || !confirmPassword) {
            setError(true);
        } else {
            const obj = {
                name,
                email,
                phoneNumber,
                address,
                password,
            };
            const errors = validateForm(obj);
            if (!Object.keys(errors).length) {

            } else {

            }
        }
    } 

    const validateForm = (data) => {
        let errors = {};
        if (!data.name) {
            errors.name = 'Name Required !';
        } else if (!data.email) {
            errors.email = 'Email Required !';
        } else if (!emailRegex.test(data.email)) {
            errors.email = 'Invalid Email !';
        } else if (!data.phoneNumber) {
            errors.phoneNumber = 'Phone number Required !';
        } else if (!mobileNoRegex.test(data.mobileNo)) {
            errors.phoneNumber = 'Invalid Phone number !';
        } else if (!data.address) {
            errors.address = 'Address Required !';
        } else if (!data.password) {
            errors.password = 'Password Required !';
        } else if (!data.confirmPassword) {
            errors.confirmPassword = 'Confirm Password Required !'
        }

        return errors;
    };

  return (
    <main id="main">
      <section id="login" class="login">
        <div className="container">
        <div id="signUp" className="row display-none">
        <div className="col-lg-6 order-1 order-lg-2" style={{paddingTop: "100px"}}>
          <div className="layout-container value-color bold full-width pad-m-t">
            <h3 className="bold">Create Account</h3>
          </div>
          <div className="layout-container full-width font-medium caption-color pad-m-b">Sign up and start shopping</div>

          <div className="layout-container full-width pad-l-t">
            <div className="value-color pad-m-t font-medium pad-s-b">Full Name</div>
            <div>
              <div className="mr-auto pos-rel">
                <input type="text" name="email" className="search-box" placeholder="Full name" onChange={e => setName(e.target.name)}/>
              </div>
            </div>
          </div>

          <div className="layout-container full-width pad-l-t">
            <div className="value-color pad-m-t font-medium pad-s-b">Email</div>
            <div>
              <div className="mr-auto pos-rel">
                <input type="text" name="email" className="search-box" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
              </div>
            </div>
          </div>

          <div className="layout-container full-width pad-l-t">
            <div className="value-color pad-m-t font-medium pad-s-b">Phone Number</div>
            <div>
              <div className="mr-auto pos-rel">
                <input type="text" name="email" className="search-box" placeholder="Phone Number" onChange={e => setPhoneNumber(e.target.value)}/>
              </div>
            </div>
          </div>

          <div className="layout-container full-width pad-l-tb">
            <div className="value-color font-medium pad-s-b">Address</div>
            <div>
              <div className="mr-auto pos-rel">
                <input type="password" name="email" className="search-box" placeholder="Address" onChange={e => setAddress(e.target.value)}/>
              </div>
            </div>
          </div>

          <div className="layout-container full-width pad-l-tb">
            <div className="value-color font-medium pad-s-b">Create Password</div>
            <div>
              <div className="mr-auto pos-rel">
                <input data-toggle="password" className="form-control search-box" type="password" maxlength="10" placeholder="Enter the password" onChange={e => setPassword(e.target.value)}/>
              </div>
            </div>
          </div>

          <div className="layout-container full-width pad-l-tb">
            <div className="value-color font-medium pad-s-b">Confirm Password</div>
            <div>
              <div className="mr-auto pos-rel">
                <input data-toggle="password" className="form-control search-box" type="password" maxlength="10" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)}/>
              </div>
            </div>
          </div>

          <div className="layout-container full-width pad-l-t font-medium">
            <div className="layout-col full-width">
              <button className="btn-default" onClick={handleSignup}>Sign in</button>
            </div>
          </div>

          <div className="layout-container pad-m-t font-medium">
            <div className="layout-col caption-color">Already have an account?</div>
            <a id="signInAccount" className="pad-m-l">Sign in</a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2" >
          <img src="assets/img/join as vendor_professional.png" className="img-fluid" alt="" />
        </div>
      </div>
        </div>
      </section>
    </main>
  );
};
