import React from "react"
import { Row } from "react-bootstrap"
import { CgFileDocument } from "react-icons/cg"

const Leagues = () => {
  const leagues = [
    {
      header: "الدوريات القارية",
      info: [
        { src: "images/League2.png", title: "دوري أبطال اسيا" },
        { src: "images/League2.png", title: "دوري أبطال اسيا" },
        { src: "images/League2.png", title: "دوري أبطال اسيا" },
        { src: "images/League2.png", title: "دوري أبطال اسيا" },
        { src: "images/League2.png", title: "دوري أبطال اسيا" },
      ],
    },
    {
      header: "الدوريات المحلية",
      info: [{ src: "images/League2.png", title: "الدوري المصري" }],
    },
  ]
  return (
    <Row className=" p-4">
      <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
        <Row>
          <div className="d-flex align-items-center justify-content-between border-bottom mb-5">
            <div className="d-flex align-items-center gap-1 ">
              <CgFileDocument
                style={{ width: "24px", height: "24px", color: "#0573F6" }}
              />
              <h4 className="fs-4 my-3">الدوريات و البطولات</h4>
            </div>
          </div>
        </Row>
        {leagues.map((league) => (
          <Row key={league.header}>
            <div className="d-flex flex-column mb-5">
              <div
                className="  px-3 py-1 rounded-top border-bottom border-2"
                style={{
                  width: "fit-content",
                  backgroundColor: "#F2F2F2",
                  boxShadow: " 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);",
                }}
              >
                <h4 className="fs-4">{league.header}</h4>
              </div>
              <div
                className="rounded-bottom p-3 shadow"
                style={{
                  backgroundColor: "#F2F2F2",
                }}
              >
                <div className="row row-cols-1 row-cols-md-4 g-4 p-3">
                  {league?.info.map((card) => (
                    <div key={card.title} className="col rounded-max">
                      <div className="card h-100 rounded-max">
                        <div className="d-flex align-items-center justify-content-center">
                          <img
                            style={{ objectFit: "contain" }}
                            src={card.src}
                            className="card-img-top w-50 p-2"
                            alt="..."
                          />
                        </div>
                        <div className="card-body  bg-dark text-white d-flex align-items-center justify-content-start rounded-bottom p-0 ">
                          <h6 className="card-title m-auto p-1">{card.title}</h6>
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
    </Row>
  )
}

export default Leagues
