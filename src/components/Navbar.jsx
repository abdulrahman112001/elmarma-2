/////////// IMPORTS
///
import { Settings } from "../setting";
import { Link } from "react-router-dom";
import { AiFillYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs"; /////////// Types
import Nav from "react-bootstrap/Nav";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from "react";
///

/////////// HELPER VARIABLES & FUNCTIONS
///
///
const NaveBarLinks = [
  { id: crypto.randomUUID(), title: "المباريات", Link: "matches" },
  { id: crypto.randomUUID(), title: "الاخبار", Link: "posts-home" },
  { id: crypto.randomUUID(), title: "الدوريات والبطولات", Link: "leagues" },
  { id: crypto.randomUUID(), title: "ميديا المرمى", Link: "medias" },
  { id: crypto.randomUUID(), title: " اخر الانتقالات", Link: "" },
]

///
export const NavbarComp = () => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(true);;
console.log(isNavCollapsed)

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
  /////////// FUNCTIONS & EVENTS
  ///

  ///
  return (
    <>
      <div className="bg-dc">
        <div className="container-fluid">
          <div className="d-flex align-items-center gap-5 flex-wrap  main-bar">
            <div className="d-flex  logo my-2">
              {/* logo */}
              <Link
                to="/"
                className="flex-column justify-content-center gap-2 text-white "
              >
                <div className="d-flex gap-2">
                  <img src="images/logo.png" alt="" />
                </div>
              </Link>
            </div>
            <div className="w-50">
              <div className="inputGroup mx-5">
                <span className="inputGroupText">
                  <FiSearch />
                </span>
                <input
                  type="text"
                  className="formControl"
                  placeholder="بحث"
                  aria-label="search"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////// */}
          <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid ">
              <div>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
                aria-expanded={!isNavCollapsed ? true : false} 
                aria-label="Toggle navigation"
                 onClick={handleNavCollapse}
                
              >
                <span className="navbar-toggler-icon"> </span>
              </button>
              </div>

              <div
                className="offcanvas offcanvas-start align-items-center"
                data-bs-scroll="true"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div class="offcanvas-header">
                <Link
                to="/"
             
                className="flex-column justify-content-center gap-2 text-white "
              >
                <div className="d-flex gap-2">
                  <img src="images/logo.png" alt="" />
                </div>
              </Link>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    className="position-absolute"
                    style={{ 'left':' 33px '}}
                  ></button>
                </div>

                    <div class="offcanvas-body">
                    <ul className="d-flex justify-content-between m-0 flex-wrap">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0 m-auto align-items-center">
                             {NaveBarLinks.map((navLink) => (
                        <li
                          key={navLink.id}
                          className="nav-item mx-3"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        >
                          <Link
                            to={navLink.Link}
                            className="nav-link active text-white"
                            aria-current="page"
                          >
                            {navLink.title}
                          </Link>
                        </li>
                      ))}
                          <li>
                            <button
                              type="button"
                              className="btn text-primary position-relative  d-flex align-items-end justify-content-end p-2 w-100"
                            >
                              <Link to="" className="">
                                متجر المرمي
                              </Link>
                              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                new
                                <span className="visually-hidden">
                                  unread messages
                                </span>
                              </span>
                            </button>
                          </li>
                        </div>
                        <div className=" d-flex gap-3 Social align-items-start justify-content-end p-2 ">
                          {" "}
                          <Settings />
                          <Link to="#" className="">
                            <AiFillYoutube />
                          </Link>
                          <Link to="#" className="">
                            <BsLinkedin />
                          </Link>
                          <Link to="#" className="">
                            <FaInstagram />
                          </Link>
                          <Link to="#" className="">
                            <BsFacebook />
                          </Link>
                          <Link to="#" className="">
                            <BsTwitter />
                          </Link>
                        </div>
                      </ul>
                    </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
