import React from "react";
import { Card, Col, Row, Tab, Table, Tabs } from "react-bootstrap";
import { CgFileDocument } from "react-icons/cg";
import { useQuery } from "react-query";
import { useState } from "react";
import Select from "react-select";

import { t } from "i18next";
import SideBar from "../components/SideBar";
import Spiner from "../components/Spiner";
import { apiClient } from "../utils/axios-util";
import TableTeam from "../components/Table";
import { AiOutlineArrowLeft } from "react-icons/ai";
import SwiperComp from "../components/SwiperComp";
import ParentPost from "../components/ParentPost";
import ChildCard from "../components/ChildPosts";
import { Link } from "react-router-dom";

const LatestTransfers = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const { data: lastTransfer, isLoading } = useQuery({
    queryKey: [`latest-transfers-all-leagues`],
    queryFn: async () => {
      const res = await apiClient.get(`latest-transfers-all-leagues`);
      return res.data.data;
    },
  });

  const { data: lastTransferData, isLoading: loadingTransferData } = useQuery({
    queryKey: [`latest-transfers-data${selectedOption?.value}`],
    queryFn: async () => {
      const res = await apiClient.get(
        `latest-transfers/${selectedOption?.value}`
      );
      return res.data.data;
    },
  });

  const { data: lastTransferNews, isLoading: loadingTransferNews } = useQuery({
    queryKey: [`latest-transfers-news${selectedOption?.value}`],
    queryFn: async () => {
      const res = await apiClient.get(
        `latest-transfer/home-top?id=${selectedOption?.value}`
      );
      return res.data.data;
    },
  });
  const lastTransferDateNews = lastTransferNews ? lastTransferNews : [];


  const { data: lastTransferBottom, isLoading: loadingTransferNewsBottom } =
    useQuery({
      queryKey: [`latest-transfers-news-bottom${selectedOption?.value}`],
      queryFn: async () => {
        const res = await apiClient.get(
          `latest-transfer/home-bottom?id=${selectedOption?.value}`
        );
        return res.data.data;
      },
    });
  const lastTransferDataBottom = lastTransferBottom ? lastTransferBottom : [];

  const { data: lastTransferBagesData, isLoading: loadingTransferNewsBages } =
    useQuery({
      queryKey: [`latest-transfers-news-Data${selectedOption?.value}`],
      queryFn: async () => {
        const res = await apiClient.get(
          `latest-transfer/latest-news?id=${selectedOption?.value}`
        );
        return res.data.data;
      },
    });
  const lastTransferDataNews = lastTransferBagesData
    ? lastTransferBagesData
    : [];

    const { data: lastTransferIMportantTopic, isLoading: loadingTransferTopics } =
    useQuery({
      queryKey: [`latest-transfers-topics${selectedOption?.value}`],
      queryFn: async () => {
        const res = await apiClient.get(
          `latest-transfer/important-topics?id=${selectedOption?.value}`
        );
        return res.data.data;
      },
    });
  const lastTransferTopics = lastTransferIMportantTopic ? lastTransferIMportantTopic : [];



  const transferOption = lastTransfer?.map((item) => ({
    label: item.tournament_name,
    value: item.id,
  }));

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const [isRtl, setIsRtl] = useState(false);

  return (
    <>

      <Row className=" p-4">
        <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
      {loadingTransferData ? (
                  <p className="text-center">
                    <Spiner variant="dark" />
                    <h6 className="mt-2 text-dark">
                      {" "}
                      {`${t("Loading ....")}`}{" "}
                    </h6>
                  </p>
                ) : 0 ? (
                  `${t("sorry data not found")}`
                ) : lastTransferData.length == 0 ? (
                  `${t("sorry data not found")}`
                ) : (
                  <>
          <Row>
            <div className="d-flex align-items-center justify-content-between border-bottom mb-5">
              <div className="d-flex align-items-center gap-1 ">
                <CgFileDocument
                  style={{ width: "24px", height: "24px", color: "#0573F6" }}
                />
                <h4 className="fs-4 my-3"> {t("Transfers")}</h4>
              </div>
              <Select
                className="w-25"
                options={transferOption}
                isRtl={isRtl}
                value={selectedOption}
                onChange={handleChange}
              />
            </div>
          </Row>

          <Tabs
            id="controlled-tab-example"
            // activeKey={key}
            // onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="home" title="الرئيسية">
              <>
                <Row className="">
                  <ParentPost
                    Posts={[lastTransferDateNews[0]]}
                    id={`details-post-out`}
                    key={`posts`}
                    xs={12}
                    md={8}
                    lg={5}
                    xl={6}
                    bigPos="bigPos"
                  />
                  <Col xs={12} md={8} lg={3} xl={6} className="p-0">
                    <div className="row">
                      <ChildCard
                        smallCard={lastTransferDateNews.slice(1, 5)}
                        id={`details-post-out`} xl={6}
                      />
                    </div>
                  </Col>
                </Row>
           
                  <>
                    <div className="d-flex align-items-center gap-1 ">
                      <CgFileDocument
                        style={{
                          width: "24px",
                          height: "24px",
                          color: "#0573F6",
                        }}
                      />
                      <h4 className="fs-4 my-3"> {t("Latest Transfers")}</h4>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 d-none d-sm-block mt-2 ">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>التاريخ</th>
                            <th>اللاعب </th>
                            <th>انتقل من </th>
                            <th>انتقل الى</th>
                            <th>تفاصيل الصفقة</th>
                          </tr>
                        </thead>
                        <tbody>
                          {lastTransferData?.map((row) => (
                            <tr>
                              <td> {row?.date}</td>
                              <td>
                                <img
                                  src={row?.player_image}
                                  style={{ width: "20px" }}
                                  alt=""
                                />
                                <small className="ms-2">
                                  {row?.player_name}
                                </small>
                              </td>
                              <td>
                                <img
                                  src={row?.image_team_from}
                                  style={{ width: "20px" }}
                                  alt=""
                                />
                                <small className="ms-1">
                                  {row?.transfare_from}
                                </small>
                              </td>
                              <td>
                                <img
                                  src={row?.image_team_to}
                                  style={{ width: "20px" }}
                                  alt=""
                                />
                                <small className="ms-2">
                                  {row?.transfare_to}
                                </small>
                              </td>
                              <td>{row.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 d-sm-none  ">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>التاريخ</th>
                            <th>اللاعب </th>
                            <th>انتقل </th>
                            {/* <th>انتقل الى</th> */}
                            <th>تفاصيل </th>
                          </tr>
                        </thead>
                        <tbody>
                          {lastTransferData?.map((row) => (
                            <tr>
                              <td> {row?.date}</td>
                              <td>
                                <img
                                  src={row?.player_image}
                                  style={{ width: "20px" }}
                                  alt=""
                                />
                                <small className="ms-2">
                                  {row?.player_name}
                                </small>
                              </td>
                              <td className="d-flex">
                                <div>
                                  <img
                                    src={row?.image_team_from}
                                    style={{ width: "20px" }}
                                    alt=""
                                  />
                                  {/* <small className="ms-1">{row?.transfare_from}</small> */}
                                </div>
                                <span>
                                  <AiOutlineArrowLeft />
                                </span>

                                <div>
                                  <img
                                    src={row?.image_team_to}
                                    style={{ width: "20px" }}
                                    alt=""
                                  />
                                  {/* <small className="ms-2">{row?.transfare_to}</small> */}
                                </div>
                              </td>

                              <td>{row.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </>
                
                <div className="row">
                  <div className="d-flex align-items-center gap-1 ">
                    <CgFileDocument
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#0573F6",
                      }}
                    />
                    <h4 className="fs-4 my-3"> {t("News")}</h4>
                  </div>
                  {lastTransferDataBottom.map((child) => (
                    <Col xs={12} md={4} lg={3} xl={3} className="px-1">
                      <Card>
                        <Link
                          to={`/details-post-out${child.id}`}
                          className="card-custom-size "
                        >
                          <Card.Img
                            variant="top"
                            src={child?.image}
                            style={{ height: "180px" }}
                            alt="..."
                          />
                          <Card className="text-center text-white p-1 w-100 d-flex flex-column gap-1 align-items-start justify-content-end bg-dark rounded-0">
               
                            <Card.Title className="fs-6   ">
                              {child?.title?.slice(0, 20)}
                            </Card.Title>
                            <div
                              className="col-md-"
                              style={{ border: "0", background: "transparent" }}
                            >
                              <small className="text-white text-center">
                                {/* <svg viewBox="0 0 20 20"><use xlink:href="#time"></use></svg> */}
                                {child?.date}
                              </small>
                              <small className="text-white text-center">
                                {/* <svg viewBox="0 0 20 20"><use xlink:href="#time"></use></svg> */}
                              </small>
                            </div>
                          </Card>
                        </Link>
                      </Card>
                    </Col>
                  ))}
                </div>
              </>
            </Tab>
            <Tab eventKey="profile" title="الأخبار">
              <div className="row">
                {lastTransferDataNews.map((child) => (
                  <Col xs={12} md={4} lg={3} xl={3} className="px-1">
                    <Card>
                      <Link
                        to={`/details-post-out${child.id}`}
                        className="card-custom-size "
                      >
                        <Card.Img
                          variant="top"
                          src={child?.image}
                          style={{ height: "180px" }}
                          alt="..."
                        />
                        <Card className="text-center text-white p-1 w-100 d-flex flex-column gap-1 align-items-start justify-content-end bg-dark rounded-0">
                          <Card.Title className="fs-6   ">
                            {child?.title?.slice(0, 20)}
                          </Card.Title>
                          <div
                            className="col-md-"
                            style={{ border: "0", background: "transparent" }}
                          >
                            <small className="text-white text-center">
                              {child?.date}
                            </small>
                            <small className="text-white text-center"></small>
                          </div>
                        </Card>
                      </Link>
                    </Card>
                  </Col>
                ))}
              </div>
            </Tab>
            <Tab eventKey="Matches" title="اخر الانتقالات">
              {loadingTransferData ? (
                <p className="text-center">
                  <Spiner variant="dark" />
                  <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
                </p>
              ) : 0 ? (
                `${t("sorry data not found")}`
              ) : lastTransferData.length == 0 ? (
                `${t("sorry data not found")}`
              ) : (
                <>
                  <div className="row row-cols-1 row-cols-md-3 g-4 d-none d-sm-block mt-2 ">
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>التاريخ</th>
                          <th>اللاعب </th>
                          <th>انتقل من </th>
                          <th>انتقل الى</th>
                          <th>تفاصيل الصفقة</th>
                        </tr>
                      </thead>
                      <tbody>
                        {lastTransferData?.map((row) => (
                          <tr>
                            <td> {row?.date}</td>
                            <td>
                              <img
                                src={row?.player_image}
                                style={{ width: "20px" }}
                                alt=""
                              />
                              <small className="ms-2">{row?.player_name}</small>
                            </td>
                            <td>
                              <img
                                src={row?.image_team_from}
                                style={{ width: "20px" }}
                                alt=""
                              />
                              <small className="ms-1">
                                {row?.transfare_from}
                              </small>
                            </td>
                            <td>
                              <img
                                src={row?.image_team_to}
                                style={{ width: "20px" }}
                                alt=""
                              />
                              <small className="ms-2">
                                {row?.transfare_to}
                              </small>
                            </td>
                            <td>{row.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                  <div className="row row-cols-1 row-cols-md-3 g-4 d-sm-none  ">
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>التاريخ</th>
                          <th>اللاعب </th>
                          <th>انتقل </th>
                          {/* <th>انتقل الى</th> */}
                          <th>تفاصيل </th>
                        </tr>
                      </thead>
                      <tbody>
                        {lastTransferData?.map((row) => (
                          <tr>
                            <td> {row?.date}</td>
                            <td>
                              <img
                                src={row?.player_image}
                                style={{ width: "20px" }}
                                alt=""
                              />
                              <small className="ms-2">{row?.player_name}</small>
                            </td>
                            <td className="d-flex">
                              <div>
                                <img
                                  src={row?.image_team_from}
                                  style={{ width: "20px" }}
                                  alt=""
                                />
                                {/* <small className="ms-1">{row?.transfare_from}</small> */}
                              </div>
                              <span>
                                <AiOutlineArrowLeft />
                              </span>

                              <div>
                                <img
                                  src={row?.image_team_to}
                                  style={{ width: "20px" }}
                                  alt=""
                                />
                                {/* <small className="ms-2">{row?.transfare_to}</small> */}
                              </div>
                            </td>

                            <td>{row.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </>
              )}
            </Tab>
          </Tabs>
                  </>
        )}
        </div>
        <SideBar lastTransfer={lastTransferTopics} />
      </Row>
    </>
  );
};

export default LatestTransfers;
