import React from "react";
import { Row } from "react-bootstrap";
import SideBar from "./SideBar";
import { useQuery } from "react-query";
import { apiClient } from "../utils/axios-util";
import { CgFileDocument } from "react-icons/cg";
import { t } from "i18next";

export default function TermsAndCondition() {
  const { data: terms } = useQuery({
    queryKey: [`terms_and_condition`],
    queryFn: async () => {
      const res = await apiClient.get(`term`);
      return res.data.data;
    },
  });


  const removeHTMLTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };
  
  const sanitizedData = removeHTMLTags(terms?.content);
  
  return (
    <div>
      <Row className=" p-4">
        <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
          <div className="d-flex align-items-center justify-content-between border-bottom mb-5">
            <div className="d-flex align-items-center gap-1 ">
              <CgFileDocument
                style={{ width: "24px", height: "24px", color: "#0573F6" }}
              />
              <h4 className="fs-4 my-3"> {t("terms And condition")}</h4>
            </div>
          </div>
          <p className="aboutUs">
            {sanitizedData}
            </p>
        </div>
        <SideBar />
      </Row>
    </div>
  );
}
