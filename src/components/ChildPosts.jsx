import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChildCard = ({ smallCard,id }) => {
  const childPosts = smallCard ? smallCard : [];
  return (
    <>
      {childPosts.map((child) => (
        <Col xs={12} md={12} lg={12} xl={12} className="p-0">
            <Card>
          <Link to={`/${id}/${child.id}`} className="card-custom-size ">
              <Card.Img
                variant="top"
                src={child?.image}
                style={{ height: "150px" }}
                alt="..."
              />
              <Card.ImgOverlay className="text-center text-white w-100 d-flex flex-column gap-1 align-items-start justify-content-end imgOverlay-cutom">
              <Card.Text className="fs-6 m-0 p-0 title-custom">
                  <small>{child?.category.title}</small>
                </Card.Text>
                <Card.Title className="fs-6   ">{child?.title}</Card.Title>
              </Card.ImgOverlay>
          </Link>
            </Card>
        </Col>
      ))}
    </>
  );
};

export default ChildCard;
