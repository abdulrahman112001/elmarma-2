import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChildCard = ({ smallCard }) => {
  const childPosts = smallCard ? smallCard : [];
  console.log("childPostssssss", childPosts);

  return (
    <>
      {childPosts.map((child) => (
        <Col xs={12} md={12} lg={12} xl={12} className="p-0">
    
          <Card>
              <Card.Img variant="top" src={child?.image} style={{"height":'150px'}}  alt="..." />
              <Card.ImgOverlay className="text-center text-white w-100 d-flex flex-column gap-3 align-items-start justify-content-end">
                <Card.Title className="fs-6 ">{child?.title}</Card.Title>
              </Card.ImgOverlay>
            </Card>
      
        </Col>
      ))}
    </>
  )
}

export default ChildCard;
