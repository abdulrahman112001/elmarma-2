import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { apiClient, url } from "../utils/axios-util";
import Spiner from "./Spiner";
import { t } from "i18next";

function OtherVideo({ DetailsPosts }) {
  // const idLoca = window.location.href.slice(36)
  var str = window.location.href;
  var wordToRemove = `${url}details-video/`;
  var idLoca = str.split(new RegExp('\\b' + wordToRemove + '\\b')).join('');

  const { data: RelatedVideos, isLoading } = useQuery({
    queryKey: [`Related-video/${idLoca}`],
    queryFn: async () => {
      const res = await apiClient.get(`related-videos/${idLoca}`);
      return res.data.data;
    },
  });
  const RelatedVideosData = RelatedVideos ? RelatedVideos : [];
  


  return (
    <div className="col-xl-12 col-md-6  col-xs-12  main p-4 ">
      <div className="d-flex flex-column mb-5">
        {isLoading ? (
          <p className="text-center">
            <Spiner variant="dark" />
            <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
          </p>
        ) : RelatedVideosData.length == 0 ? (
          "  لايوجد فيديوهات متعلقة"
        ) : (
          <div
            className="rounded-bottom p-3 shadow Legues"
            style={{
              backgroundColor: "#F2F2F2",
            }}
          >
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
              {RelatedVideosData?.map((card) => (
                <Link to={`/details-video${card.id}`}>
                  <div key={card.id} className="col rounded-max p-1">
                    <div className="card h-100  LeguesCard rounded-max">
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
                        <h5 className="card-title">{card?.title} ...</h5>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OtherVideo;
