import React from "react";
import axios from "axios";

import { Button, Card, Col, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import ParentPost from "./ParentPost";
import ChildCard from "./ChildPosts";
import TableTeam from "./Table";
import SideBar from "./SideBar";
import ProbabiltyMatches from "./ProbabiltyMatches";
import LeaguesNews from "./LeaguesNews";
import MatchComp from "./MatchComp";
function LeguesHome() {
  const { data: news } = useQuery("newsDataParent", () =>
    axios
      .get(`https://elmarma.com/api/v1/posts?type=parent-post`)
      .then((res) => res.data.data)
  );
  const Parent = news ? news : [];

  const { data: newsSmall } = useQuery("newsSmall", () =>
    axios
      .get(`https://elmarma.com/api/v1/posts?category_id=7`)
      .then((res) => res.data.data)
  );
  const smallCard = newsSmall ? newsSmall : [];


  return (
    <>
      {/* <Row>
        <Row className="flex-column">

          <Row>
            <ParentPost Posts={Parent} />
            <Col xs={12} md={8} lg={4} xl={2} className="p-0">
              <div className="d-flex flex-column">
                <ChildCard smallCard={smallCard} />
              </div>
            </Col>
          </Row>
          <TableTeam />
        </Row>

      </Row>
    <SideBar /> */}

      <Row>
        <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
          <Row>
            <ParentPost Posts={Parent} xs={12} md={8} lg={8} xl={8} />
            <Col xs={12} md={8} lg={4} xl={4} className="p-0">
              <div className="d-flex flex-column">
                <ChildCard smallCard={smallCard} />
              </div>
            </Col>
          </Row>
          <div className="mt-5 " >
            <div
              className="  px-3 py-1 rounded-top border-bottom border-2"
              style={{
                width: "fit-content",
                backgroundColor: "#F2F2F2",
                boxShadow: " 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);",
              }}
            >
              <h4 className="fs-4 rounded-top">  المجموعات  </h4>
            </div>

            <Row className="p-1" style={{background:'#EDEDED'}}>
              <Col xs={12} md={6} lg={6} xl={6} className="p-0">
                <TableTeam  headTable={'مجموعه 1 '}/>
              </Col>
              <Col xs={12} md={6} lg={6} xl={6} className="p-0">
                <TableTeam   headTable={'مجموعه 2 '}/>
              </Col>
            </Row>
            <ProbabiltyMatches/>
            <LeaguesNews/>


          </div>
        </div>

        <SideBar />
      </Row>
    </>
  );
}

export default LeguesHome;
