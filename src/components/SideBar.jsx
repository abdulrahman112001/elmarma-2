import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { apiClient, customLang } from "../utils/axios-util";
import PostsCard from "./PostsCard";
import { Link } from "react-router-dom";
const SideBar = () => {


  const List = [
    {
      count: "1",
      text: "خبر المرمي - أسامة نبيه يقترب من الرحيل عن الزمالك.. والقرار الأقرب بخصوص فيريرا",
    },
    {
      count: "1",
      text: "خبر المرمي - أسامة نبيه يقترب من الرحيل عن الزمالك.. والقرار الأقرب بخصوص فيريرا",
    },
    {
      count: "1",
      text: "خبر المرمي - أسامة نبيه يقترب من الرحيل عن الزمالك.. والقرار الأقرب بخصوص فيريرا",
    },
  ];

  const { data: ChildPost } = useQuery({
    queryKey: ["ChildPostBanners"],
    queryFn: async () => {
      const res = await apiClient.get(`banners?&${customLang}`);
      return res.data.data;
    },
  });
  const ChildPosts = ChildPost ? ChildPost : [];
  console.log("🚀 ~ file: SideBar.jsx:42 ~ SideBar ~ ChildPosts:", ChildPosts)

  const { data: news } = useQuery({
    queryKey: ["newsDataParentBanners"],
    queryFn: async () => {
      const res = await apiClient.get(`banners?type=parent-post&${customLang}`);
      return res.data.data;
    },
  });

  const DataNews = news ? news : [];
  console.log("🚀 ~ file: SideBar.jsx:53 ~ SideBar ~ DataNews:", DataNews)

  return (
    <div className="col-xl-4 col-md-6   d-none d-md-block">
      <Row>
        <div className="d-flex flex-column gap-3">
          <PostsCard
            posts={DataNews}
            xs={12}
            lg={12}
            xl={12}
            id={`daetails-post`}
            ImgOverlay
          />
          <div className="d-flex justify-content-between flex-wrap">
            <PostsCard
              posts={ChildPosts}
              xs={6}
              lg={6}
              xl={6}
              id={`daetails-Post`}
            />
          </div>

                    {/*  احجز تذكرتك*/}
        <Col xs={12} md={12} lg={12} xl={12} className="p-0 mt-2">
          {" "}
          <Card className="rounded ">
            <Card.Body className="bg-light ">
              <Card.Title className="text-dark text-center">
                احجز تذكرتك
              </Card.Title>
              <Card.Text className=" d-flex justify-content-between align-items-center p-4">
                <div className="d-flex flex-column gap-2  align-items-center">
                  <img
                    src="https://media.gemini.media/img/yallakora/IOSTeams//120//2021/9/8/Elahly2021_9_8_16_46.jpg"
                    alt=""
                    width={"100px"}
                  />
                  <p className="text-white">اسم النادي</p>
                </div>
                <div
                  className="px-4 py-2 rounded-pill text-primary "
                  style={{
                    boxShadow: "0.5px 0.5px 4px rgba(0, 0, 0, 0.25)",
                    backgroundColor: "#F9F9F9",
                  }}
                >
                  VS
                </div>
                <div className="d-flex flex-column gap-2  align-items-center">
                  <img
                    src="https://media.gemini.media/img/yallakora/IOSTeams//120//2021/9/8/Elahly2021_9_8_16_46.jpg"
                    alt=""
                    width={"100px"}
                  />
                  <p className="text-white">اسم النادي</p>
                </div>
              </Card.Text>
              <Card.Subtitle>
                <p className="text-primary fs-4 fw-bold text-center">
                  نهائي دوري أبطال ايطاليا
                </p>
              </Card.Subtitle>
              <Link to="" className="text-dark ">
                <Card.Footer className=" fw-bold text-center">
                  للحجز اضغط هنا
                </Card.Footer>
              </Link>
            </Card.Body>
          </Card>
        </Col>
          {/* اشترك */}
          <Card className="text-white text-end ">
            <Card.Img src="/images/email.jpg" className="card-img" alt="..." />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center gap-5">
              <div className="d-flex flex-column justify-content-center align-items-start">
                <Card.Title className="fs-6">اشترك في </Card.Title>
                <Card.Text className="fs-4 text-muted">
                  النشرة البريدية
                </Card.Text>
              </div>
              <div className="d-flex flex-column justify-content-center gap-3">
                {" "}
                <Form className="d-flex flex-column justify-content-center align-items-end">
                  <Form.Control
                    className="bg-dark text-center"
                    type="email"
                    placeholder="أدخل بريدك الالكتروني"
                  />
                </Form>
                <Button variant="primary" size="lg">
                  اشترك
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </div>
      </Row>
      
    </div>
  );
};

export default SideBar;
