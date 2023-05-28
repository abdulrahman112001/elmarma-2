import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { NavbarComp } from "../components/Navbar";

const SettingDetails = () => {
  return (
    <div className="d-flex flex-column">
      <NavbarComp />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default SettingDetails;
