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
import { apiClient, apiClientEn } from "../utils/axios-util";
import { useIsRTL } from "../hooks/useIsRTL";
import { Helmet } from "react-helmet";

const Matches = () => {
  const isRTL = useIsRTL();

  const [formateValue, setFormateValue] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const currentDate = new Date();
  const [activeDay, setActiveDay] = useState(currentDate.getDate());

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

  // const { data: allMatchesEn, isLoading: loadnigMathchEn } = useQuery( {
  //   queryKey: [ `all-matchesEN/${ formateValue }` ],
  //   queryFn: async () =>
  //   {
  //     const res = await apiClientEn.get(
  //       `https://v3.football.api-sports.io/fixtures?date=${formateValue}`
  //     )
  //     return res.data.response

  //   },
  // } )

  const MatchesCards = allMatches || [];

  const matchNumber = 10;
  const chambinNumber = 4;
  return (
    <>
      <Helmet>
        <title>المباريات</title>
        <meta
          name="description"
          content="Stay up-to-date with the latest football news, matches, and clubs on Elmarma."
        />
        <meta
          name="keywords"
          content="football, news, matches, clubs, Elmarma , المرمى , ماتشات  ,  كره ,كرة قدم  , ألمرمى  ,  الاهلي "
        />
      </Helmet>

      <Row className="p-4 matches-main">
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
            spaceBetween={2}
          //initialSlide={Math.min(activeDay - 1, days.length - 1)}
            loop={true}
          //  loopedSlides={days.length}
            navigation
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
              1500: {
                slidesPerView: 7,
              },
            }}
          >
            {days.map((day) => (
              <SwiperSlide
                key={day}
                className={
                  activeDay === day ? "bg-primary text-white active-slide" : ""
                }
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
