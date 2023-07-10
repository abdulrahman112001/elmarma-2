import React, { useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import { AiFillYoutube } from "react-icons/ai"
import { FaPhotoVideo } from "react-icons/fa"
import { MdLoop } from "react-icons/md"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { t } from "i18next"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import ChildCard from "../components/ChildPosts"
import ParentPost from "../components/ParentPost"
import PostsCard from "../components/PostsCard"
import SideBar from "../components/SideBar"
import Spiner from "../components/Spiner"
import TowSideBar from "../components/TowSideBar"
import { useIsRTL } from "../hooks/useIsRTL"
import { apiClient, apiClientEn, customLang } from "../utils/axios-util"
import { Helmet } from "react-helmet"

const News = () => {
  const isRTL = useIsRTL()

  const { data: ChildPost, isFetching } = useQuery({
    queryKey: ["ChildPost"],
    queryFn: async () => {
      const res = await apiClient.get(`posts?type=child-post`)
      return res.data.data
    },
  })
  const ChildPosts = ChildPost ? ChildPost : []

  const { data: news, isLoading: newsLoading } = useQuery({
    queryKey: ["newsDataParent"],
    queryFn: async () => {
      const res = await apiClient.get(`posts?type=parent-post`)
      return res.data.data
    },
  })
  const Parent = news ? news : []

  const { data: newsSmall, isLoading: newsSmallLoading } = useQuery({
    queryKey: ["newsSmall"],
    queryFn: async () => {
      const res = await apiClient.get(
        `posts?category_title="الدوى المصرى"&${customLang}`
      )
      return res.data.data
    },
  })
  const smallCard = newsSmall ? newsSmall : []

  const { data: Teams, isLoading: TeamsLoading } = useQuery({
    queryKey: ["allTeams"],
    queryFn: async () => {
      const res = await apiClient.get(`all-teams`)
      return res.data.data
    },
  })

  const { data: TeamsEng } = useQuery({
    queryKey: [`TeamsEngQuery`],
    queryFn: async () => {
      const res = await apiClientEn.get(
        `https://v3.football.api-sports.io/teams`
      )
      return res.data.response
    },
  })

  const allTeams = Teams || []

  const { data: matchVideo, isLoading: VideoLoading } = useQuery({
    queryKey: ["matchVideos"],
    queryFn: async () => {
      const res = await apiClient.get(`match-videos`)
      return res.data.data
    },
  })

  const Video = matchVideo ? matchVideo : []

  const [toDayStudio, setToDayStudio] = useState(Video)

  return (
    <>
          <Helmet>
        <title> الرئيسية</title>
        <meta
          name="description"
          content="Stay up-to-date with the latest football news, matches, and clubs on Elmarma."
        />
        <meta
          name="keywords"
          content="football, news, matches, clubs, Elmarma , المرمى , ماتشات  ,  كره ,كرة قدم  , ألمرمى  ,  الاهلي "
        />
      </Helmet>
      {newsLoading && newsSmallLoading && TeamsLoading && VideoLoading ? (
        <p className="text-center">
          <Spiner variant="dark" />
          <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
        </p>
      ) : Parent.length === 0 ? (
        "يوجد خطأ في عرض الاخبار  "
      ) : (
        <Row className="mt-1 p-4  ">
          <div className="col-md-12">
            <Row className="justify-content-">
              <ParentPost
                Posts={[Parent[0]]}
                id={`daetails-Post/`}
                key={`posts`}
                xs={12}
                md={8}
                lg={5}
                xl={6}
                bigPos="bigPos"
              />
              <Col xs={12} md={8} lg={3} xl={6} className="p-0">
                <div className="row">
                  <ChildCard smallCard={ChildPosts.slice(0,4)} xl={6} id={`daetails-Post/`} />
                </div>
              </Col>
            </Row>


            <Col xs={12} md={8} lg={3} xl={12} className="p-0">
                <div className="row col-12">
                  <ChildCard smallCard={ChildPosts.slice(4)} xl={3}  id={`daetails-Post/`} />
                </div>
            </Col>



            <Row
              style={{
                background: "#E8EFF5",
                boxShadow: " 0.5px 0.5px 8px rgba(0, 0, 0, 0.25)",
              }}
              className="my-5 p-0 teams"
            >
              <Swiper
                className="d-flex w-100 align-items-center justify-content-between p-2 legues-details p-0 "
                modules={[Pagination, Navigation, Scrollbar, A11y, MdLoop]}
                spaceBetween={10}
                navigation
                breakpoints={{
                  340: {
                    slidesPerView: 5,
                  },
                  768: {
                    slidesPerView: 10,
                  },
                  1000: {
                    slidesPerView: 13,
                  },
                }}
              >
                {allTeams.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    {" "}
                    <Link
                      to={`details-club${slide?.id}`}
                      className="d-flex flex-column m-auto text-center"
                    >
                 
                        <img
                          style={{ height: "30px", width: "30px" }}
                          className="m-auto text-center"
                          src={slide?.image}
                          alt=""
                        /> 
                     
                      
                          <small style={ { fontSize: "11px" } }>{ slide?.title }</small>
                         
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Row>
            <Row className="justify-content-between">
              <TowSideBar />
              <Row className="col-md-4 m-auto p-0">
                <PostsCard
                  posts={smallCard}
                  xs={12}
                  md={2}
                  lg={3}
                  xl={12}
                  id={"daetails-Post"}
                />
              </Row>
              <SideBar />
            </Row>{" "}
          </div>
          <Row className="mt-2 p-0">
            <Col xs={12} className="p-0">
              <Link to="">
                <img
                  src="images/news1.jpg"
                  alt="..."
                  style={{ width: "100%" }}
                />
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
                  nav
                >
                    <Link
                      to={`/medias`}
                      className="d-flex flex-column m-auto text-center"
                    >

                  جميع النتائج
                    </Link>
                </Button>
              </div>
            </div>
          </Row>
          <Row>
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
        </Row>
      )}
    </>
  )
}

export default News
