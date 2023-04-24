import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { AiFillYoutube } from "react-icons/ai";
import { FaPhotoVideo } from "react-icons/fa";
import { MdLoop } from "react-icons/md";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { A11y, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ChildCard from "../components/ChildPosts";
import ParentPost from "../components/ParentPost";
import PostsCard from "../components/PostsCard";
import { apiClient, customLang } from "../utils/axios-util";
import { t } from "i18next";
import SideBar from "../components/SideBar";

function WomenSports() {

    const { data:WomenSports } = useQuery({
        queryKey: ["WomenSports"],
        queryFn: async () => {
          const res = await apiClient.get(`sports-woman?&${customLang}`);
          return res.data.data;
        },
      });
      const WomenSportsDatat = WomenSports ? WomenSports : [];
      console.log("🚀 ~ file: News.jsx:63 ~ News ~ WomenSportsDatat:", WomenSportsDatat)
    
    
    
      ///////////////////////
    
  const { data: newsWomenSports } = useQuery({
    queryKey: ["newsWomenSports"],
    queryFn: async () => {
      const res = await apiClient.get(`sports-woman?type=parent-post&${customLang}`);
      return res.data.data;
    },
  });
  const newsWomenSportsDatat = newsWomenSports ? newsWomenSports : [];
  console.log("🚀 ~ file: News.jsx:63 ~ News ~ newsWomenSportsDatat:", newsWomenSportsDatat)



  ///////////////////////

  const { data: ChildPostWomenSport } = useQuery({
    queryKey: ["ChildPostWomenSport"],
    queryFn: async () => {
      const res = await apiClient.get(`sports-woman?type=child-post&${customLang}`);
      return res.data.data;
    },
  });
  const ChildPostWomenSportData = ChildPostWomenSport ? ChildPostWomenSport : [];
  console.log("🚀 ~ file: News.jsx:54 ~ News ~ ChildPostWomenSportData:", ChildPostWomenSportData)

  /////////////////


    return (
        <Row className="mt-1 p-4  ">
          <div className="col-md-8">
    
          <Row className="justify-content-between">
            <ParentPost
              Posts={newsWomenSportsDatat}
              id={`daetails-Post`}
              key={`posts`}
              xs={12}
              md={8}
              lg={5}
              xl={9}
              bigPos="bigPos"
            />
            <Col xs={12} md={8} lg={3} xl={3} className="p-0">
              <div className="d-flex flex-column">
                <ChildCard smallCard={ChildPostWomenSportData} id={`daetails-Post`} />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-between">
           <Row className="col-md-12 m-auto p-0">
              <PostsCard
                posts={WomenSportsDatat}
                xs={12}
                md={2}
                lg={3}
                xl={3}
                id={"daetails-Post"}
              />
            </Row> 
    
    
          </Row>{" "}
    
          </div>
    
    
          <SideBar/>
          <Row className="mt-2 p-0">
            <Col xs={12} className="p-0">
              <Link to="">
                <img src="images/news1.jpg" alt="..." style={{ width: "100%" }} />
              </Link>
            </Col>
          </Row>{" "}
          {/* <Row>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex gap-2 align-items-center ">
                <FaPhotoVideo size={20} style={{ color: "#0573F6" }} />
                <h3>ستوديو المرمي</h3>
              </div>
              <div className="d-flex gap-2">
                <Button
                  onClick={() => {
                    setToDayStudio(Video);
                  }}
                  style={{
                    boxShadow: "0.5px 0.5px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "5px",
                  }}
                  variant={toDayStudio === Video ? "primary" : "light"}
                >
                  جميع النتائج
                </Button>
              </div>
            </div>
          </Row> */}
          {/* <Row>
            <Swiper
              className="d-flex w-100 align-items-center justify-content-between p-3"
              modules={[Pagination, Scrollbar, A11y, MdLoop]}
              spaceBetween={10}
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
              pagination={{ clickable: true }}
            >
              {Video.map((video) => (
                <SwiperSlide>
                  {" "}
                  <Link to={`/details-video${video.id}`}>
                    <Card>
                      <Card.Img
                        variant="top"
                        className="rounded-3"
                        src={video?.image}
                        style={{ height: " 200px" }}
                        alt="..."
                      />
                      <Card.ImgOverlay className="text-center text-white w-100 d-flex flex-column gap-3 align-items-start justify-content-end">
                        <Card.Text className="fs-5 d-flex gap-2 align-items-center">
                          <AiFillYoutube style={{ color: "red" }} size={40} />
                          {`${video?.title.slice(0, 30)} ...`}
                        </Card.Text>
                      </Card.ImgOverlay>
                    </Card>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
          <Row
            style={{
              background: "#E8EFF5",
              boxShadow: " 0.5px 0.5px 8px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Swiper
              className="d-flex w-100 align-items-center justify-content-between p-2"
              modules={[Pagination, Scrollbar, A11y, MdLoop]}
              spaceBetween={10}
              breakpoints={{
                340: {
                  slidesPerView: 5,
                },
                768: {
                  slidesPerView: 10,
                },
                1000: {
                  slidesPerView: 17,
                },
              }}
            >
              {allTeams.map((slide) => (
                <SwiperSlide key={slide.id}>
                  {" "}
                  <Link to={slide.link}>
                    <img className="w-100" src={slide.image} alt="" />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row> */}
        </Row>
      );
}

export default WomenSports