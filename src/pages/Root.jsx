import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { NavbarComp } from "../components/Navbar";
import SwiperComp from "../components/SwiperComp";
import SideBar from "../components/SideBar";

const Root = () => {
  return (
    <div className="d-flex flex-column">
      {" "}
      <NavbarComp />
      <Container style={{marginTop:"120px"}}>
        <SwiperComp />
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Root;
