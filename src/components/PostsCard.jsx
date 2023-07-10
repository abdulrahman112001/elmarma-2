import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostsCard = ({ xs, lg, xl, id, posts, ImgOverlay, BigPost }) => {
  const postsProps = posts ? posts : [];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getCharacterLimit = () => {
    if (windowWidth <= 768) {
      // Small screens
      return 20;
    } else {
      // Medium screens and above
      return 100;
    }
  };
  const getCharacterLimitDesc = () => {
    if (windowWidth <= 768) {
      // Small screens
      return 50;
    } else {
      // Medium screens and above
      return 200;
    }
  };

  const imageStyle = BigPost
    ? { height: "200px", width: "100%" }
    : { height: "100px" };

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
            <div
              className="row position-relative card-custom-size "
              style={{ border: "0" }}
            >
              <div className="col-5">
                <img
                  variant="top"
                  className="img-fluid"
                  src={post?.image || post?.image_path}
                  alt="..."
                  style={imageStyle}
                />
              </div>
              <div className=" col-7 ">
                <div className=" col-12">
                  <p
                    className="card-text text-start text-dark"
                    style={{ borderRight: "3px solid  rgb(255 157 7)" }}
                  >
                    <small
                      className="fs-5 fw-bolder w-100 me-2"
                      style={{ color: " rgb(255 157 7)" }}
                    >
                      {post?.category?.title}
                    </small>
                  </p>
                </div>
                <div className=" col-12">
                  <div className="lightGreen">
                    {post.title
                      ? BigPost
                        ? post.title.slice(0, getCharacterLimit())
                        : post.title.slice(0, getCharacterLimit())
                      : ""}
                  </div>
                  <div className="fs-6">
                    {post.desc
                      ? BigPost
                        ? `${post.desc.slice(0, getCharacterLimitDesc())} ...`
                        : ""
                      : ""}
                  </div>
                  <div
                    className="col-md-"
                    style={{ border: "0", background: "transparent" }}
                  >
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
