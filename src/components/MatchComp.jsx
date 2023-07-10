import React from "react";
import Spiner from "./Spiner";
import { t } from "i18next";
import { Link, useNavigate } from "react-router-dom";

function MatchComp({ MatchesCards , loadingMatch }) {
  // const MatchesCards = MatchesCards ? MatchesCards : []
  const navigate = useNavigate()

  return (
    <>
    {
    loadingMatch  ? (
                <p className="text-center">
                  <Spiner variant="dark" />
                  <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
                </p>
              ) : MatchesCards.length == 0  ? "يوجد خطأ في عرض البطولات  " : 

              <div className="col-xl-12 col-md-6 matches col-xs-12 bg-white ">
                <h4 className=" fw-bold p-3 " style={{ width: " fit-content" }}>
                  المباريات
                </h4>
                
                {MatchesCards.map((match) => (
                  <>
                    <div className="bg-light shadow text-dark p-3 rounded-3 mt-2">
                      <div className="d-flex justify-content-between align-items-center ">
                        <div className="d-flex flex-column justify-content-center align-items-center gap-3 matches-custom">
                          <p className="fs-5 fw-bold text-center">{match?.first_team}</p>
                          <img
                            className="w-25"
                            src={match?.first_image}
                            alt=""
                            width={"70px"}
                          />
                        </div>

                        <div className="d-flex flex-column  justify-content-center align-items-center gap-4">
                          <div
                            className="text-center py-1 px-3 rounded-pill text-white fw-bold "
                            style={{ backgroundColor: " #615F59" }}
                          >
                            {match?.match_status}
                          </div>
                          <h6 className="text-center">{match?.tour}</h6>
                          <h6>{match?.score}</h6>
                          <div className="d-flex gap-5 align-items-center">

                          <h6>{match?.first_result}</h6>
                          <p> - </p>
                          <h6>{match?.second_result}</h6>
                          </div>
                          <div>
                       
                            <button className="btn border px-4 bg-dark text-white" onClick={()=>navigate(`/details-match${match.id}`)}>
                              تفاصيل
                            </button>
                           
                          </div>



                          <div className="d-flex  justify-content-between align-items-center w-100 gap-5">
                            <div className="d-flex  justify-content-center align-items-center gap-2">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.667 1.5H12.5V0.5C12.5 0.2235 12.2765 0 12 0C11.7235 0 11.5 0.2235 11.5 0.5V1.5H8.5V0.5C8.5 0.2235 8.276 0 8 0C7.724 0 7.5 0.2235 7.5 0.5V1.5H4.5V0.5C4.5 0.2235 4.276 0 4 0C3.724 0 3.5 0.2235 3.5 0.5V1.5H1.3335C0.597 1.5 0 2.0965 0 2.833V14.6665C0 15.403 0.597 16 1.3335 16H14.667C15.4035 16 16 15.403 16 14.6665V2.833C16 2.0965 15.4035 1.5 14.667 1.5ZM15 14.6665C15 14.8505 14.8505 15 14.667 15H1.3335C1.1495 15 1 14.8505 1 14.6665V2.833C1 2.6495 1.1495 2.5 1.3335 2.5H3.5V3.5C3.5 3.7765 3.724 4 4 4C4.276 4 4.5 3.7765 4.5 3.5V2.5H7.5V3.5C7.5 3.7765 7.724 4 8 4C8.276 4 8.5 3.7765 8.5 3.5V2.5H11.5V3.5C11.5 3.7765 11.7235 4 12 4C12.2765 4 12.5 3.7765 12.5 3.5V2.5H14.667C14.8505 2.5 15 2.6495 15 2.833V14.6665Z"
                                  fill="#8A8A8A"
                                />
                                <path d="M5.5 6H3.5V7.5H5.5V6Z" fill="#8A8A8A" />
                                <path d="M5.5 8.5H3.5V10H5.5V8.5Z" fill="#8A8A8A" />
                                <path d="M5.5 11H3.5V12.5H5.5V11Z" fill="#8A8A8A" />
                                <path d="M9 11H7V12.5H9V11Z" fill="#8A8A8A" />
                                <path d="M9 8.5H7V10H9V8.5Z" fill="#8A8A8A" />
                                <path d="M9 6H7V7.5H9V6Z" fill="#8A8A8A" />
                                <path d="M12.5 11H10.5V12.5H12.5V11Z" fill="#8A8A8A" />
                                <path d="M12.5 8.5H10.5V10H12.5V8.5Z" fill="#8A8A8A" />
                                <path d="M12.5 6H10.5V7.5H12.5V6Z" fill="#8A8A8A" />
                              </svg>
                              <p className="text-muted p-0 m-0"> {match?.date}</p>{" "}
                            </div>
                            <div className="d-flex  justify-content-center align-items-center gap-2">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 0 11.3869 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18ZM9 16.2C10.9096 16.2 12.7409 15.4414 14.0912 14.0912C15.4414 12.7409 16.2 10.9096 16.2 9C16.2 7.09044 15.4414 5.25909 14.0912 3.90883C12.7409 2.55857 10.9096 1.8 9 1.8C7.09044 1.8 5.25909 2.55857 3.90883 3.90883C2.55857 5.25909 1.8 7.09044 1.8 9C1.8 10.9096 2.55857 12.7409 3.90883 14.0912C5.25909 15.4414 7.09044 16.2 9 16.2ZM8.1 9.369V3.6H9.9V8.631L13.455 12.186L12.186 13.455L8.1 9.369Z"
                                  fill="#8A8A8A"
                                />
                              </svg>
                              <p className="text-muted p-0 m-0"> {match?.game_time}</p>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center flex-column align-items-center gap-3 matches-custom">
                          <p className="fs-5 fw-bold text-center">{match?.second_team}</p>
                          <img
                            className="w-25"
                            src={match?.second_image}
                            alt=""
                         
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
}
    </>
  );
}

export default MatchComp;
