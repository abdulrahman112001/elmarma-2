import React from "react"
import { Row } from "react-bootstrap"
import { CgFileDocument } from "react-icons/cg"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { Link } from "react-router-dom"
import { useQuery } from "react-query";

import axios from "axios";
import { AiFillPlayCircle } from "react-icons/ai"
import SideBar from "../components/SideBar"
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
    // {
    //   header: "الصور",
    //   allLinksTitle: "جميع الصور",
    //   allLinks: "",
    //   info: [{ src: "images/League2.png", title: "الدوري المصري" }],
    // },
  ]

  
  const {
    data: VideosData,
  } = useQuery("allVideo", () =>
    axios
      .get(`https://elmarma.com/api/v1/all-videos`)
      .then((res) => res.data.data)
  )
  const Videos = VideosData ? VideosData : []

  return (
    <Row className=" p-4">
      <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
        {medias.map((league) => (
          <Row key={league.header}>
            <div className="d-flex flex-column mb-5">
              <div className="d-flex align-items-center justify-content-between">
                <div
                  className=" px-3 py-1 rounded-top border-bottom border-2"
                  style={{
                    width: "fit-content",
                    backgroundColor: "#F2F2F2",
                    boxShadow: " 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);",
                  }}
                >
                  <h4 className="fs-4">{league.header}</h4>
                </div>
                <Link
                  to={league.allLinks}
                  className="d-flex align-items-end justify-content-end all-matches-btn"
                >
                  <div className="d-flex bg-primary rounded-3  align-items-center justify-content-center">
                    <p className="text-white m-0 p-2">
                      {" "}
                      {league.allLinksTitle}{" "}
                    </p>
                    <MdKeyboardArrowLeft
                      style={{ color: "white", width: "20px", height: "20px" }}
                    />
                  </div>
                </Link>
              </div>

              <div
                className="rounded-bottom p-3 shadow"
                style={{
                  backgroundColor: "#F2F2F2",
                }}
              >
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                  {Videos?.map((card) => (
                    <div key={card.id} className="col rounded-max p-1">
                      <div className="card h-100  rounded-max">
                        <div className="d-flex align-items-center justify-content-center position-relative p-2 rounded-2">
                          <img
                            style={{ height:'130px' }}
                            src={card.image}
                            className="card-img-top w-100"
                            alt="..."
                          />
                          <div className="position-absolute">
                            <AiFillPlayCircle style={{fontSize:'50px', fill:'red'}} />
                          </div>
                          <div className="position-absolute top-0 start-0">
                          <p className="bg-dark text-white px-2 rounded-2 w-25 text-center m-3">
                          3:12
                          </p>
                          </div>
                        </div>
                        <div className="card-body gap-2 p-2   d-flex flex-column align-items-start justify-content-center  rounded-bottom ">
                          <small class="text-muted">{card.date}</small>
                          <h5 className="card-title">{card.title}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Row>
        ))}
      </div>
      <SideBar/>
    </Row>
  )
}

export default Media
