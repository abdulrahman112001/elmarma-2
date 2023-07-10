/////////// IMPORTS
///
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ButtonGroups from "../components/ButtonGroups";
import Footer from "../components/Footer";
import { NavbarComp } from "../components/Navbar";

import SideBar from "../components/SideBar";
import SwiperComp from "../components/SwiperComp";
import Posts from "./Posts";
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
        <title>الرئيسية</title>
        <meta
          name="description"
          content="Stay up-to-date with the latest football news, matches, and clubs on Elmarma."
        />
        <meta
          name="keywords"
          content="football, news, matches, clubs, Elmarma , المرمى , ماتشات  ,  كره ,كرة قدم  , ألمرمى  ,  الاهلي "
        />
      </Helmet>
      <NavbarComp />

      <SwiperComp />

      <Footer />
    </>
  );
};
