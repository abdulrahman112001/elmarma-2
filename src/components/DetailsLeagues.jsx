import axios from "axios";
import React, { useState } from "react";
import { Col, Pagination, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useQuery } from "react-query";
import img from "../assets/Frame 113.png";
import leagues from "../assets/leagues.png";
import Media from "../pages/Media";
import LeguesHome from "./LeguesHome";
import LeguesNews from "./LeguesNews";
import MatchComp from "./MatchComp";
import SideBar from "./SideBar";
import TableTeam from "./Table";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ParentPost from "../components/ParentPost";
import ChildCard from "../components/ChildPosts";
import PostsCard from "../components/PostsCard";
import { Swiper } from "swiper/react";
import { A11y, Scrollbar } from "swiper";
import { MdLoop } from "react-icons/md";
import { useParams } from "react-router-dom";
import Scorers from "./Scorers";
function DetailsLeagues() {

  const [key, setKey] = useState("home");

  const idLoca = window.location.href.slice(38)

  const { data: Leguesbaner, isLoading } = useQuery({
    queryKey: ["leagues-tournaments"],
    queryFn: async () => {
      const res = await axios.get(`https://elmarma.com/api/v1/leagues-tournaments/${idLoca}`)
      return res.data.data
    },
  })

  const baner = Leguesbaner ? Leguesbaner : {};
  console.log("🚀 ~ file: DetailsLeagues.jsx:37 ~ DetailsLeagues ~ baner:", baner)
    console.log(baner.id_scorer)
  const { data: scorers } = useQuery({
    queryKey: ["scorers"],
    queryFn: async () => {
      const res = await axios.get(`https://elmarma.com/api/v1/scorers-tournaments${baner.id_scorer}`)
      return res.data.data
    },
  })
  const scorersDate = scorers ? scorers : [];



  const { data: newsSmall } = useQuery("newsSmall", () =>
    axios
      .get(`https://elmarma.com/api/v1/posts?category_id=7`)
      .then((res) => res.data.data)
  );
  const smallCard = newsSmall ? newsSmall : [];
// ///////////////////////////


  const { data:allMatch } = useQuery("allMatch", () =>
    axios.get(`https://elmarma.com/api/v1/match-results-tournaments${baner.id_result_matxh}`).then((res) => res.data.data)
  );

  const MatchesCards = allMatch ? allMatch : [];
  console.log("🚀 ~ file: DetailsLeagues.jsx:74 ~ DetailsLeagues ~ MatchesCards:", MatchesCards)


  return (
    <>
      <div className="mt-3 position-relative">
        <img
          className="w-100 rounded-top"
          style={{ height: "200px" }}
          src={leagues}
          alt=""
        />
        <div className="position-absolute img-baner">
          <h2>{baner.name}</h2>
          <img style={{    'width': '35%'}} src={baner.image} alt="" />
        </div>
      </div>
      <Row
        style={{
          background: "#E8EFF5",
          boxShadow: " 0.5px 0.5px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* <Swiper
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
        </Swiper> */}
      </Row>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="الرئيسية">
          <LeguesHome/>
        </Tab>
        <Tab eventKey="profile" title="الأخبار">
         <LeguesNews/>
        </Tab>
        <Tab eventKey="Matches" title="المباريات">
          <Row>
            <MatchComp MatchesCards={MatchesCards} />
            <SideBar />
          </Row>
        </Tab>
        <Tab eventKey="Tabels" title="الترتيب">
          <Row>
            <Col xs={12} md={6} lg={6} xl={8} className="p-0">
              <TableTeam headTable={"مجموعه 1 "} />
            </Col>

            <SideBar />
          </Row>
        </Tab>
        <Tab eventKey="Media" title="ميديا">
          <Media />
        </Tab>
        <Tab eventKey="Players" title="الهدافون">
          <Row>
            <Col xs={12} md={6} lg={6} xl={8} className="p-0">
              {/* <TableTeam headTable={"مجموعه 1 "} /> */}
              <Scorers scorersDate={scorersDate}/>
            </Col>

            <SideBar />
          </Row>
        </Tab>
      </Tabs>
    </>
  );
}

export default DetailsLeagues;
