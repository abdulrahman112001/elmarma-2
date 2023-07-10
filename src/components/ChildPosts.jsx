import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChildCard = ({ smallCard, id, xl }) => {
  const childPosts = smallCard ? smallCard : [];
;
  return (
    <>
      {childPosts.map((child) => (
        <Col xs={12} md={12} lg={12} xl={xl} className="px-2 mt-1">
          <Card>
            <Link to={`/${id}${child.id}`} className="card-custom-size ">
              <Card.Img
                variant="top"
                src={child?.image}
                style={{ height: "180px" }}
                alt="..."
              />
              <Card.ImgOverlay className="text-center text-white w-100 d-flex flex-column gap-1 align-items-start justify-content-end imgOverlay-cutom">
                <Card.Text className="fs-6 m-0 p-0 title-custom">
                  <small className="legues-egyption">
                    {child?.category?.title}
                  </small>
                </Card.Text>
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
              </Card.ImgOverlay>
            </Link>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default ChildCard;
