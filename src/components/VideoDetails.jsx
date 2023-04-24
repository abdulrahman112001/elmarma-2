/////////// IMPORTS
///
import React from "react";
import { Card, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import spinner from '../assets/111813-rolling-footbll.gif';
import { apiClient } from "../utils/axios-util";
import OtherVideo from "./OtherVideo";
import SideBar from "./SideBar";
import { t } from "i18next";
import Spiner from "./Spiner";

///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const VideoDetails = ({ ImgOverlay }) => {

  const idLoca = window.location.href.slice(36)
  console.log("🚀 ~ file: VideoDetails.jsx:24 ~ VideoDetails ~ idLoca:", idLoca)

  const { data: VideoDetails , isLoading  } = useQuery({
    queryKey: [`video-details/${idLoca}`],
    queryFn: async () => {
      const res = await apiClient.get(
        `details-video/${idLoca}`

      );
      return res.data.data;
    },
  });
  const VideoDetailsData = VideoDetails ? VideoDetails : [];
  /////////// VARIABLES
  ///



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
      {isLoading  ? (
          <p className="text-center">
            <Spiner variant="dark" />
            <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
          </p>
        ) : VideoDetailsData.length == 0  ? `${t('sorry data not found')}` :
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

          <OtherVideo id={idLoca}/>

        </div>
        <SideBar />
      </Row>
}
    </>
  );
};
