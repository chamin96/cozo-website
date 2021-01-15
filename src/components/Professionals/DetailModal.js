import React, { useState } from "react";
// import { Modal, Button } from "antd";
import Modal from "react-modal";
import { defaultModelPopup } from "../../constants/conts";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const content = ["About", "Contact Info"];

export const Detail = (props) => {
  const { visible, onClose, professionalDetail } = props;
  const [selectedContent, setSelectedContent] = useState("About");

  return (
    <Modal
      isOpen={visible}
      // onRequestClose={() => this.setState({ showCalender: false })}
      shouldCloseOnOverlayClick={true}
      contentLabel="Modal"
      style={defaultModelPopup}>
      <div>
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content" style={{ width: "2000px" }}>
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={onClose}>
                &times;
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <div className="layout-container full-width">
                <div className="layout-container full-width">
                  <div className="layout-col h-right">
                    <i className="fa fa-share-alt"></i>
                  </div>
                  <div className="layout-col h-middle">
                    <img src="assets/img/clients/client-2.jpg" alt="" />
                  </div>
                  <div className="layout-col h-left">
                    <i className="fa fa-heart-o"></i>
                  </div>
                </div>
                <div className="layout-container h-middle full-width value-color bold pad-m-t">
                  {professionalDetail.professional.fullName}
                </div>
                <div className="layout-container h-middle full-width caption-color font-small">
                  {professionalDetail.professional.profession}
                </div>
                <div className="layout-container h-middle full-width value-color bold">
                  <span>
                    <i className="icon icon-star"></i>
                  </span>
                  <span className="font-small caption-color">{`(${professionalDetail.total_rating})`}</span>
                </div>
              </div>

              {/* <!-- Tab Panel --> */}
              <div className="layout-container full-width pad-m-b">
                <div className="layout-col">
                  <nav className="nav-menu d-lg-block">
                    <ul
                      className="layout-container"
                      style={{ display: "table", cursor: "pointer" }}>
                      {content.map((element) => {
                        return (
                          <li
                            id="aboutClicked"
                            className={`layout-inline v-middle list-item ${
                              element == "About" ? "list-item-1" : "list-item-2"
                            } active`}
                            value={element}
                            onClick={(e) => setSelectedContent(element)}>
                            {element}
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </div>
              {/* <!-- /Tab Panel --> */}

              {/* <!-- About Designer --> */}
              {selectedContent == "About" && (
                <div id="designerAboutInfo">
                  <div className="layout-container full-width pad-m-t">
                    <div className="layout-container full-width pad-m-t">
                      <div className="layout-col h-left value-color bold">
                        About Mark
                      </div>
                      <div className="layout-col see-all-text h-right font-small">
                        {" "}
                        See All
                      </div>
                    </div>
                    <div className="layout-container full-width pad-m-t caption-color font-small">
                      <div className="layout-col">
                        {professionalDetail.professional.about}
                      </div>
                    </div>

                    <div className="category-separator"></div>

                    <div className="layout-container full-width">
                      <div className="layout-col h-left value-color bold">
                        Location
                      </div>
                    </div>
                    <div className="layout-container full-width pad-m-t caption-color font-small">
                      <div className="layout-col">
                        {professionalDetail.professional.location}
                      </div>
                    </div>

                    <div className="category-separator"></div>
                  </div>
                  <div>
                    <div className="layout-container pad-m-b">
                      <div className="layout-col h-left value-color bold">
                        Reviews
                      </div>
                    </div>
                    <div className="clients">
                      <div className="container main-container">
                        <OwlCarousel
                          className="owl-theme"
                          loop
                          margin={10}
                          item={3}
                          navClass="owl-prev owl-next"
                          >
                          {professionalDetail.professional.reviews.map(
                            (item, key) => {
                              return (
                                <div className="item">
                                  <div className="layout-container full-width h-middle">
                                    <img
                                      src="assets/img/clients/client-1.jpg"
                                      alt=""
                                    />
                                    <div className="value-color bold">
                                      Greg Smith
                                    </div>
                                    <div className="client-feedback caption-color font-small">
                                      {item.text}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </OwlCarousel>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* <!-- /About Designer --> */}

              {/* <!-- Contact Designer --> */}
              {selectedContent == "Contact Info" && (
                <div id="designerContactInfo" className="display">
                  <div className="layout-container full-width">
                    <div className="layout-col h-left value-color bold">
                      Email
                    </div>
                  </div>
                  <div className="layout-container full-width pad-m-t caption-color font-small">
                    <div className="layout-col">
                      {professionalDetail.professional.email}
                    </div>
                  </div>

                  <div className="category-separator"></div>

                  <div className="layout-container full-width">
                    <div className="layout-col h-left value-color bold">
                      Phone Number
                    </div>
                  </div>
                  <div className="layout-container full-width pad-m-t caption-color font-small">
                    <div className="layout-col">
                      {professionalDetail.professional.phone_number}
                    </div>
                  </div>

                  <div className="category-separator"></div>

                  <div className="layout-container full-width">
                    <div className="layout-col h-left value-color bold">
                      Address
                    </div>
                  </div>
                  <div className="layout-container full-width pad-m-t caption-color font-small">
                    <div className="layout-col">
                      {professionalDetail.professional.location}
                    </div>
                  </div>
                </div>
              )}
              {/* <!-- /Contact Designer --> */}
            </div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
