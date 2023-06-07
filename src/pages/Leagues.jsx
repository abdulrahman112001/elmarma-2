import React from "react";
import { Row } from "react-bootstrap";
import { CgFileDocument } from "react-icons/cg";
import { useQuery } from "react-query";
import axios from "axios";
import SideBar from "../components/SideBar";
import spinner from "../assets/111813-rolling-footbll.gif";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Spiner from "../components/Spiner";
import { t } from "i18next";
import { apiClient , apiClientEn } from "../utils/axios-util";
import SwiperComp from "../components/SwiperComp";
import { useIsRTL } from "../hooks/useIsRTL";

const Leagues = ({showImg}) => {

  const isRTL = useIsRTL()

  const { data: leaguesData , isLoading } = useQuery({
    queryKey: ["all-Leagues"],
    queryFn: async () => {
      const res = await apiClient.get(
        `leagues-tournaments`
      );
      return res.data.data;
    },
  });
  const { data: leaguesDataEn , isLoadingEn } = useQuery({
    queryKey: ["all-LeaguesEN"],
    queryFn: async () => {
      const res = await apiClientEn.get(
        `https://v3.football.api-sports.io/leagues`
      );
      return res.data.response;
    },
  });
  const Leagues = !isRTL ?  leaguesDataEn || [] : leaguesData || []
  console.log("🚀 ~ file: Leagues.jsx:39 ~ Leagues ~ Leagues:", Leagues)


  // const Leagues = leaguesData ? leaguesData : [];


  return (
    <>
      {/* <SwiperComp /> */}

      <Row className=" p-4">
        <div className="col-xl-12 col-md-12  col-xs-12  main p-4 ">
          <Row>
            <div className="d-flex align-items-center justify-content-between border-bottom mb-5">
              <div className="d-flex align-items-center gap-1 ">
                <CgFileDocument
                  style={{ width: "24px", height: "24px", color: "#0573F6" }}
                />
                <h4 className="fs-4 my-3">الدوريات و البطولات</h4>
              </div>
            </div>
          </Row>
          {isLoading ? (
            <p className="text-center">
              <Spiner variant="dark" />
              <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
            </p>
          ) : Leagues?.length == 0 ? (
            "يوجد خطأ في عرض البطولات  "
          ) : (
            <Row>
              
                  <div>
                    {
                      !isRTL &&


                          <div className="row row-cols-1 row-cols-md-6 g-4 p-3">
                    {Leagues?.map((card) => (
                      <Link to={`/details-leagues${card.id}`}>
                        <div key={card.title} className="col rounded-max">
                          <div className="card h-100 rounded-max">
                            <div className="d-flex align-items-center justify-content-center">
                              <img
                                style={{ objectFit: "contain", height: "100px" }}
                                src={card?.tournament_image || card?.league?.logo }
                                className="card-img-top w-50 p-3"
                                alt="..."
                              />
                            </div>
                            <div className="card-body  bg-dark text-white d-flex align-items-center justify-content-start rounded-bottom p-0 ">
                              <h6 className="card-title m-auto p-1">
                                {card.tournament_name || card?.league?.name}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                           </div>
                    }
                  </div>

                  { isRTL && <>
                  
              <div className="d-flex flex-column mb-5">
                <div
                  className="  px-3 py-1 rounded-top border-bottom border-2"
                  style={{
                    width: "fit-content",
                    backgroundColor: "#F2F2F2",
                    boxShadow: " 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);",
                  }}
                >
                  <h4 className="fs-4"> الدوريات القارية </h4>
                </div>

                <div
                  className="rounded-bottom p-3 shadow"
                  style={{
                    backgroundColor: "#F2F2F2",
                  }}
                >
                  <div className="row row-cols-1 row-cols-md-6 g-4 p-3">
                    {Leagues?.slice(0, 13).map((card) => (
                      <Link to={`/details-leagues${card.id}`}>
                        <div key={card.title} className="col rounded-max">
                          <div className="card h-100 rounded-max">
                            <div className="d-flex align-items-center justify-content-center">
                              <img
                                style={{
                                  objectFit: "contain",
                                  height: "100px",
                                }}
                                src={
                                  card?.tournament_image || card?.league?.logo
                                }
                                className="card-img-top w-50 p-3"
                                alt="..."
                              />
                            </div>
                            <div className="card-body  bg-dark text-white d-flex align-items-center justify-content-start rounded-bottom p-0 ">
                              <h6 className="card-title m-auto p-1">
                                {card.tournament_name || card?.league?.name}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column mb-5">
                <div
                  className="  px-3 py-1 rounded-top border-bottom border-2"
                  style={{
                    width: "fit-content",
                    backgroundColor: "#F2F2F2",
                    boxShadow: " 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);",
                  }}
                >
                  <h4 className="fs-4"> الدوريات المحلية </h4>
                </div>
                <div
                  className="rounded-bottom p-3 shadow"
                  style={{
                    backgroundColor: "#F2F2F2",
                  }}
                >
                  <div className="row row-cols-1 row-cols-md-6 g-4 p-3">
                    {Leagues?.slice(13, 16).map((card) => (
                      <Link to={`/details-leagues${card.id}`}>
                        <div key={card.title} className="col rounded-max">
                          <div className="card h-100 rounded-max">
                            <div className="d-flex align-items-center justify-content-center">
                              <img
                                style={{
                                  objectFit: "contain",
                                  height: "100px",
                                }}
                                src={card.tournament_image}
                                className="card-img-top w-50 p-3"
                                alt="..."
                              />
                            </div>
                            <div className="card-body  bg-dark text-white d-flex align-items-center justify-content-start rounded-bottom p-0 ">
                              <h6 className="card-title m-auto p-1">
                                {card.tournament_name}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column mb-5">
                <div
                  className="  px-3 py-1 rounded-top border-bottom border-2"
                  style={{
                    width: "fit-content",
                    backgroundColor: "#F2F2F2",
                    boxShadow: " 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);",
                  }}
                >
                  <h4 className="fs-4"> الدوريات الاوربية </h4>
                </div>
                <div
                  className="rounded-bottom p-3 shadow"
                  style={{
                    backgroundColor: "#F2F2F2",
                  }}
                >
                  <div className="row row-cols-1 row-cols-md-6 g-4 p-3">
                    {Leagues?.slice(16, 29).map((card) => (
                      <Link to={`/details-leagues${card.id}`}>
                        <div key={card.title} className="col rounded-max">
                          <div className="card h-100 rounded-max">
                            <div className="d-flex align-items-center justify-content-center">
                              <img
                                style={{
                                  objectFit: "contain",
                                  height: "100px",
                                }}
                                src={card.tournament_image}
                                className="card-img-top w-50 p-3"
                                alt="..."
                              />
                            </div>
                            <div className="card-body  bg-dark text-white d-flex align-items-center justify-content-start rounded-bottom p-0 ">
                              <h6 className="card-title m-auto p-1">
                                {card.tournament_name}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column mb-5">
                <div
                  className="  px-3 py-1 rounded-top border-bottom border-2"
                  style={{
                    width: "fit-content",
                    backgroundColor: "#F2F2F2",
                    boxShadow: " 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);",
                  }}
                >
                  <h4 className="fs-4"> الدوريات العربية </h4>
                </div>
                <div
                  className="rounded-bottom p-3 shadow"
                  style={{
                    backgroundColor: "#F2F2F2",
                  }}
                >
                  <div className="row row-cols-1 row-cols-md-6 g-4 p-3">
                    {Leagues?.slice(29, 36).map((card) => (
                      <Link to={`/details-leagues${card.id}`}>
                        <div key={card.title} className="col rounded-max">
                          <div className="card h-100 rounded-max">
                            <div className="d-flex align-items-center justify-content-center">
                              <img
                                style={{
                                  objectFit: "contain",
                                  height: "100px",
                                }}
                                src={card.tournament_image}
                                className="card-img-top w-50 p-3"
                                alt="..."
                              />
                            </div>
                            <div className="card-body  bg-dark text-white d-flex align-items-center justify-content-start rounded-bottom p-0 ">
                              <h6 className="card-title m-auto p-1">
                                {card.tournament_name}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
                  </> }

            </Row>
          )}
        </div>
        {/* <SideBar /> */}
      </Row>
    </>
  )
};

export default Leagues;
