import React from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { apiClient, customLang } from "../utils/axios-util";
import PostsCard from "./PostsCard";
const SideBar = () => {
  const posts = [
    {
      TimeLineText: "حديثه",
      TimeLineBgTrack: "success",
      overlayTitle: "إنجازات وألقاب بوروسيا دورتموند - خاص بالمرمي",
      cardTitle: "   الدوري السعودي",
      cardText: "رونالدو يصنع في استعادة النصر لصدارة الدوري السعودي",
      cardFooter: " الجمعة 17 فبراير 2023 07:17 م",
    },
  ];

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
    queryKey: ["ChildPost"],
    queryFn: async () => {
      const res = await apiClient.get(`posts?type=child-post&${customLang}`);
      return res.data.data;
    },
  });
  const ChildPosts = ChildPost ? ChildPost : [];

  const { data: news } = useQuery({
    queryKey: ["newsDataParent"],
    queryFn: async () => {
      const res = await apiClient.get(`posts?type=parent-post&${customLang}`);
      return res.data.data;
    },
  });

  const DataNews = news ? news : [];
  console.log("🚀 ~ file: SideBar.jsx:51 ~ SideBar ~ DataNews:", DataNews)

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
          {/* الأكثر قراءة*/}
          <Card className="rounded">
            <Card.Body className="bg-dark ">
              <Card.Title className="text-white">الأكثر قراءة</Card.Title>
            </Card.Body>
            <ul class="list-group list-group-flush">
              {List.map((li, index) => (
                <li class="list-group-item" key={index}>
                  <p className="d-flex fsmain">
                    <span className="mostRedCount p-3 text-primary">
                      {li.count}
                    </span>
                    {li.text}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
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
