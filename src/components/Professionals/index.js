import React, { Fragment, useEffect, useState } from "react";
import { getProfessionals } from "../../api/action/UserAction";
import { Detail } from "./DetailModal";

export const Professionals = (props) => {
    const [visible, setVisible] = useState(false);
    const [professionalArr, setProfessionalArr] = useState([]);
    const [professionalDetail, setProfessionalDetail] = useState({});

    useEffect(() => {
        getProfessionals().then(res => {
            if (res.data.professionals) {
                setProfessionalArr(res.data.professionals);
            }
        })
    }, [])

    const handleVisible = (details) => {
        setProfessionalDetail(details);
        setVisible(true);
    }

  return (
    <section id="" className="carousel-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 align-items-stretch video-box">
            <div className="bourse-slider-2 arrows--lg slick-slider pos-rel">
            {professionalArr.map((item, key) => {
                      return(
                        <div className="bourse-slider-2__item slick-slide">
                        <div
                          className="bs-item-inner pos-rel professional-list"
                          data-toggle="modal"
                          data-target="#professionalsInfo">
                          <div onClick={() => handleVisible(item)}>
                            <img src={item.professional.profile_image_url} alt="" />
                            <div className="value-color bold">{item.professional.fullName}</div>
                            <div className="item-caption-2">By {item.professional.profession}</div>
                            <div className="layout-container full-width pad-m-t">
                              <div className="layout-col caption-color font-small h-left pad-m-l">
                                <i className="icon icon-star v-middle"></i>
                                <span className="v-middle">{`(${item.total_rating})`}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                  })}
            </div>
          </div>
        </div>
        {visible ? <Detail visible={visible} professionalDetail={professionalDetail}/> : <Fragment />}
      </div>
    </section>
  );
};
