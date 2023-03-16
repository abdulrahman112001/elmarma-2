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
import OtherVideo from "./OtherVideo";

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

          <OtherVideo id={id}/>

        </div>

        <SideBar />
      </Row>
    </>
  );
};
