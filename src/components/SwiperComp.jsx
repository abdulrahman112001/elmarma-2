import React from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import ButtonGroups from "./ButtonGroups"
import { useQuery } from "react-query"
import axios from "axios"
import { Link } from "react-router-dom"

function SwiperComp() {
  const {data } = useQuery("repoData", () =>
    axios.get("https://elmarma.com/api/v1/all-matches").then((res) => {
      var data = res.data.data.filter((item) => !item?.id.startsWith("https://"))
      return data
    })
  )

  const Slider = data ? data : []

  return (
    <>
      <div className="mt-4">
        <ButtonGroups />

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
          }}
        >
          {Slider.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Link to={`details-match${slide?.id}`} className="p-0">
                <div className="d-flex justify-content-between align-items-center position-relative sliderAfter px-5 py-2">
                  <div className="d-flex  align-items-center ">
                    <div className="d-flex flex-column align-items-center m-0  ">
                      <img src={slide?.first_image} alt="" width={"50px"} />
                      <small>{slide?.first_team}</small>
                    </div>
                  </div>

                  <div className="d-flex  align-items-center ">
                    <div>{slide?.first_result}</div>

                    <div className="d-flex flex-column  justify-content-center align-items-center">
                      <h6 className="titel-match">
                        {slide?.championship_type}
                      </h6>

                      <div
                        className="text-center w-100 rounded-pill"
                        style={{ backgroundColor: slide?.badgeColor }}
                      >
                        {slide?.match_status}
                      </div>

                      <div
                        style={{
                          transform: "translateY(13px)",
                          color: "#A7A7A7",
                        }}
                      >
                        {slide?.game_time}
                      </div>
                    </div>

                    <div className="m-0  ">{slide?.first_result}</div>
                  </div>

                  <div className="d-flex  align-items-center">
                    <div className="d-flex flex-column align-items-center ">
                      <img src={slide?.second_image} alt="" width={"50px"} />
                      <small>{slide?.second_team}</small>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default SwiperComp
