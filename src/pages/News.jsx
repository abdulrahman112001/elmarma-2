import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPhotoVideo } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { MdLoop, MdOutlinePhotoCamera } from "react-icons/md";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "react-query";

import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ParentPost from "../components/ParentPost";
import ChildCard from "../components/ChildPosts";
import PostsCard from "../components/PostsCard";
// variabeles






const List = [
  {
    count: "1",
    text: "خبر المرمي - أسامة نبيه يقترب من الرحيل عن الزمالك.. والقرار الأقرب بخصوص فيريرا",
  },
  {
    count: "1",
    text: "خبر المرمي - أسامة نبيه يقترب من الرحيل عن الزمالك.. والقرار الأقرب بخصوص فيريرا",
  },
  {
    count: "1",
    text: "خبر المرمي - أسامة نبيه يقترب من الرحيل عن الزمالك.. والقرار الأقرب بخصوص فيريرا",
  },
  {
    count: "1",
    text: "خبر المرمي - أسامة نبيه يقترب من الرحيل عن الزمالك.. والقرار الأقرب بخصوص فيريرا",
  },
];
const table = ["1", "فريق الاهلي", "13", "0 ", "6 ", " 26"];

const News = () => {




  const { data: ChildPost } = useQuery({
    queryKey: ["ChildPost"],
    queryFn: async () => {
      const res = await axios.get(
        `https://elmarma.com/api/v1/posts?type=child-post`
      )
      return res.data.data
    },
  })
  const ChildPosts = ChildPost ? ChildPost : []


  const {
    data: news,
  } = useQuery("newsDataParent", () =>
    axios
      .get(`https://elmarma.com/api/v1/posts?type=parent-post`)
      .then((res) => res.data.data)
  )
  const Parent = news ? news : []


  const {
    data: newsSmall,
  } = useQuery("newsSmall", () =>
    axios
      .get(`https://elmarma.com/api/v1/posts?category_id=7`)
      .then((res) => res.data.data)
  )
  const smallCard = newsSmall ? newsSmall : []




  const {
    data: Teams,
  } = useQuery("allTeams", () =>
    axios
      .get(`https://elmarma.com/api/v1/all-teams`)
      .then((res) => res.data.data)
  )
  const allTeams = Teams ? Teams : []



  const {
    data: matchVideo,
  } = useQuery("matchVideos", () =>
    axios
      .get(`https://elmarma.com/api/v1/match-videos`)
      .then((res) => res.data.data)
  )
  const Video = matchVideo ? matchVideo : []

  const [toDayStudio, setToDayStudio] = useState(Video);

  
  
  return (
    <Row className="mt-1 p-4 gap-4 justify-content-center">
      <Row className="">
        <ParentPost Posts={Parent} id={`daetails-Post`} key={`posts`} xs={12} md={8} lg={5} xl={6} />
        <Col xs={12} md={8} lg={3} xl={2} className="p-0">
          <div className="d-flex flex-column">
            <ChildCard smallCard={smallCard} id={`daetails-Post`} />
          </div>
        </Col>
        <Col xs={12} md={8} lg={4} xl={4} className="p-0 mt-2">
          {/* الأكثر قراءة*/}
          <Card className="rounded">
            <Card.Body className="bg-dark ">
              <Card.Title className="text-white">الأكثر قراءة</Card.Title>
            </Card.Body>
            <ul className="list-group list-group-flush ">
              {List.map((li, index) => (
                <li className="list-group-item" key={index}>
                  <p className="d-flex fsmain">
                    <span className="mostRedCount p-3 text-primary">
                      {li.count}
                    </span>
                    {li.text}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        </Col>{" "}
      </Row>
      <Row className="justify-content-between">
        <Row className="col-md-8">
          <PostsCard posts={smallCard} xs={12} md={2} lg={3} xl={4} id = {'daetails-Post'} />
        </Row>

        <Col xs={12} md={8} lg={4} xl={4} className="p-0 mt-2">
          {" "}
          {/* الأكثر قراءة*/}
          <Card className="rounded ">
            <Card.Body className="bg-light ">
              <Card.Title className="text-dark text-center">
                احجز تذكرتك
              </Card.Title>
              <Card.Text className=" d-flex justify-content-between align-items-center p-4">
                <div className="d-flex flex-column gap-2  align-items-center">
                  <img
                    src="https://media.gemini.media/img/yallakora/IOSTeams//120//2021/9/8/Elahly2021_9_8_16_46.jpg"
                    alt=""
                    width={"100px"}
                  />
                  <p className="text-white">اسم النادي</p>
                </div>
                <div
                  className="px-4 py-2 rounded-pill text-primary "
                  style={{
                    boxShadow: "0.5px 0.5px 4px rgba(0, 0, 0, 0.25)",
                    backgroundColor: "#F9F9F9",
                  }}
                >
                  VS
                </div>
                <div className="d-flex flex-column gap-2  align-items-center">
                  <img
                    src="https://media.gemini.media/img/yallakora/IOSTeams//120//2021/9/8/Elahly2021_9_8_16_46.jpg"
                    alt=""
                    width={"100px"}
                  />
                  <p className="text-white">اسم النادي</p>
                </div>
              </Card.Text>
              <Card.Subtitle>
                <p className="text-primary fs-4 fw-bold text-center">
                  نهائي دوري أبطال ايطاليا
                </p>
              </Card.Subtitle>
              <Link to="" className="text-dark ">
                <Card.Footer className=" fw-bold text-center">
                  للحجز اضغط هنا
                </Card.Footer>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>{" "}
      <Row>
        <Col xs={12}>
          <Link to="">
            <img src="images/news1.jpg" alt="..." style={{ width: "100%" }} />
          </Link>
        </Col>
      </Row>{" "}
      <Row>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex gap-2 align-items-center ">
            <FaPhotoVideo size={20} style={{ color: "#0573F6" }} />
            <h3>ستوديو المرمي</h3>
          </div>
          <div className="d-flex gap-2">
            <Button
              onClick={() => {
                setToDayStudio(Video)
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
      </Row>
      <Row>
        <Swiper
          className="d-flex w-100 align-items-center justify-content-between p-2"
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
      </Row>
    </Row>
  )
};

export default News;
