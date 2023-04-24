import React from "react";
import { Badge, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostsCard = ({ xs, lg, xl, id, posts, ImgOverlay }) => {
  const postsProps = posts ? posts : [];

  return (
    <>
      {postsProps.map((post) => (
        <Col xs={xs} lg={lg} xl={xl} key={post.id} className="p-1 shadow mt-1 rounded-2">
          <Link to={`/${id}/${post.id}`}>
            <Card style={{ border: "0" }}>
              <div className="position-relative">
                <Badge
                  className="position-absolute badge p-2 bg-danger"
                  pill
                  bg={post.image}
                >
                  {post.category?.title}
                </Badge>
                <Card.Img
                  variant="top"
                  className="img-card-bost"
                  src={post.image}
                  alt="..."
                />
              </div>
         
          
               
           
                
                  {" "}
                  <Card.Body>
                  <p
                    className="card-text text-center text-dark bg-danger"
                    // style={{
                    //   position: "absolute",
                    //   bottom: "1rem",
                    // }}
                  >
                    <small className="text-white fw-bold w-100">
                      {post?.category?.title}
                    </small>
                  </p>
              
                    <Card.Title className="lightGreen">
                      {post.title ? post.title.slice(0, 15) : ""}
                    </Card.Title>
                    <Card.Text className="fs-6">
                      {post.desc ? `${post.desc.slice(0, 15)} ...` : ""}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer
                    style={{ border: "0", background: "transparent" }}
                  >
                    <small className="text-muted">{post.created_at}</small>
                  </Card.Footer>
                
              
            </Card>{" "}
          </Link>
        </Col>
      ))}
    </>
  );
};

export default PostsCard;
