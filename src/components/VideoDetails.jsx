/////////// IMPORTS
///
import { t } from "i18next";
import React, { useEffect } from "react";
import { Card, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { apiClient, url } from "../utils/axios-util";
import OtherVideo from "./OtherVideo";
import SideBar from "./SideBar";
import Spiner from "./Spiner";
import { useLocation } from "react-router-dom";

///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const VideoDetails = ({ ImgOverlay }) => {

  // const idLoca = window.location.href.slice(36)

  var str = window.location.href;
  var wordToRemove = `${url}details-video/`;
  var idLoca = str.split(new RegExp('\\b' + wordToRemove + '\\b')).join('');



  const { data: VideoDetails , isLoading , isFetching    } = useQuery({
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

  const location = useLocation();

  // useEffect(() => {
  //   // This code will execute whenever the URL changes
  //   console.log('URL changed:', location.pathname);
  // }, [location]);

  // ///
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
      {isLoading ||  isFetching ? (
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
                  allowTransparency="true" allow="encrypted-media"
                    style={{
                      width: "100%",
                      height: " 700px",
                    }}
                    src={`https://twitframe.com/show?url=${item?.video}`}
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
