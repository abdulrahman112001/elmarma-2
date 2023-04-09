/////////// IMPORTS
///
import { Container, Row } from "react-bootstrap"
import { Helmet } from "react-helmet"
import ButtonGroups from "../components/ButtonGroups"
import Footer from "../components/Footer"
import { NavbarComp } from "../components/Navbar"

import SideBar from "../components/SideBar"
import SwiperComp from "../components/SwiperComp"
import Posts from "./Posts"
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Home = ({ title }) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// IF CASES
  ///

  ///
  /////////// EVENTS
  ///

  ///
  /////////// FUNCTIONS
  ///

  ///
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavbarComp />
     
        <SwiperComp />
   
      <Footer />
    </>
  )
}
