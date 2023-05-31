import { t } from "i18next";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useQuery } from "react-query";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { apiClient, url } from "../utils/axios-util";
import LeguesHome from "./LeguesHome";
import LeguesNews from "./LeguesNews";
import MatchComp from "./MatchComp";
import MedisLegues from "./MedisLegues";
import Scorers from "./Scorers";
import SideBar from "./SideBar";
import Spiner from "./Spiner";
import TableTeam from "./Table";

import { MdLoop } from "react-icons/md";
import { Link } from "react-router-dom";
function DetailsClub() {
  const [key, setKey] = useState("home");

  var str = window.location.href;
  var wordToRemove = `${url}details-club/`;
  var idLoca = str.split(new RegExp('\\b' + wordToRemove + '\\b')).join('');
  console.log(idLoca);


  const { data: club_details , isFetching ,isFetched  , } = useQuery({
    queryKey: [`club-details/${idLoca}`],
    queryFn: async () => {
      const res = await apiClient.get(`club-details/${idLoca}`);
      return res.data.data;
    },
  });
  const club_details_data = club_details ? club_details : [];
  
  const { data: LeguesdataClub, isLoading } = useQuery({
    queryKey: [`details-club/${idLoca}`],
    queryFn: async () => {
      const res = await apiClient.get(`club-details/tabs/${idLoca}`);
      return res.data.data;
    },
  });
  const dataClub = LeguesdataClub ? LeguesdataClub : [];
  console.log("🚀 ~ file: DetailsClub.jsx:50 ~ DetailsClub ~ dataClub:", dataClub)
  const { data: scorers } = useQuery({
    queryKey: [`scorers${dataClub[0]?.id_scorer}`],
    queryFn: async () => {
      const res = await apiClient.get(
        `scorers-tournaments${dataClub[0]?.id_scorer}`
      );
      return res.data.data;
    },
  });
  const scorersDate = scorers ? scorers : [];
  console.log("🚀 ~ file: DetailsClub.jsx:61 ~ DetailsClub ~ scorersDate:", scorersDate)
  // ///////////////////////////
  const { data: allMatch, isLoading: loadingMatch } = useQuery({
    queryKey: [`allMatch${dataClub[0]?.id_result_matxh}`],
    queryFn: async () => {
      const res = await apiClient.get(
        `match-results-tournaments${dataClub[0]?.id_result_matxh}`
      );
      return res.data.data;
    },
  });
  const MatchesCards = allMatch ? allMatch : [];

  const { data: allTeanm, isLoading:teamLoading } = useQuery({
    queryKey: [`all-teams-groub`],
    queryFn: async () => {
      const res = await apiClient.get(
        `all-teams/${idLoca}`
      );
      return res.data.data;
    },
  });
  const allTeamData = allTeanm ? allTeanm : [];

  // ///////////////////////////
  const {
    data: detailsLeaguesTournaments,
    isLoading: loadingdetailsLeaguesTournaments,
  } = useQuery({
    queryKey: [`details-leagues-tournaments/${idLoca}`],
    queryFn: async () => {
      const res = await apiClient.get(`details-leagues-tournaments/${idLoca}`);
      return res.data.data;
    },
    // refetchInterval:false
  });
  const detailsTournaments = detailsLeaguesTournaments
    ? detailsLeaguesTournaments
    : [];

  return (
    <>
      {isLoading && isFetching   ? (
        <p className="text-center">
          <Spiner variant="dark" />
          <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
        </p>
      ) : dataClub.length == 0 ? (
        "يوجد خطأ في عرض البطولات  "
      ) : (
        dataClub.map((dataClub) => (
          <>
            {club_details_data?.map((banner) => (
              <div className="mt-3 position-relative details-club">
                <img
                  className="w-100 rounded-top"
                  style={{ height: "200px" }}
                  src={banner?.image_background}
                  alt=""
                />
                <div
                  style={{ top: "20px", left: "0" }}
                  className="position-absolute row justify-content-between align-items-end w-100 m-auto"
                >
                  <div className="img-dataClub col-md-2">
                    <img
                      style={{ height: "100px" }}
                      src={dataClub?.image || banner?.image}
                      alt=""
                    />
                  </div>
                  <div className="col-md-8">
                    <h2>{dataClub?.name || banner?.name}</h2>

                    <div className=" img-dataClub-three d-flex justify-content-between align-items-center w-75">
                      <div className="d-flex flex-column gap-2">
                        <p className="m-0">سنة التاسيس :</p>
                        <p className="m-0">{banner?.year_Founded}</p>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <p className="m-0">رئيس النادي :</p>
                        <p className="m-0">{banner?.club_president}</p>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <p className="m-0">الاستاد:</p>
                        <p className="m-0">{banner.stadium}</p>
                      </div>
                    </div>
                  </div>

                  <div className=" img-dataClub-two col-md-2">
                    <img
                      style={{ height: "100px" }}
                      src={banner?.image_technical_director}
                      alt=""
                    />
                    <h2>{banner?.name_technical_director}</h2>
                  </div>
                </div>
              </div>
            ))}

            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="home" title="الرئيسية">
             
                <Row
              style={{
                background: "#E8EFF5",
                boxShadow: " 0.5px 0.5px 8px rgba(0, 0, 0, 0.25)",
              }}
              className="my-3"
            >
              <Swiper
                className="d-flex w-100 align-items-center justify-content-between p-2 legues-details"
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
                    slidesPerView: 12,
                  },
                }}
              >
                {allTeamData.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    {" "}
                    <Link
                         to={`/details-club${slide.id}`}
                      className="d-flex flex-column m-auto text-center"
                    >
                      <img
                        style={{ height: "30px", width: "30px" }}
                        className="m-auto text-center"
                        src={slide.image}
                        alt=""
                      />
                      <small style={{ fontSize: "11px" }}>{slide.title}</small>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Row>
            <LeguesHome  id={dataClub?.id_scorer} urlRemoveClub={"details-club/"} />
              </Tab>
              <Tab eventKey="profile" title="الأخبار">
                <LeguesNews title={dataClub[0]?.name}  />
              </Tab>
              <Tab eventKey="Matches" title="المباريات">
                <Row>
                  <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
                    <Row>
                      <MatchComp
                        MatchesCards={MatchesCards}
                        loadingMatch={loadingMatch}
                      />
                    </Row>
                  </div>
                  <SideBar />
                </Row>
              </Tab>
              <Tab eventKey="Tabels" title="الترتيب">
                <Row>
                  <Col xs={12} md={6} lg={6} xl={8} className="p-0">
                    <TableTeam idLoca={idLoca} urlRemoveClub={"details-club/"} />
                  </Col>

                  <SideBar />
                </Row>
              </Tab>
              <Tab eventKey="Media" title="ميديا">
                <MedisLegues id={dataClub?.id_scorer} />
                {/* <Media /> */}
              </Tab>
              <Tab eventKey="Players" title="الهدافون">
                <Row>
                  <Col xs={12} md={6} lg={6} xl={8} className="p-0">
                    {/* <TableTeam headTable={"مجموعه 1 "} /> */}
                    <Scorers scorersDate={scorersDate} />
                  </Col>

                  <SideBar />
                </Row>
              </Tab>
              
            </Tabs>

          </>
        ))
      )}
    </>
  );
}

export default DetailsClub;
