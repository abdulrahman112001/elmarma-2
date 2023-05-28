import React from "react";
import { Card, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { apiClient, url } from "../utils/axios-util";
import ImageSlider from "./ImageSlider";
import OthersPosts from "./OthersPosts";
import SideBar from "./SideBar";
import Spiner from "./Spiner";
import { t } from "i18next";

function DetailsPostOuter({ ImgOverlay }) {
    // const idLoca = window.location.href.slice(38);

    var str = window.location.href;
    var wordToRemove = `${url}details-post-out/`;
    var idLoca = str.split(new RegExp('\\b' + wordToRemove + '\\b')).join('');
    console.log(idLoca);

  const { data: DetailsNewOuter, isLoading } = useQuery({
    queryKey: [`details-video-outer/${idLoca}`],
    queryFn: async () => {
      const res = await apiClient.get(`details-video/${idLoca}`);
      return res.data.data;
    },
  });

  const posts = DetailsNewOuter ? DetailsNewOuter : [];

  ////////////////////////////////////////////////////////////////////////////////////





  return (
    <>
    {
      
      isLoading ? (
        <p className="text-center">
          <Spiner variant="dark" />
          <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
        </p>
      ) : posts.length === 0 ? (
        "يوجد خطأ في عرض الاخبار  "
      ) :  <Row className="p-4">
      {
        posts.map((post)=>(

      <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
        <Card style={{ border: "0" }}>
          <div className="position-relative">
            <h3>{post?.title}</h3>
            <div>
              <small className="text-muted">{post?.created_at}</small>
              <span className="mx-2">{post?.time}</span>
              <span className="mx-2">{post?.date}</span>

            </div>

            {/* <ImageSlider media={post?.medias} /> */}


            <Card.Img variant="top" className="mt-4" src={post?.image} alt="..." />
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
                {post?.title}
              </p>
            </Card.ImgOverlay>
          ) : (
            <>
              {" "}
              <Card.Body className="mt-4">
                <Card.Title className="lightGreen">
                  {post?.content}
                </Card.Title>
                <Card.Text className="fs-6">{post?.desc}</Card.Text>
              </Card.Body>
              <Card.Footer style={{ border: "0", background: "transparent" }}>
                <small className="text-muted">{post?.created_at}</small>
              </Card.Footer>
            </>
          )}
        </Card>

        <OthersPosts post={post} />
      </div>

        ))
      }

      <SideBar />
    </Row>
   
      
    }
    </>
  );
}

export default DetailsPostOuter;
