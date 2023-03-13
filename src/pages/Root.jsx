import React from "react"
import { Container,  Row } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import { NavbarComp } from "../components/Navbar"
import SideBar from "../components/SideBar"
import SwiperComp from "../components/SwiperComp"

const Root = () => {
  return (
    <div className="d-flex flex-column">
      {" "}
      <NavbarComp />
      <Container>
        <SwiperComp />
    
          <Outlet />
       
       
      </Container>
      <Footer />
    </div>
  )
}

export default Root
