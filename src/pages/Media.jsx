import React from "react"
import { Row } from "react-bootstrap"
import { CgFileDocument } from "react-icons/cg"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { Link } from "react-router-dom"
import { useQuery } from "react-query";
import spinner from '../assets/111813-rolling-footbll.gif'

import axios from "axios";
import { AiFillPlayCircle } from "react-icons/ai"
import SideBar from "../components/SideBar"
import { apiClient } from "../utils/axios-util"
import { t } from "i18next"
import Spiner from "../components/Spiner"
const Media = () => {
  const medias = [
    {
      header: "الفديوهات",
      allLinksTitle: "جميع الفديوهات",
      allLinks: "",
      info: [
        {
          src: "images/League2.png",
          title: "دوري أبطال اسيا",
          time: "الجمعة 17 فبراير 2023 07:17 م",
        },
        {
          src: "images/League2.png",
          title: "دوري أبطال اسيا",
          time: "الجمعة 17 فبراير 2023 07:17 م",
        },
        {
          src: "images/League2.png",
          title: "دوري أبطال اسيا",
          time: "الجمعة 17 فبراير 2023 07:17 م",
        },
        {
          src: "images/League2.png",
          title: "دوري أبطال اسيا",
          time: "الجمعة 17 فبراير 2023 07:17 م",
        },
        {
          src: "images/League2.png",
          title: "دوري أبطال اسيا",
          time: "الجمعة 17 فبراير 2023 07:17 م",
        },
      ],
    },
  ]

  const { data: VideosData, isLoading } = useQuery({
    queryKey: [`allVideo`],
    queryFn: async () => {
      const res = await apiClient.get(`all-videos`);
      return res.data.data;
    },
  });

  const Videos = VideosData ? VideosData : []



  return (
    <Row className=" p-4">
      
      <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
      <Row>
          <div className="d-flex align-items-center justify-content-between border-bottom mb-5">
            <div className="d-flex align-items-center gap-1 ">
              <CgFileDocument
                style={{ width: "24px", height: "24px", color: "#0573F6" }}
              />
              <h4 className="fs-4 my-3">   {t("Elmarma Media")}</h4>
            </div>
          </div>
        </Row>


        {isLoading ? (
          <p className="text-center">
            <Spiner variant="dark" />
            <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
          </p>
        ) : Videos.length == 0  ? `${t('sorry data not found')}` :

    
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                  {Videos?.map((card) => (
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

                  }

               


      </div>
      <SideBar />
    </Row>
  )
}

export default Media
