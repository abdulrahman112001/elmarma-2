import { t } from "i18next";
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { A11y, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { useIsRTL } from "../hooks/useIsRTL";
import { apiClient } from "../utils/axios-util";
import ButtonGroups from "./ButtonGroups";
import Spiner from "./Spiner";

function SwiperComp() {
  const isRTL = useIsRTL();
  const [formateValue, setFormateValue  ] = useState();
  const { data: MatchAr ,isFetching ,     isLoading,} = useQuery({
    queryKey: [`ALL-MATCHES-SWIPER/${formateValue}`],
    queryFn: async () => {
      const res = await apiClient.get(`all-matches?date=${formateValue}`);
      return res.data.data;
    },
  });
  const {
    data: MatchEng,

    
  } = useQuery({
    queryKey: [`MatchEng`],
    queryFn: async () => {
      const res = await apiClient.get(`all-matches-en`);
      return res.data.data;
    },
  });
;
  const Slider = !isRTL ? MatchEng || [] : MatchAr || [];
  return (
    <>
      <div className="mt-4">
        {isRTL && <ButtonGroups setFormateValue={setFormateValue} />}


 {      isLoading ? (
        <p className="text-center">
          <Spiner variant="dark" />
          <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
        </p>
      ) : Slider.length === 0 ? (
        "يوجد خطأ في عرض المباريات  "
      ) :

        <Swiper
          className="bg-dark text-white"
          modules={[Navigation, A11y]}
          spaceBetween={10}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 4,
            },
          }}
        >

          {Slider.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Link to={`/details-match${slide?.id}`} className="p-0">
                <div className="d-flex justify-content-between align-items-center position-relative sliderAfter px-5 py-2">
                  <div className="d-flex  align-items-center ">
                    <div className="d-flex flex-column align-items-center m-0 text-center  ">
                      <img
                        className="first_image"
                        src={slide?.first_image}
                        alt=""
                        width={"30px"}
                      />
                      <small>{slide?.first_team}</small>
                    </div>
                  </div>

                  <div className="d-flex  align-items-center ">
                    <div>{slide?.second_result}</div>

                    <div className="d-flex flex-column  justify-content-center align-items-center ">
                      <h6 className="titel-match text-center">
                        {slide?.championship_type}
                      </h6>

                      <div
                        className="text-center w-100 rounded-pill mx-4"
                        style={{ backgroundColor: slide?.badgeColor }}
                      >
                        {slide?.match_status}
                      </div>

                      <div
                        style={{
                          transform: "translateY(13px)",
                          color: "#A7A7A7",
                        }}
                        className="game_time"
                      >
                        {slide?.game_time}
                      </div>
                    </div>

                    <div className="m-0  ">{slide?.first_result}</div>
                  </div>

                  <div className="d-flex  align-items-center">
                    <div className="d-flex flex-column align-items-center ">
                      <img
                        className="second_image"
                        src={slide?.second_image}
                        alt=""
                        width={"30px"}
                      />
                      <small>{slide?.second_team}</small>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      }
       
        <Col lg={12}>
          <Link
            to="/matches"
            className="d-flex align-items-end justify-content-end all-matches-btn-coustom"
          >
            <div className="d-flex bg-primary rounded-1 mt-1 align-items-center  justify-content-center w-100">
              <p className="text-white m-0 p-2 "> {t("All Matches")}</p>
              <MdKeyboardArrowLeft
                style={{ color: "white", width: "20px", height: "20px" }}
              />
            </div>
          </Link>
        </Col>
      </div>
    </>
  );
}

export default SwiperComp;
