/////////// IMPORTS
///
import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Settings } from "../setting";
import CustomNavbar from "./CustomNavbar";
///

/////////// HELPER VARIABLES & FUNCTIONS
///
///

///
export const NavbarComp = () => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const [isOpen, setOpen] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(true);

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
                <div className="d-flex gap-2 ">
                  <img src={logo} alt="" />
                </div>
              </Link>
            </div>
            <div className="w-50 mt-3">
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
          <nav className="navbar navbar-expand-lg p-0 ">
            <div className="container-fluid p-0 ">
              <div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  // data-bs-target="#offcanvasWithBothOptions"
                  // aria-controls="offcanvasWithBothOptions"
                  // aria-expanded={!isNavCollapsed ? true : false}
                  // aria-label="Toggle navigation"
                  // onClick={handleNavCollapse}
                  onClick={() => setOpen(true)}
                >
                  <span className="navbar-toggler-icon"> </span>
                </button>
              </div>
              <div className="coustom-sidebar  d-none">
                {isOpen ? (
                  <div className="main-custom-navbar ">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link
                        to="/"
                        className="flex-column justify-content-center gap-2 text-white "
                      >
                        <div className="d-flex gap-2">
                          <img src={logo} alt="" />
                        </div>
                      </Link>
                      <p
                        className="text-white fs-1"
                        onClick={() => setOpen(false)}
                      >
                        x
                      </p>
                    </div>

                    <CustomNavbar close={() => setOpen(false)} />
                  </div>
                ) : (
                  ""
                )}
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
                    style={{ left: " 33px " }}
                  ></button>
                </div>

                <div class="offcanvas-body w-100">
                  <ul className="d-flex justify-content-between m-0 flex-wrap w-100 p-0">
                    <div className="navbar-nav  mb-2 mb-lg-0  align-items-center">
                      <li
                        className="nav-item"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <Link
                          to={"matches"}
                          className="nav-link active text-white"
                          aria-current="page"
                        >
                          المباريات
                        </Link>
                      </li>

                      <li
                        className="nav-item"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <Link
                          to={"posts-home"}
                          className="nav-link active text-white"
                          aria-current="page"
                        >
                          الاخبار
                        </Link>
                      </li>
                      <li
                        className="nav-item"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <Link
                          to={"leagues"}
                          className="nav-link active text-white"
                          aria-current="page"
                        >
                          الدوريات والبطولات
                        </Link>
                      </li>

                      <li
                        className="nav-item"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <Link
                          to={"medias"}
                          className="nav-link active text-white"
                          aria-current="page"
                        >
                          ميديا المرمى
                        </Link>
                      </li>

                      <li
                        className="nav-item "
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <Link
                          to={""}
                          className="nav-link active text-white"
                          aria-current="page"
                        >
                          اخر الانتقالات
                        </Link>
                      </li>
                      
                      <li
                        className="nav-item "
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <Link
                          to={""}
                          className="nav-link active text-white"
                          aria-current="page"
                        >
                        
                        الرياضة النسائية
                        </Link>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="btn text-primary position-relative  d-flex align-items-end justify-content-end p-2 w-100"
                        >
                          <Link to="" className="">
                            متجر المرمي
                          </Link>
                          <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger">
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          id="youtube"
                        >
                          <path
                            fill="#c5c1c1"
                            d="M20.93 3.67 19 3.44a57 57 0 0 0-14 0l-1.9.24A3.51 3.51 0 0 0 0 7.15v9.7a3.51 3.51 0 0 0 3.07 3.47l1.9.24A57 57 0 0 0 12 21a57 57 0 0 0 7-.44l1.9-.24a3.51 3.51 0 0 0 3.1-3.47v-9.7a3.51 3.51 0 0 0-3.07-3.48Zm-4.16 8.75-7 4.5a.5.5 0 0 1-.27.08.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .77-.42l7 4.5a.5.5 0 0 1 0 .84Z"
                            data-name="Youtube 1"
                          ></path>
                        </svg>
                      </Link>
                      {/* <Link to="#" className="">
                        <svg xmlns="http://www.w3.org/2000/svg" id="linkedin">
                          <path d="M32.728 38.651H6.531c-3.459 0-6.273-2.808-6.273-6.26V6.26C.258 2.808 3.072 0 6.531 0h26.197C36.186 0 39 2.808 39 6.26v26.132c0 3.452-2.814 6.259-6.272 6.259Zm-19.379-6.698h.008V15.281H8.17v16.672h5.178ZM10.76 13.004a2.998 2.998 0 0 0 3.002-3.002A3.008 3.008 0 0 0 10.76 7a3.003 3.003 0 0 0-3.002 3.002 3.003 3.003 0 0 0 3.002 3.002Zm21.998 18.95v-9.14c0-4.491-.975-7.946-6.215-7.946-2.519 0-4.21 1.38-4.905 2.69h-.07v-2.277h-4.967v16.672h5.178v-8.25c0-2.176.413-4.281 3.11-4.281 2.652 0 2.691 2.488 2.691 4.421v8.11h5.178Z"></path>
                        </svg>
                      </Link> */}
                      <Link to="#" className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          data-name="Layer 1"
                          viewBox="0 0 128 128"
                          id="instagram"
                        >
                          <path
                            fill="#c5c1c1"
                            d="M104 8a16 16 0 0 1 16 16v80a16 16 0 0 1-16 16H24a16 16 0 0 1-16-16V24A16 16 0 0 1 24 8h80m0-8H24A24.07 24.07 0 0 0 0 24v80a24.07 24.07 0 0 0 24 24h80a24.07 24.07 0 0 0 24-24V24a24.07 24.07 0 0 0-24-24Z"
                          ></path>
                          <circle cx="82" cy="46" r="5"></circle>
                          <path
                            fill="#c5c1c1"
                            d="M64 48a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm0 24a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"
                          ></path>
                          <rect
                            width="64"
                            height="64"
                            x="32"
                            y="32"
                            fill="none"
                            stroke="#c5c1c1"
                            stroke-miterlimit="10"
                            stroke-width="8"
                            rx="12"
                            ry="12"
                          ></rect>
                        </svg>
                      </Link>
                      <Link to="#" className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          data-name="Layer 1"
                          viewBox="0 0 24 24"
                          id="facebook"
                        >
                          <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"></path>
                        </svg>
                      </Link>
                      <Link to="#" className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          id="twitter"
                        >
                          <path
                            fill="##c5c1c1"
                            d="M23.87 4.43a.5.5 0 0 0-.6-.1 4.76 4.76 0 0 1-.75.27 4.85 4.85 0 0 0 .85-1.6.5.5 0 0 0-.77-.53 10.59 10.59 0 0 1-2.53 1A5.05 5.05 0 0 0 16.5 2a5.71 5.71 0 0 0-3 .93C11.6 4 11.27 6.47 11.41 8a13 13 0 0 1-9-4.76A.53.53 0 0 0 2 3a.5.5 0 0 0-.4.25 5.35 5.35 0 0 0 .22 5.7c-.15-.1-.31-.22-.47-.35A.5.5 0 0 0 .5 9 5.73 5.73 0 0 0 3 13.64l-.39-.11a.5.5 0 0 0-.61.67 6.48 6.48 0 0 0 4.19 3.62A9.22 9.22 0 0 1 .56 19a.5.5 0 0 0-.31.93A15.2 15.2 0 0 0 8 22a13.35 13.35 0 0 0 10-4.63 13.63 13.63 0 0 0 3.65-9.92A9.81 9.81 0 0 0 23.92 5a.5.5 0 0 0-.05-.57ZM8 21.5Z"
                          ></path>
                        </svg>
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
