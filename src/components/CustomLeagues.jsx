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
      const res = await apiClient.get(
        `leagues-tournaments`
      );
      return res.data.data;
    },
  });

  const Leagues = leaguesData ? leaguesData : [];

  if (Leagues == 0) {
    return (
      <p className="text-center">
        <Spiner/>
        <h6 className="mt-2 text-white"> {`${t("Loading ....")}`} </h6>
      </p>
    );
  }

  return (
    <Row className=" p-4">
      <div className="col-xl-8 col-md-6  col-xs-12  main ">
        <Row>
          <div className="d-flex flex-column mb-5">
            <div
              className="  px-3 py-1 m-auto w-100 rounded-top border-bottom border-2"
              style={{
                width: "fit-content",
                backgroundColor: "#F2F2F2",
                boxShadow: " 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);",
              }}
            >
              <h4 className="fs-4 "> الدوريات القارية </h4>
            </div>

            <div
              className="rounded-bottom p-3 shadow"
              style={{
                backgroundColor: "#F2F2F2",
              }}
            >
              <div className="row row-cols-1 row-cols-md-4 g-4 ">
                {Leagues?.slice(0, 3).map((card) => (
                  <Link to={`/details-leagues${card.id}`} onClick={close}>
                    <div key={card.title} className="col rounded-max">
                      <div className="card h-100 rounded-max">
                        <div
                          style={{
                            backgroundColor: "#333333 ",
                          }}
                          className="card-body   text-white d-flex align-items-center justify-content-start rounded-bottom p-0 "
                        >
                          <h6 className="card-title m-auto p-1">
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
                >
                  <button className="custom-btn w-100"> عرض المزيد... </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mb-5">
            <div
              className="  px-3 py-1 m-auto w-100 rounded-top border-bottom border-2"
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
              <div className="row row-cols-1 row-cols-md-4 g-4 ">
                {Leagues?.slice(13, 16).map((card) => (
                  <Link to={`/details-leagues${card.id}`} onClick={close}>
                    <div key={card.title} className="col rounded-max">
                      <div className="card h-100 rounded-max">
                        <div
                          style={{
                            backgroundColor: "#333333 ",
                          }}
                          className="card-body text-white d-flex align-items-center justify-content-start rounded-bottom p-0 "
                        >
                          <h6 className="card-title m-auto p-1">
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
                >
                  <button className="custom-btn w-100"> عرض المزيد... </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mb-5">
            <div
              className="  px-3 py-1 m-auto w-100 rounded-top border-bottom border-2"
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
              <div className="row row-cols-1 row-cols-md-4 g-4 ">
                {Leagues?.slice(16, 19).map((card) => (
                  <Link to={`/details-leagues${card.id}`} onClick={close}>
                    <div key={card.title} className="col rounded-max">
                      <div className="card h-100 rounded-max">
                        <div className="card-body  bg-dark text-white d-flex align-items-center justify-content-start rounded-bottom p-0 ">
                          <h6 className="card-title m-auto p-1">
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
                >
                  <button className="custom-btn w-100"> عرض المزيد... </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mb-5">
            <div
              className="  px-3 py-1 m-auto w-100 rounded-top border-bottom border-2"
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
              <div className="row row-cols-1 row-cols-md-4 g-4 ">
                {Leagues?.slice(29, 36).map((card) => (
                  <Link to={`/details-leagues${card.id}`} onClick={close}>
                    <div key={card.title} className="col rounded-max">
                      <div className="card h-100 rounded-max">
                        <div className="card-body  bg-dark text-white d-flex align-items-center justify-content-start rounded-bottom p-0 ">
                          <h6 className="card-title m-auto p-1">
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
                >
                  <button className="custom-btn w-100"> عرض المزيد... </button>
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </div>
      <SideBar />
    </Row>
  );
};

export default CustomLeagues;
