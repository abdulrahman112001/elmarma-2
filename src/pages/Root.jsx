import React from "react"
import { Container,  Row } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import { Navbar } from "../components/Navbar"
import SideBar from "../components/SideBar"
import SwiperComp from "../components/SwiperComp"

const Root = () => {
  return (
    <div className="d-flex flex-column">
      {" "}
      <Navbar />
      <Container>
        <SwiperComp />
    
          <Outlet />
       
       
      </Container>
      <Footer />
    </div>
  )
}

export default Root
