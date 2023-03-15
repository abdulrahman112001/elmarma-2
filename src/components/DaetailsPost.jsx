import React, { useEffect, useState } from "react"
import { Badge, Card, Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useQuery } from "react-query"
import axios from "axios"
import SideBar from "./SideBar"
import OthersPosts from "./OthersPosts"
import PostDetailSlide from "./PostDetailSlide"

function DaetailsPost({ ImgOverlay }) {
  const { id } = useParams()

  const { data: DataDetails, isLoading } = useQuery({
    queryKey: ["todos", id],
    queryFn: async () => {
      const res = await axios.get(`https://elmarma.com/api/v1/news/${id}`)
      return res.data.data
    },
  })

  const DetailsPosts = DataDetails ? DataDetails : []
  console.log("first", DetailsPosts)
  ////////////////////////////////////////////////////////////////////////////////////

  // console.log("category", categorys)

  return (
    <Row className="p-4">
      <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
        <Card style={{ border: "0" }}>
          <div className="position-relative">
            <h3>{DetailsPosts?.title}</h3>
            <div>
              <small className="text-muted">{DetailsPosts.created_at}</small>
              <span className="mx-2">{DetailsPosts?.time}</span>
            </div>
            <PostDetailSlide
              media={DetailsPosts?.medias}
              ImgOverlay={DetailsPosts?.image}
            />
            {/* <Card.Img variant="top" src={DetailsPosts.image} alt="..." /> */}
          </div>
          {ImgOverlay ? (
            <Card.ImgOverlay>
              <p
                className="card-text text-center"
                style={{
                  position: "absolute",
                  bottom: "1rem",
                }}
              >
                <small className="text-white fw-bold w-100"></small>
                {DetailsPosts.title}
              </p>
            </Card.ImgOverlay>
          ) : (
            <>
              {" "}
              <Card.Body>
                <Card.Title className="lightGreen">
                  {DetailsPosts.title}
                </Card.Title>
                <Card.Text className="fs-6">{DetailsPosts.desc}</Card.Text>
              </Card.Body>
              <Card.Footer style={{ border: "0", background: "transparent" }}>
                <small className="text-muted">{DetailsPosts.created_at}</small>
              </Card.Footer>
            </>
          )}
        </Card>

        <OthersPosts DetailsPosts={DetailsPosts} />
      </div>

      <SideBar />
    </Row>
  )
}

export default DaetailsPost
