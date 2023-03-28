import React from "react";

function MatchComp({ MatchesCards }) {
  // const MatchesCards = MatchesCards ? MatchesCards : []

  return (
    <>
      <div className="col-xl-8 col-md-6  col-xs-12 bg-white p-5">
        <h4 className=" fw-bold p-3 " style={{ width: " fit-content" }}>
          المباريات
        </h4>
        {MatchesCards.map((match) => (
          <>
            <div className="bg-light shadow text-dark p-3 rounded-3 mt-2">
              <div className="d-flex justify-content-between align-items-center ">
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <p className="fs-5 fw-bold">{match?.first_team}</p>
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
                  <h6>{match?.tour}</h6>
                  <h6>{match?.score}</h6>


                  <div className="d-flex  justify-content-between align-items-center w-100 gap-5">
                    {/* <div className="d-flex  justify-content-center align-items-center gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.75 3.4375H1.25C1.0625 3.4375 0.9375 3.5625 0.9375 3.75V5.3125V8.75V11.25V14.6875V16.25C0.9375 16.4375 1.0625 16.5625 1.25 16.5625H18.75C18.9375 16.5625 19.0625 16.4375 19.0625 16.25V14.6875V11.25V8.75V5.3125V3.75C19.0625 3.5625 18.9375 3.4375 18.75 3.4375ZM18.4375 8.4375H15.625C14.75 8.4375 14.0625 9.125 14.0625 10C14.0625 10.875 14.75 11.5625 15.625 11.5625H18.4375V14.375H17.8125C15.4063 14.375 13.4375 12.4062 13.4375 10C13.4375 7.59375 15.4063 5.625 17.8125 5.625H18.4375V8.4375ZM14.6875 10C14.6875 9.46875 15.0937 9.0625 15.625 9.0625V10.9375C15.0937 10.9375 14.6875 10.5313 14.6875 10ZM16.25 9.0625H18.4375V10.9375H16.25V9.0625ZM10 11.5625C9.125 11.5625 8.4375 10.875 8.4375 10C8.4375 9.125 9.125 8.4375 10 8.4375C10.875 8.4375 11.5625 9.125 11.5625 10C11.5625 10.875 10.875 11.5625 10 11.5625ZM5.3125 10C5.3125 10.5313 4.90625 10.9375 4.375 10.9375V9.0625C4.90625 9.0625 5.3125 9.46875 5.3125 10ZM3.75 10.9375H1.5625V9.0625H3.75V10.9375ZM1.5625 11.5625H4.375C5.25 11.5625 5.9375 10.875 5.9375 10C5.9375 9.125 5.25 8.4375 4.375 8.4375H1.5625V5.625H2.1875C4.59375 5.625 6.5625 7.59375 6.5625 10C6.5625 12.4062 4.59375 14.375 2.1875 14.375H1.5625V11.5625ZM1.5625 15H2.1875C4.9375 15 7.1875 12.75 7.1875 10C7.1875 7.25 4.9375 5 2.1875 5H1.5625V4.0625H9.6875V7.84375C8.625 8 7.8125 8.90625 7.8125 10C7.8125 11.0938 8.625 12 9.6875 12.1563V15.9375H1.5625V15ZM10.3125 15.9375V12.1563C11.375 12 12.1875 11.0938 12.1875 10C12.1875 8.90625 11.375 8 10.3125 7.84375V4.0625H18.4375V5H17.8125C15.0625 5 12.8125 7.25 12.8125 10C12.8125 12.75 15.0625 15 17.8125 15H18.4375V15.9375H10.3125Z"
                          fill="#8A8A8A"
                        />
                      </svg>
                      <p className="text-muted p-0 m-0"> برج العرب </p>{" "}
                    </div> */}
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

                <div className="d-flex justify-content-center align-items-center gap-3">
                  <p className="fs-5 fw-bold">{match?.second_team}</p>
                  <img
                    className="w-25"
                    src={match?.second_image}
                    alt=""
                    width={"70px"}
                  />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default MatchComp;
