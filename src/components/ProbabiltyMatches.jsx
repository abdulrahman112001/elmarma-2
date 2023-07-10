import axios from "axios";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { apiClient, url } from "../utils/axios-util";
import { t } from "i18next";
import Spiner from "./Spiner";
import { Link } from "react-router-dom";

function ProbabiltyMatches({urlRemoveLegues ,  urlRemoveClub}) {
  var str = window.location.href;
  var wordToRemove = `${url}${urlRemoveLegues ? urlRemoveLegues : urlRemoveClub}`;
  var idLoca = str.split(new RegExp('\\b' + wordToRemove + '\\b')).join('');
  const { data: stastics, isLoading } = useQuery({
    queryKey: [`stastics/${idLoca}`],
    queryFn: async () => {
      const res = await apiClient.get(
        `statistics-leagues-tournaments/${idLoca}`
      );
      return res.data.data;
    },
  });

  const stasticsData = stastics ? stastics : [];

  return (
    <>
      {isLoading ? (
        <p className="text-center">
          <Spiner variant="dark" />
          <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
        </p>
      ) : stasticsData.length == 0 ? (
        `${t("sorry data not found")}`
      ) : (
        <>
          <div
            className="px-3 py-1 rounded-top border-bottom border-2 mt-5 LeguesHead"
            style={{
              width: "fit-content",
              backgroundColor: "#F2F2F2",
              boxShadow: " 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);",
            }}
          >
            <h4 className="fs-4 rounded-top "> الاحصائيات </h4>
          </div>

          <div className="p-2 propabiltyMain" style={{ background: "#EDEDED" }}>
            {stasticsData.map((probabilty) => (
              <Row className="m-2 gap-2" >
                <Col sm={12} xl={5} className="bg-white mt-3 p-1 rounded-3 probaplity">
                  <div className="d-flex align-items-center justify-content-between ">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.33398 5.71431C1.33398 4.27765 1.33398 3.55931 1.72451 3.113C2.11503 2.66669 2.74357 2.66669 4.00065 2.66669H12.0006C13.2577 2.66669 13.8862 2.66669 14.2768 3.113C14.6673 3.55931 14.6673 4.27765 14.6673 5.71431V10.2858C14.6673 11.7224 14.6673 12.4408 14.2768 12.887C13.8862 13.3334 13.2577 13.3334 12.0006 13.3334H4.00065C2.74357 13.3334 2.11503 13.3334 1.72451 12.887C1.33398 12.4408 1.33398 11.7224 1.33398 10.2858V5.71431Z"
                            stroke="#1E1E1E"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.99935 9.33335C8.73573 9.33335 9.33268 8.7364 9.33268 8.00002C9.33268 7.26364 8.73573 6.66669 7.99935 6.66669C7.26297 6.66669 6.66602 7.26364 6.66602 8.00002C6.66602 8.7364 7.26297 9.33335 7.99935 9.33335Z"
                            stroke="#1E1E1E"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 6.66667V3.33334M8 9.33334V12.6667"
                            stroke="#1E1E1E"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.6673 6H13.0007C12.6325 6 12.334 6.29848 12.334 6.66667V9.33333C12.334 9.70153 12.6325 10 13.0007 10H14.6673"
                            stroke="#1E1E1E"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.33398 6H3.00065C3.36884 6 3.66732 6.29848 3.66732 6.66667V9.33333C3.66732 9.70153 3.36884 10 3.00065 10H1.33398"
                            stroke="#1E1E1E"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <h5> {t("Matches")} </h5>
                      </div>
                      {/* <p>
                        المباريات المتبقية : 32 مباراة 
                        </p> */}
                    </div>
                    <h1 style={{ color: "#0573F6" }}>
                      {probabilty.count_matches}
                    </h1>
                  </div>
                </Col>
                <Col sm={12} xl={5} className="bg-white mt-3 p-1 rounded-3 probaplity">
                  <div className="d-flex align-items-center justify-content-between ">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.33398 5.71431C1.33398 4.27765 1.33398 3.55931 1.72451 3.113C2.11503 2.66669 2.74357 2.66669 4.00065 2.66669H12.0006C13.2577 2.66669 13.8862 2.66669 14.2768 3.113C14.6673 3.55931 14.6673 4.27765 14.6673 5.71431V10.2858C14.6673 11.7224 14.6673 12.4408 14.2768 12.887C13.8862 13.3334 13.2577 13.3334 12.0006 13.3334H4.00065C2.74357 13.3334 2.11503 13.3334 1.72451 12.887C1.33398 12.4408 1.33398 11.7224 1.33398 10.2858V5.71431Z"
                            stroke="#1E1E1E"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.99935 9.33335C8.73573 9.33335 9.33268 8.7364 9.33268 8.00002C9.33268 7.26364 8.73573 6.66669 7.99935 6.66669C7.26297 6.66669 6.66602 7.26364 6.66602 8.00002C6.66602 8.7364 7.26297 9.33335 7.99935 9.33335Z"
                            stroke="#1E1E1E"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 6.66667V3.33334M8 9.33334V12.6667"
                            stroke="#1E1E1E"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.6673 6H13.0007C12.6325 6 12.334 6.29848 12.334 6.66667V9.33333C12.334 9.70153 12.6325 10 13.0007 10H14.6673"
                            stroke="#1E1E1E"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.33398 6H3.00065C3.36884 6 3.66732 6.29848 3.66732 6.66667V9.33333C3.66732 9.70153 3.36884 10 3.00065 10H1.33398"
                            stroke="#1E1E1E"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <h5> {t("goals scored")} </h5>
                      </div>
                      {/* <p>
                        المباريات المتبقية : 32 مباراة 
                        </p> */}
                    </div>
                    <h1 style={{ color: "#0573F6" }}>
                      {probabilty.goals_scored}
                    </h1>
                  </div>
                </Col>
                <Col sm={12} xl={5} className="bg-white mt-3 p-1 rounded-3 probaplity">
                  <div className="d-flex align-items-center justify-content-between ">
                    <div className="w-100">
                      <div className="d-flex gap-2 align-items-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.33398 5.71431C1.33398 4.27765 1.33398 3.55931 1.72451 3.113C2.11503 2.66669 2.74357 2.66669 4.00065 2.66669H12.0006C13.2577 2.66669 13.8862 2.66669 14.2768 3.113C14.6673 3.55931 14.6673 4.27765 14.6673 5.71431V10.2858C14.6673 11.7224 14.6673 12.4408 14.2768 12.887C13.8862 13.3334 13.2577 13.3334 12.0006 13.3334H4.00065C2.74357 13.3334 2.11503 13.3334 1.72451 12.887C1.33398 12.4408 1.33398 11.7224 1.33398 10.2858V5.71431Z"
                            stroke="#1E1E1E"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.99935 9.33335C8.73573 9.33335 9.33268 8.7364 9.33268 8.00002C9.33268 7.26364 8.73573 6.66669 7.99935 6.66669C7.26297 6.66669 6.66602 7.26364 6.66602 8.00002C6.66602 8.7364 7.26297 9.33335 7.99935 9.33335Z"
                            stroke="#1E1E1E"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 6.66667V3.33334M8 9.33334V12.6667"
                            stroke="#1E1E1E"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.6673 6H13.0007C12.6325 6 12.334 6.29848 12.334 6.66667V9.33333C12.334 9.70153 12.6325 10 13.0007 10H14.6673"
                            stroke="#1E1E1E"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.33398 6H3.00065C3.36884 6 3.66732 6.29848 3.66732 6.66667V9.33333C3.66732 9.70153 3.36884 10 3.00065 10H1.33398"
                            stroke="#1E1E1E"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <h5> {t("maker")} </h5>
                      </div>

                      <div className="d-flex justify-content-between px-2">
                        <div className="d-flex align-items-center gap-4">
                          {probabilty.first_image && (
                            <p>
                              <Link
                                to={`/details-player${probabilty.player_id}`}
                              >
                                <img
                                  className="score-person"
                                  src={probabilty.first_image}
                                  alt=""
                                />
                              </Link>
                            </p>
                          )}
                          <p className="d-flex flex-column gap-2">
                            {probabilty.name_scorer && (
                              <small>{probabilty.name_scorer}</small>
                            )}
                            <div>
                              {probabilty.first_team_image && (
                                <img
                                  className="team_image"
                                  src={probabilty.first_team_image}
                                  alt=""
                                />
                              )}
                              {probabilty.first_team_name && (
                                <small>{probabilty.first_team_name}</small>
                              )}
                            </div>
                          </p>
                        </div>
                        <h1 style={{ color: "#0573F6", fontSize: "56px" }}>
                          {probabilty.first_scorer}
                        </h1>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col sm={12} xl={5} className="bg-white mt-3 p-1 rounded-3 probaplity">
                  <div className="d-flex align-items-center justify-content-between ">
                    <div className="w-100">
                      <div className="d-flex gap-2 align-items-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.33398 5.71431C1.33398 4.27765 1.33398 3.55931 1.72451 3.113C2.11503 2.66669 2.74357 2.66669 4.00065 2.66669H12.0006C13.2577 2.66669 13.8862 2.66669 14.2768 3.113C14.6673 3.55931 14.6673 4.27765 14.6673 5.71431V10.2858C14.6673 11.7224 14.6673 12.4408 14.2768 12.887C13.8862 13.3334 13.2577 13.3334 12.0006 13.3334H4.00065C2.74357 13.3334 2.11503 13.3334 1.72451 12.887C1.33398 12.4408 1.33398 11.7224 1.33398 10.2858V5.71431Z"
                            stroke="#1E1E1E"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.99935 9.33335C8.73573 9.33335 9.33268 8.7364 9.33268 8.00002C9.33268 7.26364 8.73573 6.66669 7.99935 6.66669C7.26297 6.66669 6.66602 7.26364 6.66602 8.00002C6.66602 8.7364 7.26297 9.33335 7.99935 9.33335Z"
                            stroke="#1E1E1E"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 6.66667V3.33334M8 9.33334V12.6667"
                            stroke="#1E1E1E"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.6673 6H13.0007C12.6325 6 12.334 6.29848 12.334 6.66667V9.33333C12.334 9.70153 12.6325 10 13.0007 10H14.6673"
                            stroke="#1E1E1E"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.33398 6H3.00065C3.36884 6 3.66732 6.29848 3.66732 6.66667V9.33333C3.66732 9.70153 3.36884 10 3.00065 10H1.33398"
                            stroke="#1E1E1E"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <h5> {t("Goal maker")} </h5>
                      </div>

                      <div className="d-flex justify-content-between px-2">
                        <div className="d-flex align-items-center gap-4">
                          {
                            probabilty.second_image && 
                          <p>
                            <img
                              className="score-person"
                              src={probabilty.second_image}
                              alt=""
                            />
                          </p>
                          }

                          <p className="d-flex flex-column gap-2">
                            {
                              probabilty.second_name_scorer &&
                            <small>{probabilty.second_name_scorer}</small>
                            }
                            <div>
                              {
                                probabilty.second_image_team && 
                              <img
                                className="team_image"
                                src={probabilty.second_image_team}
                                alt=""
                              />
                              }
                              {
                                probabilty.second_team_name && 
                              <small>{probabilty.second_team_name}</small>
                              }
                            </div>
                          </p>
                        </div>
                        <h1 style={{ color: "#0573F6", fontSize: "56px" }}>
                          {probabilty.second_score}
                        </h1>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default ProbabiltyMatches;
