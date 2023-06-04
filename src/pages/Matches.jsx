import React, { useState } from "react";
import { Row } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { CgFileDocument } from "react-icons/cg";
import { useQuery } from "react-query";
import { A11y, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import MainMatches from "../components/MainMatches";
import SideBar from "../components/SideBar";
import { apiClient } from "../utils/axios-util";

const Matches = () => {
  const [formateValue, setFormateValue] = useState();
  console.log(
    "🚀 ~ file: Matches.jsx:19 ~ Matches ~ formateValue:",
    formateValue
  );

  const [activeDay, setActiveDay] = useState();

  const [date, setDate] = useState(new Date());

  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const sendDayToBAck = (day) => {
    const today = new Date(); // Get the current date
    const year = today.getFullYear(); // Get the current year
    const month = today.getMonth(); // Get the current month
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate(); // Get the last day of the current month

    // Increment the day value by 1 and handle cases where it exceeds the last day of the month
    const nextDay = day > lastDayOfMonth ? 1 : day + 1;

    // Create a new Date object using the current year, month, and the updated day
    const selectedDate = new Date(year, month, nextDay);

    // Format the date as "year-month-day"
    const formattedDate = selectedDate.toISOString().split("T")[0];

    setFormateValue(formattedDate);
    setActiveDay(day);

    return formattedDate;
  };

  const { data: allMatches, isLoading } = useQuery({
    queryKey: [`all-matches/${formateValue}`],
    queryFn: async () => {
      const res = await apiClient.get(`match-center?date=${formateValue}`);
      return res.data;
    },
  });

  const MatchesCards = allMatches ? allMatches : [];
  const matchNumber = 10;
  const chambinNumber = 4;
  return (
    <>
      {/* <SwiperComp /> */}

      <Row className=" p-4">
        <div className="col-xl-8 col-md-6  col-xs-12  main  ">
          <Row>
            <div className="d-flex align-items-center justify-content-between border-bottom">
              <div className="d-flex align-items-center gap-1 ">
                <CgFileDocument
                  style={{ width: "24px", height: "24px", color: "#0573F6" }}
                />
                <h4 className="fs-4 my-3">المباريات</h4>
              </div>
            </div>
          </Row>
          <Row>
            <div className="d-flex align-items-center justify-content-between my-3 text-muted ">
              <p>{/* مباريات يوم {day} {date} */}</p>
              <p>
                {" "}
                {matchNumber}
                مباراة - {chambinNumber} بطولات
              </p>
            </div>
          </Row>

          <Swiper
            className="text-white matches"
            modules={[Navigation, A11y]}
            spaceBetween={5}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 6,
              },
              768: {
                slidesPerView: 6,
              },
              1000: {
                slidesPerView: 10,
              },
              1500: {
                slidesPerView: 10,
              },
            }}
          >
            {days.map((day) => (
              <SwiperSlide
                className={activeDay === day ? "bg-primary text-white" : ""}
                style={{ cursor: "pointer" }}
                onClick={() => sendDayToBAck(day)}
              >
                {day.toString()}
              </SwiperSlide>
            ))}
          </Swiper>

          <Row>
            <MainMatches MatchesCards={MatchesCards} loadingMatch={isLoading} />
          </Row>
        </div>

        <SideBar />
      </Row>
    </>
  );
};

export default Matches;
