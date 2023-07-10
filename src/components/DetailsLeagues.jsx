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
import leagues from "../assets/leagues.png";
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
function DetailsLeagues() {
  const [key, setKey] = useState("home");

  // const idLoca = window.location.href.slice(38);
  var str = window.location.href;
  var wordToRemove = `${url}details-leagues/`;
  var idLoca = str.split(new RegExp('\\b' + wordToRemove + '\\b')).join('');


  const { data: Leguesbaner, isLoading } = useQuery({
    queryKey: [`leagues-tournaments/${idLoca}`],
    queryFn: async () => {
      const res = await apiClient.get(`leagues-tournaments/${idLoca}`);
      return res.data.data;
    },
  });


  const baner = Leguesbaner ? Leguesbaner : [];
  const { data: scorers } = useQuery({
    queryKey: [`scorers${baner[0]?.id_scorer}`],
    queryFn: async () => {
      const res = await apiClient.get(
        `scorers-tournaments${baner[0]?.id_scorer}`
      );
      return res.data.data;
    },
  });
  const scorersDate = scorers ? scorers : [];

  // ///////////////////////////
  const { data: allMatch, isLoading: loadingMatch } = useQuery({
    queryKey: [`allMatch${baner[0]?.id_result_matxh}`],
    queryFn: async () => {
      const res = await apiClient.get(
        `match-results-tournaments${baner[0]?.id_result_matxh}`
      );
      return res.data.data;
    },
    // refetchInterval:false
  });
  const MatchesCards = allMatch ? allMatch : [];

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
      {isLoading ? (
        <p className="text-center">
          <Spiner variant="dark" />
          <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
        </p>
      ) : baner.length == 0 ? (
        "يوجد خطأ في عرض البطولات  "
      ) : (
        baner.map((baner) => (
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
                <img style={{ height: "120px" }} src={baner.image} alt="" />
              </div>
            </div>

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
                    className="d-flex w-100 align-items-center justify-content-between p-2 legues-details teams"
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
                    {detailsTournaments.map((slide) => (
                      <SwiperSlide key={slide.id}>
                        {" "}
                        <Link
                          to={`/details-club${slide.id}`}
                          className="d-flex flex-column m-auto text-center"
                        >
                          <img
                            style={{ height: "34px", width: "40px" }}
                            className="m-auto text-center"
                            src={slide.iamge}
                            alt=""
                          />
                          <small style={{ fontSize: "11px" }}>
                            {slide.name}
                          </small>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Row>
                <LeguesHome title={baner?.name} id={baner?.id_scorer} urlRemoveLegues={"details-leagues/"} />
              </Tab>

              <Tab eventKey="profile" title="الأخبار">
                <LeguesNews 
                 title={baner?.name} />
              </Tab>

              {MatchesCards.length !== 0 && (
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
              )}

              <Tab eventKey="Tabels" title="الترتيب">
                <Row>
                  <Col xs={12} md={6} lg={6} xl={8} className="p-0">
                    <TableTeam idLoca={idLoca} urlRemoveLegues={"details-leagues/"}  />
                  </Col>

                  <SideBar />
                </Row>
              </Tab>

              <Tab eventKey="Media" title="ميديا">
                <MedisLegues id={baner?.id_scorer} />
                {/* <Media /> */}
              </Tab>
              {scorersDate.length !== 0 && (
                <Tab eventKey="Players" title="الهدافون">
                  <Row>
                    <Col xs={12} md={6} lg={6} xl={8} className="p-0">
                      {/* <TableTeam headTable={"مجموعه 1 "} /> */}
                      <Scorers scorersDate={scorersDate} />
                    </Col>

                    <SideBar />
                  </Row>
                </Tab>
              )}
            </Tabs>
          </>
        ))
      )}
    </>
  );
}

export default DetailsLeagues;
