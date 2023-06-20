import React from "react";
import { Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import Spiner from "./Spiner";
import { apiClient, customLang } from "../utils/axios-util";
import { t } from "i18next";

const CustomLeagues = ({ close }) => {
  const { data: leaguesData } = useQuery({
    queryKey: ["all-Leagues"],
    queryFn: async () => {
      const res = await apiClient.get(`leagues-tournaments`);
      return res.data.data;
    },
  });

  const Leagues = leaguesData ? leaguesData : [];

  if (Leagues == 0) {
    return (
      <p className="text-center">
        <Spiner />
        <h6 className="mt-2 text-white"> {`${t("Loading ....")}`} </h6>
      </p>
    );
  }

  return (
    <Row className=" p-4">
      <div
        className="col-xl-12 col-md-6  col-xs-12  main p-0 "
        style={{ backgroundColor: "rgb(255 255 255)" }}
      >
        <Row>
          <div className="d-flex flex-column mb-5">
            <div
              className="  px-3 py-1 m-auto w-100 rounded-top border-bottom border-2 text-center text-center"
              style={{
                width: "fit-content",
                backgroundColor: "#0573f6",
                color: "white",
              }}
            >
              <h4 className="fs-4 "> الدوريات القارية </h4>
            </div>

            <div
              className=" p-3 shadow"
              style={{
                backgroundColor: "rgb(255 255 255)",
              }}
            >
              <div className="row row-cols-1 row-cols-md-4 g-4 ">
                {Leagues?.map((card) => (
                  <Link to={`/details-leagues${card.id}`} onClick={close}>
                    <div key={card.title} className="col ">
                      <div className=" h-100 ">
                        <div
                          style={{
                            // backgroundColor: "#333333 ",
                          }}
                          className="card-body   text-white d-flex align-items-center justify-content-start  p-0 "
                        >
                          <h6 className="card-title m-auto p-1 text-dark">
                            {card.tournament_name}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                <Link
                  className="w-100 p-0 mt-3"
                  to={"/Leagues"}
                  onClick={close}
                ></Link>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mb-5">
            <div
              className="  px-3 py-1 m-auto w-100 rounded-top border-bottom border-2 text-center"
              style={{
                width: "fit-content",
                backgroundColor: "#0573f6",
                color: "white",
              }}
            >
              <h4 className="fs-4"> الدوريات المحلية </h4>
            </div>
            <div
              className=" p-3 shadow"
              style={{
                backgroundColor: "rgb(255 255 255)",
              }}
            >
              <div className="row row-cols-1 row-cols-md-4 g-4 ">
                {Leagues?.map((card) => (
                  <Link to={`/details-leagues${card.id}`} onClick={close}>
                    <div key={card.title} className="col rounded-max">
                      <div className=" h-100 ">
                        <div
                          style={{
                            // backgroundColor: "#333333 ",
                          }}
                          className="card-body text-white d-flex align-items-center justify-content-start  p-0 "
                        >
                          <h6 className="card-title m-auto p-1 text-dark">
                            {card.tournament_name}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                <Link
                  className="w-100 p-0 mt-3"
                  to={"/Leagues"}
                  onClick={close}
                ></Link>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mb-5">
            <div
              className="  px-3 py-1 m-auto w-100 rounded-top border-bottom border-2 text-center"
              style={{
                width: "fit-content",
                backgroundColor: "#0573f6",
                color: "white",
              }}
            >
              <h4 className="fs-4"> الدوريات الاوربية </h4>
            </div>
            <div
              className=" p-3 shadow"
              style={{
                backgroundColor: "rgb(255 255 255)",
              }}
            >
              <div className="row row-cols-1 row-cols-md-4 g-4 ">
                {Leagues?.map((card) => (
                  <Link to={`/details-leagues${card.id}`} onClick={close}>
                    <div key={card.title} className="col rounded-max">
                      <div className=" h-100 ">
                        <div className="card-body  text-white d-flex align-items-center justify-content-start  p-0 "         style={{
                            // backgroundColor: "#333333 ",
                          }}>
                          <h6 className="card-title m-auto p-1 text-dark">
                            {card.tournament_name}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                <Link
                  className="w-100 p-0 mt-3"
                  to={"/Leagues"}
                  onClick={close}
                ></Link>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mb-5">
            <div
              className="  px-3 py-1 m-auto w-100 rounded-top border-bottom border-2 text-center"
              style={{
                width: "fit-content",
                backgroundColor: "#0573f6",
                color: "white",
              }}
            >
              <h4 className="fs-4"> الدوريات العربية </h4>
            </div>
            <div
              className=" p-3 shadow"
              style={{
                backgroundColor: "rgb(255 255 255)",
              }}
            >
              <div className="row row-cols-1 row-cols-md-4 g-4 ">
                {Leagues?.map((card) => (
                  <Link to={`/details-leagues${card.id}`} onClick={close}>
                    <div key={card.title} className="col rounded-max">
                      <div className=" h-100 ">
                        <div className="card-body  text-white d-flex align-items-center justify-content-start  p-0 "         style={{
                            // backgroundColor: "#333333 ",
                          }}>
                          <h6 className="card-title m-auto p-1 text-dark">
                            {card.tournament_name}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                <Link
                  className="w-100 p-0 mt-3"
                  to={"/Leagues"}
                  onClick={close}
                ></Link>
              </div>
            </div>
          </div>
        </Row>
      </div>
      {/* <SideBar /> */}
    </Row>
  );
};

export default CustomLeagues;
