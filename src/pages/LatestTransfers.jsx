import React from "react";
import { Row, Table } from "react-bootstrap";
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

const LatestTransfers = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const { data: lastTransfer, isLoading } = useQuery({
    queryKey: [`latest-transfers-all-leagues`],
    queryFn: async () => {
      const res = await apiClient.get(`latest-transfers-all-leagues`);
      return res.data.data;
    },
  });

  const { data: lastTransferData , isLoading:loadingTransferData } = useQuery({
    queryKey: [`latest-transfers-data${selectedOption?.value}`],
    queryFn: async () => {
      const res = await apiClient.get(
        `latest-transfers/${selectedOption?.value}`
      );
      return res.data.data;
    },
  });


  const transferOption = lastTransfer?.map((item) => ({
    label: item.tournament_name,
    value: item.id,
  }));

  const handleChange = (selectedOption) => {
    console.log(`ID of selected option:`, selectedOption.value);
    setSelectedOption(selectedOption);
  };
  const [isRtl, setIsRtl] = useState(false);

  return (
    <Row className=" p-4">
      <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
        <Row>
          <div className="d-flex align-items-center justify-content-between border-bottom mb-5">
            <div className="d-flex align-items-center gap-1 ">
              <CgFileDocument
                style={{ width: "24px", height: "24px", color: "#0573F6" }}
              />
              <h4 className="fs-4 my-3"> {t("Latest Transfers")}</h4>
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

        {loadingTransferData ? (
          <p className="text-center">
            <Spiner variant="dark" />
            <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
          </p>
        ) : 0 ? (
          `${t("sorry data not found")}`
        ) : lastTransferData.length == 0 ? `${t('sorry data not found')}` :
        <>
          <div className="row row-cols-1 row-cols-md-3 g-4 d-none d-sm-block  ">
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
                      <small className="ms-1">{row?.transfare_from}</small>
                    </td>
                    <td>
                      <img
                        src={row?.image_team_to}
                        style={{ width: "20px" }}
                        alt=""
                      />
                      <small className="ms-2">{row?.transfare_to}</small>
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
                    <th>انتقل  </th>
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
                            <AiOutlineArrowLeft/>
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
        }
      </div>
      <SideBar />
    </Row>
  );
};

export default LatestTransfers;
