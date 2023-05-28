import React from "react";
import { Badge, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostsCard = ({ xs, lg, xl, id, posts, ImgOverlay }) => {
  const postsProps = posts ? posts : [];

  return (
    <>
      {postsProps.map((post) => (
        <Col
          xs={xs}
          lg={lg}
          xl={xl}
          key={post.id}
          className="p-1 shadow mt-3 rounded-2  "
        >
          <Link to={`/${id}/${post.id}`} className="">
            <div className="row position-relative card-custom-size " style={{ border: "0" }}>
              <div className="col-5">
                <img
                  variant="top"
                  className="img-fluid"
                  src={post?.image || post?.image_path}
                  alt="..."
                  style={{height:"100px"}}
                />
              </div>
              <div className=" col-7 ">

                  <div className=" col-12">
                    <p
                      className="card-text text-start text-dark "
                      style={{borderRight:"3px solid  rgb(255 157 7)"}}
                    >
                      <small className="fs-6 fw-bold w-100 me-2 " style={{color:" rgb(255 157 7)"}}>
                        {post?.category?.title}
                      </small>
                    </p>

                  </div>
                  <div className=" col-12">
                    <div className="lightGreen">
                      {post.title ? post.title.slice(0, 25) : ""}
                    </div>
                    <div className="fs-6">
                      {post.desc ? `${post.desc.slice(0, 25)} ...` : ""}
                    </div>
                  <div className="col-md-" style={{ border: "0", background: "transparent" }}>
                    <small className="text-muted">
                    {/* <svg viewBox="0 0 20 20"><use xlink:href="#time"></use></svg> */}
                      {post.created_at}
                      </small>
                  </div>
                  </div>
              </div>
            </div>{" "}
          </Link>
        </Col>
      ))}
    </>
  );
};

export default PostsCard;
