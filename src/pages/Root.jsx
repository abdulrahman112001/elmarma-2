import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { NavbarComp } from "../components/Navbar";
import SwiperComp from "../components/SwiperComp";
import MyContext from "../hooks/MyContext";

const Root = () => {
  const [searchData, setSearchData] = useState();

  return (
    <div className="d-flex flex-column">
      {" "}
      <NavbarComp setSearchData={setSearchData} />
      <Container style={{ marginTop: "120px" }}>
        <SwiperComp />
        <MyContext.Provider value={searchData}>
          <Outlet searchData={searchData} />
        </MyContext.Provider>
      </Container>
      <Footer />
    </div>
  );
};

export default Root;
