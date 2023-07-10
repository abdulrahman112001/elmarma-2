import React from "react"
import { Badge, Card, Col, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";

const TournamentCard = ({
  xs,
  lg,
  xl,
  idRoute,
  posts,
  ImgOverlay,


}) => {
     const postsProps = posts  ? posts : []

  return (
    <>

      {postsProps.map((news) => (

          <Col xs={xs} lg={lg} xl={xl} key={news.id} className='p-1'>
            <Link to={`/${idRoute}/${news.id}`}>
              <Card style={{ border: "0" }} className="LeguesCard">
              
                  <div className="position-relative">
                    <Badge
                      className="position-absolute badge p-2 bg-danger"
                      pill
                      bg={news.image}
                    >
                      {news.category?.title}
                    </Badge>
                    <Card.Img
                      variant="top"
                      className="img-card-bost"
                      src={news.image}
                      alt="..."
                    
                    />
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
                        <small className="text-white fw-bold w-100">
                          {news.title}
                        </small>
                      </p>
                    </Card.ImgOverlay>
                  ) : (
                    <>
                      {" "}
                      <Card.Body>
                        <Card.Title className="lightGreen">
                          {news.title ? news.title.slice(0, 
                            15) : ""}
                        </Card.Title>
                        <Card.Text className="fs-6">
                          {news.desc ? `${news.desc.slice(0, 15)} ...` : ""}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer
                        style={{ border: "0", background: "transparent" }}
                      >
                        <small className="text-muted">{news.created_at}</small>
                      </Card.Footer>
                    </>
                  )}
          
              </Card>{" "}
            </Link>
        </Col>
      ))}

    </>
  )
}

export default TournamentCard
