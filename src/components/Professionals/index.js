import React, { Fragment, useEffect, useState } from "react";
import { getProfessionals } from "../../api/action/UserAction";
import { Detail } from "./DetailModal";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const Professionals = (props) => {
  const [visible, setVisible] = useState(false);
  const [professionalArr, setProfessionalArr] = useState([]);
  const [professionalDetail, setProfessionalDetail] = useState({});

  useEffect(() => {
    getProfessionals().then((res) => {
      if (res.data.professionals) {
        setProfessionalArr(res.data.professionals);
      }
    });
  }, []);

  const handleVisible = (details) => {
    setProfessionalDetail(details);
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <section id="" className="carousel-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 align-items-stretch video-box">
            <div className="bourse-slider-2 arrows--lg slick-slider pos-rel">
              {/* <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          // item={4}
          navClass="owl-prev owl-next"> */}
              {professionalArr &&
                professionalArr.map((item, key) => {
                  return (
                    <div
                      className="bourse-slider-2__item slick-slide"
                      key={key}>
                      <div
                        className="bs-item-inner pos-rel professional-list"
                        data-toggle="modal"
                        data-target="#professionalsInfo">
                        <div onClick={() => handleVisible(item)}>
                          <img src="assets/img/clients/client-1.jpg" alt="" />
                          <div
                            className="value-color bold"
                            style={{ cursor: "pointer" }}>
                            {item.professional.fullName}
                          </div>
                          <div className="item-caption-2">
                            By {item.professional.profession}
                          </div>
                          <div className="layout-container full-width pad-m-t">
                            <div className="layout-col caption-color font-small h-left pad-m-l">
                              <i className="icon icon-star v-middle"></i>
                              <span className="v-middle">{`(${item.total_rating})`}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {/* </OwlCarousel> */}
            </div>
          </div>
        </div>
        {visible ? (
          <Detail
            visible={visible}
            professionalDetail={professionalDetail}
            onClose={handleClose}
          />
        ) : (
          <Fragment />
        )}
      </div>
    </section>
  );
};
