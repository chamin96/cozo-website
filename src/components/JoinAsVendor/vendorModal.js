import React, { Fragment, useState } from "react";
import { Modal, Button } from "antd";

export const VendorModal = (props) => {
  const { visible, onClose } = props;
  const [next, setNext] = useState(1);

  const handleNext = () => {
    if (next == 7) {
      onClose(false)
    } else {
      setNext(next + 1);
    }
  };

  return (
    <Modal
      //title="20px to Top"
      style={{ top: 20 }}
      visible={visible}
      footer={null}>
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div className="layout-container full-width pad-l-b">
              <div className="layout-col h-middle">
                <img
                  src="assets/icons/small logo.svg"
                  className="img-fluid small-logo"
                  alt="..."
                />
              </div>
            </div>

            {next == 1 ? (
              <div id="msg1" className="layout-container full-width">
                <div className="layout-container full-width pad-s-t">
                  <div className="layout-col h-middle">
                    <img
                      src="assets/icons/request screen.svg"
                      className="img-fluid mail-sent-logo"
                      alt="..."
                    />
                  </div>
                </div>

                <div className="layout-container full-width pad-l-t">
                  <div className="layout-col h-middle value-color pad-m-t">
                    Your message was sent successfully!
                  </div>
                </div>
                <div className="layout-container full-width pad-m-b">
                  <div className="layout-col h-middle value-color">
                    Cozo wil contact you soon
                  </div>
                </div>
              </div>
            ) : (
              <Fragment />
            )}

            {next == 2 ? (
              <Fragment>
                <div id="msg2" className="layout-container full-width">
                  <div className="layout-container full-width pad-s-t">
                    <div className="layout-col h-middle">
                      <img
                        src="assets/img/welcom screen 3.png"
                        className="img-fluid mail-sent-logo"
                        alt="..."
                        style={{ height: "40%" }}
                      />
                    </div>
                  </div>

                  <div className="layout-container full-width pad-l-t pad-m-b">
                    <div className="layout-col h-middle value-color pad-m-t">
                      Welcome to Cozo, the application that will enhance your
                      comfort zone! Cozo allows you to browse products and
                      services related to your home.
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <Fragment />
            )}

            {next == 3 ? (
              <Fragment>
                <div id="msg3" className="layout-container full-width">
                  <div className="layout-container full-width pad-s-t">
                    <div className="layout-col h-middle">
                      <img
                        src="assets/img/welcome screen 4.png"
                        className="img-fluid mail-sent-logo"
                        alt="..."
                        style={{ height: "40%" }}
                      />
                    </div>
                  </div>

                  <div className="layout-container full-width pad-l-t">
                    <div className="layout-col h-middle value-color pad-m-t">
                      Cozo provides a unique feature called Augmented Reality,
                      or AR. This allows you to view an item in-front of you by
                      using your camera to envision it in your desired room
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <Fragment />
            )}

            {next == 4 ? (
              <Fragment>
                <div id="msg4" className="layout-container full-width">
                  <div className="layout-container full-width pad-s-t">
                    <div className="layout-col h-middle">
                      <img
                        src="assets/img/welcome screen .svg"
                        className="img-fluid mail-sent-logo"
                        alt="..."
                      />
                    </div>
                  </div>

                  <div className="layout-container full-width pad-l-t">
                    <div className="layout-col h-middle value-color pad-m-t">
                      Items which you will be able to visualize through AR will
                      be shown with the AR icon
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <Fragment />
            )}

            {next == 5 ? (
              <div id="msg5" className="layout-container full-width">
                <div className="layout-container full-width pad-s-t">
                  <div className="layout-col h-middle">
                    <img
                      src="assets/img/welcome screen 6.svg"
                      className="img-fluid mail-sent-logo"
                      alt="..."
                    />
                  </div>
                </div>

                <div className="layout-container full-width pad-l-t">
                  <div className="layout-col h-middle value-color pad-m-t">
                    Browse through categories you are interested in. Add these
                    items in your cart. If you are interested in items that you
                    are willing to purchase in the future, you can add them to
                    your Wishlist. If you would like to proceed with you
                    purchase, add the items to yourcart and check out
                  </div>
                </div>
              </div>
            ) : (
              <Fragment />
            )}

            {next == 6 ? (
              <div id="msg6" className="layout-container full-width">
                <div className="layout-container full-width pad-s-t">
                  <div className="layout-col h-middle">
                    <img
                      src="assets/img/welcome screen 7.svg"
                      className="img-fluid mail-sent-logo"
                      alt="..."
                    />
                  </div>
                </div>

                <div className="layout-container full-width pad-l-t">
                  <div className="layout-col h-middle value-color pad-m-t">
                    If you wish, you can rate your item and write down a review
                    once it has arrived
                  </div>
                </div>
              </div>
            ) : (
              <Fragment />
            )}

            {next == 7 ? (
              <div id="msg7" className="layout-container full-width">
                <div className="layout-container full-width pad-s-t">
                  <div className="layout-col h-middle">
                    <img
                      src="assets/img/welcome screen 8.png"
                      className="img-fluid mail-sent-logo"
                      alt="..."
                      style={{ height: "40%" }}
                    />
                  </div>
                </div>

                <div className="layout-container full-width pad-l-t">
                  <div className="layout-col h-middle value-color pad-m-t">
                    Cozo also gives you the opportunity to connect with
                    professionals to improve thestate of your home. This ranges
                    from services related to design and remodeling tohome
                    improvement
                  </div>
                </div>
              </div>
            ) : (
              <Fragment />
            )}

            <div className="layout-container full-width pad-l-t font-medium">
              <div className="layout-col full-width pad-l-t h-middle">
                <button className="btn-default" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
