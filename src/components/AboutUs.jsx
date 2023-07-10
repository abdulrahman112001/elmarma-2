import React from "react";
import { Row } from "react-bootstrap";
import SideBar from "./SideBar";
import { useQuery } from "react-query";
import { apiClient } from "../utils/axios-util";
import { CgFileDocument } from "react-icons/cg";
import { t } from "i18next";

export default function AboutUs() {
  const { data: AboutUs } = useQuery({
    queryKey: [`aboutUs`],
    queryFn: async () => {
      const res = await apiClient.get(`setting`);
      return res.data.data;
    },
  });
  
  return (
    <div>
      <Row className=" p-4">
        <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
          <div className="d-flex align-items-center justify-content-between border-bottom mb-5">
            <div className="d-flex align-items-center gap-1 ">
              <CgFileDocument
                style={{ width: "24px", height: "24px", color: "#0573F6" }}
              />
              <h4 className="fs-4 my-3"> {t("About Us")}</h4>
            </div>
          </div>
          <p className="aboutUs">{AboutUs?.about_us}</p>
        </div>
        <SideBar />
      </Row>
    </div>
  );
}
