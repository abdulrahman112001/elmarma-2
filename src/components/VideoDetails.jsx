/////////// IMPORTS
///
import React from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import SideBar from "./SideBar";
import { AiFillPlayCircle } from "react-icons/ai"
import spinner from '../assets/111813-rolling-footbll.gif'

///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const VideoDetails = ({ ImgOverlay }) => {
  const { "*": id } = useParams();
  const { data: VideoDetails } = useQuery({
    queryKey: ["todos", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://elmarma.com/api/v1/details-video/video/${id}`,
        {},
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      return res.data.data;
    },
  });
  const VideoDetailsData = VideoDetails ? VideoDetails : [];
  console.log(
    "🚀 ~ file: VIdeoDetails.jsx:31 ~ VideoDeailsData:",
    VideoDetailsData
  );

  const { data: RelatedVideos } = useQuery({
    queryKey: ["Related", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://elmarma.com/api/v1/related-videos/video/${id}`,
        {},
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      return res.data.data;
    },
  });
  const RelatedVideosData = RelatedVideos ? RelatedVideos : [];
  console.log(
    "🚀 ~ file: VIdeoDetails.jsx:31 ~ RelatedVideosData:",
    RelatedVideosData
  );
  

  /////////// VARIABLES
  ///
  if (VideoDetailsData == 0) {
    return (
      <p className="text-center">
        <img style={ { width: '15%' } } src={ spinner } alt="" />
        <h6 className="mt-2"> جاري تحميل البيانات ... </h6>
      </p>
    )
  }

  if (RelatedVideosData == 0) {
    return (
      <p className="text-center">
        <img style={ { width: '15%' } } src={ spinner } alt="" />
        <h6 className="mt-2"> جاري تحميل البيانات ... </h6>
      </p>
    )
  }

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// IF CASES
  ///

  ///
  /////////// FUNCTIONS & EVENTS
  ///

  ///
  return (
    <>
      <Row className="p-4">
        <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
          {VideoDetailsData.map((item) => (
            <Card style={{ border: "0" }}>
              <div className="position-relative">
                <h3>{item?.title}</h3>
                <div>
                  <span>{item?.date}</span>
                  <span className="mx-2">{item?.time}</span>
                </div>
                <div className="mt-2">
                  <iframe
                    style={{
                      width: "100%",
                      height: " 500px",
                    }}
                    src={item?.video}
                    frameborder="0"
                    className="rounded-3"
                  ></iframe>
                </div>
                <hr />
                <h3> الفديوهات المتعلقة   </h3>
              </div>

            </Card>
          ))}
          <div className="col-xl-12 col-md-6  col-xs-12  main p-4 ">
            {RelatedVideosData.map((league) => (
              <Row key={league.header}>
                <div className="d-flex flex-column mb-5">
                  <div
                    className="rounded-bottom p-3 shadow"
                    style={{
                      backgroundColor: "#F2F2F2",
                    }}
                  >
                    <div className="row row-cols-1 row-cols-md-3 g-4 ">
                      {RelatedVideosData?.map((card) => (
                        <Link to={`/details-video${card.id}`}>
                          <div key={card.id} className="col rounded-max p-1">
                            <div className="card h-100  rounded-max">
                              <div className="d-flex align-items-center justify-content-center position-relative p-2 rounded-2">
                                <img
                                  style={{ height: "130px" }}
                                  src={card?.image}
                                  className="card-img-top w-100"
                                  alt="..."
                                />
                                <div className="position-absolute">
                                  <AiFillPlayCircle
                                    style={{ fontSize: "50px", fill: "red" }}
                                  />
                                </div>
                                <div className="position-absolute top-0 start-0">
                                  <p className="bg-dark text-white px-2 rounded-2 w-25 text-center m-3">
                                    3:12
                                  </p>
                                </div>
                              </div>
                              <div className="card-body gap-2 p-2   d-flex flex-column align-items-start justify-content-center  rounded-bottom ">
                                <small class="text-muted">{card?.date}</small>
                                <h5 className="card-title">{card?.title.slice(0,20)} ...</h5>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Row>
            ))}
          </div>

        </div>

        <SideBar />
      </Row>
    </>
  );
};
