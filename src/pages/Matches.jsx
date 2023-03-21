import React, { forwardRef, useState } from "react"
import { Button, Dropdown, Row } from "react-bootstrap"
import { CgFileDocument } from "react-icons/cg"
import { FaCalendar } from "react-icons/fa"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import SideBar from "../components/SideBar"
import { useQuery } from "react-query"
import axios from "axios"
import MatchComp from "../components/MatchComp"
const Matches = () => {
  // dateBaker
  const [startDate, setStartDate] = useState(new Date())

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Button
      className="custom-btn border-0 d-flex gap-2 align-items-center justify-content-center"
      onClick={onClick}
      ref={ref}
    >
      {value} <FaCalendar size={15} />
    </Button>
  ))
  // dateBaker
  // helper var
  const day = 14
  const date = "الخميس"
  const matchNumber = 10
  const chambinNumber = 4
  // const MatchesCard = [
  //   {
  //     header: "الدوري الانجليزي",
  //     imgSrcFirst: [
  //       {
  //         Country: "روما",
  //         img: "https://media.gemini.media/img/yallakora/IOSTeams//120//2021/9/8/Elahly2021_9_8_16_46.jpg",
  //       },
  //     ],
  //     MainTitle: "الذهاب - دور ال 16",
  //     status: "لم تلعب بعد",
  //     imgSrcSecond: [
  //       {
  //         Country: "روما",
  //         img: "https://media.gemini.media/img/yallakora/IOSTeams//120//2018/8/18/Mamelodi2018_8_18_23_12.jpg",
  //       },
  //     ],
  //     badgeColor: " #615F59",
  //     info: [
  //       { place: "ستاد برج العرب", time: "02:36 PM GMT+", day: "16-2-2023" },
  //     ],
  //   },
  // ]

   const { data } = useQuery("repoData", () =>
     axios.get("https://elmarma.com/api/v1/all-matches").then((res) => {
       var data = res.data.data.filter(
         (item) => !item?.id.startsWith("https://")
       )
       return data
     })
   )

   const MatchesCards = data ? data : []

  return (
    <Row className=" p-4">
      <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
        <Row>
          <div className="d-flex align-items-center justify-content-between border-bottom">
            <div className="d-flex align-items-center gap-1 ">
              <CgFileDocument
                style={{ width: "24px", height: "24px", color: "#0573F6" }}
              />
              <h4 className="fs-4 my-3">المباريات</h4>
            </div>
            <div className="d-flex align-items-center gap-3 ">
              <Dropdown className="text-dark custom-btn">
                <Dropdown.Toggle variant="white" id="dropdown-basic">
                  كل البطولات
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<ExampleCustomInput />}
              />
            </div>
          </div>
        </Row>
        <Row>
          <div className="d-flex align-items-center justify-content-between my-3 text-muted ">
            <p>
              مباريات يوم {day} {date}
            </p>
            <p>
              {" "}
              {matchNumber}
              مباراة - {chambinNumber} بطولات
            </p>
          </div>
        </Row>
        <Row>days Swiper</Row>
        <Row>
         <MatchComp MatchesCards={MatchesCards} />
          
        </Row>
      </div>
    <SideBar />
    </Row>
  )
}

export default Matches
