import React, { useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaPhotoVideo } from "react-icons/fa"
import { AiFillYoutube } from "react-icons/ai"
import { MdOutlinePhotoCamera } from "react-icons/md"
import { Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
// variabeles
const news = {
  cardTitle:
    "    بعد 9 مباريات فقط.. ويجان يقيل كولو توريه من منصب المدير الفني",
  cardText:
    "أقال نادي ويجان الإنجليزي كولو توريه من منصب المدير الفني على خلفية النتائج السلبية الفترة السابقة.",
}
const club = [
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
  { link: "#", src: "/images/club.jpg" },
]
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
]
const table = ["1", "فريق الاهلي", "13", "0 ", "6 ", " 26"]

const News = () => {
  const [toDayStudio, setToDayStudio] = useState("all")
  return (
    <Row className="mt-5 p-4 gap-4">
        <Row className="">
          <Col xs={12} md={8} lg={5} xl={5}>
            <Card>
              <Card.Img variant="top" src="images/newPost.jpg" alt="..." />
              <Card.ImgOverlay className="text-center text-white fw-bold w-100 d-flex flex-column gap-3 align-items-start justify-content-end">
                <Card.Title className="fs-3">{news.cardTitle}</Card.Title>
                <Card.Text className="fs-6">
                  <small>{news.cardText}</small>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>{" "}
          <Col xs={12} md={8} lg={3} xl={3}>
            {" "}
            <div className="d-flex flex-column">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="images/newPost.jpg" alt="..." />
                <Card.ImgOverlay className="text-center text-white w-100 d-flex flex-column gap-3 align-items-start justify-content-end">
                  <Card.Title className="fs-6 ">{news.cardTitle}</Card.Title>
                </Card.ImgOverlay>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="images/newPost.jpg" alt="..." />
                <Card.ImgOverlay className="text-center text-white  w-100 d-flex flex-column gap-3 align-items-start justify-content-end">
                  <Card.Title className="fs-6 ">{news.cardTitle}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col xs={12} md={8} lg={4} xl={4}>
            {/* الأكثر قراءة*/}
            <Card className="rounded">
              <Card.Body className="bg-dark ">
                <Card.Title className="text-white">الأكثر قراءة</Card.Title>
              </Card.Body>
              <ul className="list-group list-group-flush">
                {List.map((li) => (
                  <li className="list-group-item">
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
        <Row>
          <Col xs={12} md={8} lg={5} xl={5}>
            <table className="table">
              <tr>
                <th>الترتيب</th>
                <th>الفريق</th>
                <th>فوز</th>
                <th>خسارة</th>
                <th>تعادل</th>
                <th>نقاط</th>
              </tr>
              <tr>
                {table.map((table) => (
                  <td>{table}</td>
                ))}
              </tr>
            </table>
          </Col>
          <Col xs={12} md={8} lg={3} xl={3}>
            <div className="d-flex flex-column">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="images/newPost.jpg" alt="..." />
                <Card.ImgOverlay className="text-center text-white w-100 d-flex flex-column gap-3 align-items-start justify-content-end">
                  <Card.Title className="fs-6 ">{news.cardTitle}</Card.Title>
                </Card.ImgOverlay>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="images/newPost.jpg" alt="..." />
                <Card.ImgOverlay className="text-center text-white  w-100 d-flex flex-column gap-3 align-items-start justify-content-end">
                  <Card.Title className="fs-6 ">{news.cardTitle}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col xs={12} md={8} lg={4} xl={4}>
            {" "}
            {/* الأكثر قراءة*/}
            <Card className="rounded">
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
                  setToDayStudio("all")
                }}
                variant={toDayStudio === "all" ? "primary" : "light"}
              >
                جميع النتائج
              </Button>
              <Button
                onClick={() => {
                  setToDayStudio("photo")
                }}
                style={{
                  boxShadow: "0.5px 0.5px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "5px",
                }}
                variant={toDayStudio === "photo" ? "primary" : "light"}
              >
                صور
              </Button>
              <Button
                onClick={() => {
                  setToDayStudio("video")
                }}
                style={{
                  boxShadow: "0.5px 0.5px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "5px",
                }}
                variant={toDayStudio === "video" ? "primary" : "light"}
              >
                فيديوهات
              </Button>
            </div>
          </div>
        </Row>
        <Row>
          {toDayStudio === "all" ? (
            <>
              <Col xs={12} md={6} lg={4}>
                <Link to="">
                  <Card>
                    <Card.Img variant="top" src="/images/newPost.jpg" alt="..." />
                    <Card.ImgOverlay className="text-center text-white w-100 d-flex flex-column gap-3 align-items-start justify-content-end">
                      <Card.Text className="fs-4 d-flex gap-2 align-items-center">
                        <AiFillYoutube style={{ color: "red" }} size={40} />
                        كرة القدم حلم أم كابوس
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Link to="">
                  <Card>
                    <Card.Img variant="top" src="/images/newPost.jpg" alt="..." />
                    <Card.ImgOverlay className="text-center text-white w-100 d-flex flex-column gap-3 align-items-start justify-content-end">
                      <Card.Text className="fs-4 d-flex gap-2 align-items-center">
                        <MdOutlinePhotoCamera
                          style={{ color: "white" }}
                          size={40}
                        />
                        كرة القدم حلم أم كابوس
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Link to="">
                  <Card>
                    <Card.Img variant="top" src="/images/newPost.jpg" alt="..." />
                    <Card.ImgOverlay className="text-center text-white w-100 d-flex flex-column gap-3 align-items-start justify-content-end">
                      <Card.Text className="fs-4 d-flex gap-2 align-items-center">
                        <AiFillYoutube style={{ color: "red" }} size={40} />
                        كرة القدم حلم أم كابوس
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
            </>
          ) : toDayStudio === "photo" ? (
            <></>
          ) : (
            <></>
          )}
        </Row>
        <Row
          style={{
            background: "#E8EFF5",
            boxShadow: " 0.5px 0.5px 8px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Swiper
            className="d-flex w-100 align-items-center justify-content-between p-2"
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={2}
            slidesPerView={12}
            Pagination
          >
            {club.map((slide) => (
              <SwiperSlide key={slide.id}>
                {" "}
                <Link to={slide.link}>
                  <img src={slide.src} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
    </Row>
  )
}

export default News
