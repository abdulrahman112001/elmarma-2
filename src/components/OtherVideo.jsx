import React from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import PostsCard from "./PostsCard";
import { CgFileDocument } from "react-icons/cg";
import spinner from "../assets/111813-rolling-footbll.gif";
import { AiFillPlayCircle } from "react-icons/ai";

function OtherVideo({ DetailsPosts, id }) {

const x = id 
  const { data: RelatedVideos } = useQuery({
    queryKey: ["Related"],
    queryFn: async () => {
      const res = await axios.get(
        `https://elmarma.com/api/v1/related-videos/video/${x}`,
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

  //   if (categoryPost === 0) {
  //     return (
  //       <p className="text-center">
  //         <img style={ { width: '15%' } } src={ spinner } alt="" />
  //         <h6 className="mt-2"> جاري تحميل البيانات ... </h6>
  //       </p>
  //     )
  //   }

  return (
    <div className="col-xl-12 col-md-6  col-xs-12  main p-4 ">
 
   
          <div className="d-flex flex-column mb-5">
            <div
              className="rounded-bottom p-3 shadow"
              style={{
                backgroundColor: "#F2F2F2",
              }}
            >
              <div className="row row-cols-1 row-cols-md-3 g-4 ">
                {RelatedVideosData?.map((card) => (
                  <Link to={`/details-video/${card.id.slice(15)}`}>
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
                          <h5 className="card-title">
                            {card?.title.slice(0, 20)} ...
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

     
    </div>
  );
}

export default OtherVideo;
