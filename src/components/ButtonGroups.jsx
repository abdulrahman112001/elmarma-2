import { t } from "i18next";
import moment from "moment";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

const ButtonGroups = ({setFormateValue}) => {

  const [active, setActive] = useState(false);

  const getDay =(day)=>{
    // setActive(!active);
   const  today =new Date()
   const  yesterday = new Date(today)
   const   currentDate = moment(yesterday.setDate(yesterday.getDate() + day) )
   const formattedDate = currentDate.format("MM/DD/YYYY")
   setFormateValue(formattedDate)
  }

    
  return (
    <Row className="">
      <Col lg={9}>
        <ButtonGroup
          aria-label="Basic"
          style={{
            filter: "drop-shadow(0.5px 0.5px 4px rgba(0, 0, 0, 0.25))",
            borderRadius: "5px",
          }}
          className="ButtonGroups d-flex align-items-end justify-content-end m-auto w-50"
        >
          <Button
             className={active ? "bg-danger" :` py-2 px-5  text-dark`}
            variant="light"
            onClick={() => getDay(-1)}
          >
            {t("Yesterday")}
          </Button>
          <Button
            className={active ? "bg-danger" :` py-2 px-5  text-dark`}
            variant="light"
            onClick={() => getDay(0)}
          >
            {t("Today")}
          </Button>
          <Button
             className={active ? "bg-danger" :` py-2 px-5  text-dark`}
            variant="light"
            onClick={() => getDay(1)}
          >
            {t("Tomorrow")}
          </Button>
        </ButtonGroup>
      </Col>
      <Col lg={3}>
        <Link
          to="/matches"
          className="d-flex align-items-end justify-content-end all-matches-btn"
        >
          <div className="d-flex bg-primary rounded-3  align-items-center  justify-content-center">
            <p className="text-white m-0 p-2"> {t("All Matches")}</p>
            <MdKeyboardArrowLeft
              style={{ color: "white", width: "20px", height: "20px" }}
            />
          </div>
        </Link>
      </Col>
    </Row>
  );
};

export default ButtonGroups;
