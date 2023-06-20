import axios from "axios";
import React from "react";

import { Col, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { apiClient, customLang } from "../utils/axios-util";
import ChildCard from "./ChildPosts";
import LeaguesNews from "./LeaguesNews";
import ParentPost from "./ParentPost";
import ProbabiltyMatches from "./ProbabiltyMatches";
import SideBar from "./SideBar";
import TableTeam from "./Table";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import Spiner from "./Spiner";
import { t } from "i18next";
function LeguesHome({ title, id  , urlRemoveLegues , urlRemoveClub }) {
  const { data: news } = useQuery("newsDataParent", () =>
    apiClient
      .get(`posts?title=${title}&&$${customLang}`)
      .then((res) => res.data.data)
  );
  const Parent = news ? news : [];

  const { data: newsSmall } = useQuery("newsSmall", () =>
    apiClient
      .get(`tournament-news?title=${title}&${customLang}`)
      .then((res) => res.data.data)
  );
  const smallCard = newsSmall ? newsSmall : [];


  console.log("🚀 ~ file: LeguesHome.jsx:32 ~ LeguesHome ~ smallCard:", smallCard)

  const { data: VideosData, isLoading } = useQuery({
    queryKey: [`allVideo-leagues${id}`],
    queryFn: async () => {
      const res = await apiClient.get(`leagues-tournaments/videos${id}`);
      return res.data.data;
    },
  });
  const Videos = VideosData ? VideosData : [];

  return (
    <>
      <Row>
        <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
          <Row>
            <ParentPost
              Posts={Parent}
              id={`daetails-Post/`}
              xs={12}
              md={8}
              lg={8}
              xl={8}
            />
            <Col xs={12} md={8} lg={4} xl={4} className="p-0">
              <div className="d-flex flex-column">
                <ChildCard smallCard={smallCard} xl={12} id={`tournament-news-details/`} />
              </div>
            </Col>
          </Row>
          <div className="mt-5 ">
            <ProbabiltyMatches urlRemoveLegues={urlRemoveLegues} urlRemoveClub={urlRemoveClub}  />
            <LeaguesNews />
          </div>
          <div className="col-xl-12 col-md-12  col-xs-12   p-4 ">
            <div className="d-flex flex-column mb-5">
              <div>
                <h3>الفديوهات</h3>
                {isLoading ? (
                  <p className="text-center">
                    <Spiner variant="dark" />
                    <h6 className="mt-2 text-dark">
                      {" "}
                      {`${t("Loading ....")}`}{" "}
                    </h6>
                  </p>
                ) : Videos.length == 0 ? (
                  "لايوجد فيديوهات "
                ) : (
                  <div className="row row-cols-1 row-cols-md-3 g-4 ">
                    {Videos?.map((card) => (
                      <Link to={`/details-video${card.id}`}>
                        <div key={card.id} className="col  p-1">
                          <div className="card h-100  rounded-max">
                            <div className="d-flex align-items-center justify-content-center position-relative p-2 rounded-2">
                              <img
                                style={{ height: "130px" }}
                                src={card?.image}
                                className="card-img-top w-100"
                                alt="..."
                              />
                              <div className="position-absolute">
                                <AiFillPlayCircle
                                  style={{ fontSize: "50px", fill: "red" }}
                                />
                              </div>
                              <div className="position-absolute top-0 start-0">
                                <p className="bg-dark text-white px-2 rounded-2 w-25 text-center m-3">
                                  3:12
                                </p>
                              </div>
                            </div>
                            <div className="card-body gap-2 p-2   d-flex flex-column align-items-start justify-content-center  rounded-bottom ">
                              <small class="text-muted">{card?.date}</small>
                              <h5 className="card-title">
                                {card?.title?.slice(0, 20)} ...
                              </h5>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <SideBar />
      </Row>
    </>
  );
}

export default LeguesHome;
