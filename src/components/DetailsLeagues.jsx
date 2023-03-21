import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Card, Col, Row, Table } from "react-bootstrap";

import Posts from "../pages/Posts";
import leagues from "../assets/leagues.png";
import ParentPost from "./ParentPost";
import axios from "axios";

import ButtonGroups from "./ButtonGroups";
import { useQuery } from "react-query";
import ChildCard from "./ChildPosts";
import LeguesHome from "./LeguesHome";
import TableTeam from "./Table";
import img from "../assets/Frame 113.png";
import MatchComp from "./MatchComp";
import SideBar from "./SideBar";
import Media from "../pages/Media";
function DetailsLeagues() {
  const [key, setKey] = useState("home");

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

  const { data } = useQuery("repoData", () =>
    axios.get("https://elmarma.com/api/v1/all-matches").then((res) => {
      var data = res.data.data.filter(
        (item) => !item?.id.startsWith("https://")
      );
      return data;
    })
  );

  const MatchesCards = data ? data : [];
  return (
    <>
      <div className="mt-3 position-relative">
        <img
          className="w-100 rounded-top"
          style={{ height: "200px" }}
          src={leagues}
          alt=""
        />
        <div className="position-absolute img-baner">
          <h2>دوري أبطال اسيا</h2>
          <img src={img} alt="" />
        </div>
      </div>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="الرئيسية">
          <LeguesHome />
        </Tab>
        <Tab eventKey="profile" title="الأخبار">
          <Posts />
        </Tab>
        <Tab eventKey="Matches" title="المباريات">
          <Row>
            <MatchComp MatchesCards={MatchesCards} />
            <SideBar />
          </Row>
        </Tab>
        <Tab eventKey="Tabels" title="الترتيب">
          <Row>
            <Col xs={12} md={6} lg={6} xl={8} className="p-0">
              <TableTeam headTable={"مجموعه 1 "} />
            </Col>

            <SideBar />
          </Row>
        </Tab>
        <Tab eventKey="Media" title="ميديا">
          <Media/>
        </Tab>
        <Tab eventKey="Players" title="الهدافون">
        <Row>
            <Col xs={12} md={6} lg={6} xl={8} className="p-0">
              <TableTeam headTable={"مجموعه 1 "} />
            </Col>

            <SideBar />
          </Row>
        </Tab>
      </Tabs>
    </>
  );
}

export default DetailsLeagues;
