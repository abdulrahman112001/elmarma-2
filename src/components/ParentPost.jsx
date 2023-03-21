import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ParentPost = ({ Posts , id  , md , xs , xl , lg}) => {
  const PrentPost = Posts ? Posts : [];

  return (
    <>
      {PrentPost.map((parent) => (
        <Col xs={xs} md={md} lg={lg} xl={xl} className="p-0">
          <Link  to={`/${id}/${parent.id}`} className='p-0'>
            <Card style={{ height: "100%" }}>
              <Card.Img
                variant="top"
                style={{ height: "100%" }}
                src={parent?.image}
                alt="..."
              />
              <Card.ImgOverlay className="text-center text-white fw-bold w-100 d-flex flex-column gap-3 align-items-start justify-content-end">
                <Card.Title className="fs-3"> {parent?.title} </Card.Title>
                <Card.Text className="fs-6">
                  <small>{parent?.title}</small>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
      ))}
    </>
  )
}

export default ParentPost;
