import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ParentPost = ({ Posts ,key , id  , md , xs , xl , lg , bigPos}) => {
  const PrentPost = Posts ? Posts : [];

  return (
    <>
      {PrentPost.map((parent) => (
        <Col xs={xs} md={md} lg={lg} xl={xl} className="p-0 bigPos">
          <Link  to={`/${id}/${parent.id}`} key={key} className='p-0'>
            <Card style={{ height: "100%" }} className="card-custom-size ">
              <Card.Img
                variant="top"
                style={{ height: "100%" }}
                src={parent?.image}
                alt="..."
              />
              <Card.ImgOverlay className="text-center text-white fw-bold w-100 d-flex flex-column gap-1 align-items-start justify-content-end imgOverlay-cutom">
                <Card.Text className="fs-6 m-0 p-0 title-custom">
                  <small className="legues-egyption">{parent?.category?.title}</small>
                </Card.Text>
                <Card.Title className="fs-3 p-0 m-0"> {parent?.title} </Card.Title>
                <Card.Text className="fs-6 m-0 p-0 title-date">
                  <small>{parent?.created_at}</small>
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
