import React, { Fragment, useState } from "react";
import { vendorSendRequest } from "../../api/action/VendorAction";
import { VendorModal } from "./vendorModal";

export const Vendor = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [about, setAbout] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [visibleModal, setVisibleModel] = useState(false)

    const sendRequest = () => {
      let obj = {
          "email": email,
          "fullName": name,
          "name_of_business": businessName,
          "phone_number": phoneNumber,
          "about": about,
          "password": password,
          "location": "test"
      };
        vendorSendRequest(obj).then(res => {
            setVisibleModel(true);
        })
    }

    const modalClose = data => {
      setVisibleModel(data);
    }

  return (
    <main id="main">
      <section className="login">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              style={{paddingTop: "100px"}}>
              <div className="layout-container value-color bold full-width pad-m-t">
                <h3 className="bold">Join as a vendor</h3>
              </div>
              <div className="layout-container full-width font-medium caption-color pad-m-b">
                Send your request
              </div>

              <div className="layout-container full-width pad-l-t">
                <div className="value-color pad-m-t font-medium pad-s-b">
                  Full Name
                </div>
                <div>
                  <div className="mr-auto pos-rel">
                    <input
                      type="text"
                      name="vendor_full_name"
                      className="search-box"
                      placeholder="Enter your Full Name"
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="layout-container full-width pad-l-t">
                <div className="value-color pad-m-t font-medium pad-s-b">
                  Email
                </div>
                <div>
                  <div className="mr-auto pos-rel">
                    <input
                      type="text"
                      name="vendor_email"
                      className="search-box"
                      placeholder="Enter your email"
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="layout-container full-width pad-l-t">
                <div className="value-color pad-m-t font-medium pad-s-b">
                  Name of business
                </div>
                <div>
                  <div className="mr-auto pos-rel">
                    <input
                      type="text"
                      name="business_name"
                      className="search-box"
                      placeholder="Enter your business name"
                      onChange={e => setBusinessName(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="layout-container full-width pad-l-t">
                <div className="value-color pad-m-t font-medium pad-s-b">
                  About
                </div>
                <div>
                  <div className="mr-auto pos-rel">
                    <textarea
                      name="vendor_about"
                      className="search-box"
                      placeholder="Tell us a little about you..."
                      onChange={e => setAbout(e.target.value)}
                      ></textarea>
                  </div>
                </div>
              </div>

              <div className="layout-container full-width pad-l-t">
                <div className="value-color pad-m-t font-medium pad-s-b">
                  Phone Number
                </div>
                <div>
                  <div className="mr-auto pos-rel">
                    <input
                      type="text"
                      name="vendor_phone_number"
                      className="search-box"
                      placeholder="Enter your phone number"
                      onChange={e => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="layout-container full-width pad-l-t">
                <div className="value-color pad-m-t font-medium pad-s-b">
                  Password
                </div>
                <div>
                  <div className="mr-auto pos-rel">
                    <input
                      type="password"
                      name="vendor_phone_number"
                      className="search-box"
                      placeholder="Enter your password"
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="layout-container full-width pad-l-t font-medium">
                <div className="layout-col full-width pad-l-t pad-m-b">
                  <button
                    id="sendRequestBtn"
                    className="btn-default"
                    data-toggle="modal"
                    data-target="#sendRequest"
                    onClick={sendRequest}>
                    Send Request
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <img
                src="assets/img/join as vendor_professional.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* <!-- ======= Send Request Modal ======= --> */}
        {visibleModal ? <VendorModal visible={visibleModal} onClose={modalClose}/> : <Fragment />}
      </section>
    </main>
  );
};
