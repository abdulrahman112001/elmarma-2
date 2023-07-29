/////////// IMPORTS
///
import { useState } from "react";

import { t } from "i18next";
import { BiMenuAltLeft } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";

import { FiSearch } from "react-icons/fi";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import shop from "../assets/shop.png";
import DarkModeToggle from "../hooks/DarkMode";
import CustomNavbar from "./CustomNavbar";
///
import { useNavigate } from "react-router-dom";
import { apiClient } from "../utils/axios-util";

/////////// HELPER VARIABLES & FUNCTIONS
///
///

///
export const NavbarComp = ({ setSearchData }) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const [activeItem, setActiveItem] = useState("");

  const [isOpen, setOpen] = useState(false);

  ///
  /////////// STATES
  ///
  ///
  /////////// SIDE EFFECTS
  ///

  const { data } = useQuery({
    queryKey: [`social`],
    queryFn: async () => {
      const res = await apiClient.get(`setting`);
      return res.data.data;
    },
  });
  const navigate = useNavigate();

  ///
  /////////// IF CASES
  ///
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  const searchFun = (e) => {
    setSearchData(e);
  };

  ///
  /////////// FUNCTIONS & EVENTS
  ///

  ///
  return (
    <>
      <div className="bg-dc">
        <div className="container-fluid">
          <div className="d-flex align-items-center  flex-wrap  main-bar">
            <div className="d-flex  logo my-2 pc">
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

            <div className="w-50 mt-3 m-auto">
              <div className="inputGroup mx-5">
                <span
                  onClick={() => navigate("/result-search")}
                  className="inputGroupText"
                  style={{
                    position: "absolute",
                    left: "0",
                    height: "100%",
                    cursor: "pointer",
                  }}
                >
                  <FiSearch />
                </span>
                <input
                  type="text"
                  className="formControl"
                  placeholder={t("search")}
                  aria-label="search"
                  onChange={(e) => searchFun(e.target.value)}
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
                  <BiMenuAltLeft
                    style={{ fontSize: "40px", color: "#0573f6 " }}
                  />
                  {/* <span className="navbar-toggler-icon"> </span> */}
                </button>
              </div>
              {/* for mobile */}
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
                <div className="offcanvas-header">
                  <Link
                    to="/"
                    className="flex-column justify-content-center gap-2 text-white "
                  >
                    <div className="d-flex gap-2">
                      <img className="w-100" src="images/logo.png" alt="logo" />
                    </div>
                  </Link>
                  <button
                    type="button"
                    className="position-absolut btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    style={{ left: " 33px " }}
                  ></button>
                </div>

                <div className="offcanvas-body w-100">
                  <div className="d-flex align-items-center  logo  ">
                    <div>
                      <button
                        className="navbar-toggler-home"
                        type="button"
                        data-bs-toggle="offcanvas"
                        onClick={() => setOpen(true)}
                      >
                        <HiMenu style={{ fontSize: "40px", color: "#fff " }} />
                      </button>
                    </div>
                    <Link
                      to="/"
                      className="flex-column justify-content-center gap-2 text-white "
                    >
                      <div className="d-flex gap-2 ">
                        <img className="w-100" src={logo} alt="logo navbar" />
                      </div>
                    </Link>
                  </div>
                  {/* for pc */}
                  <div className="coustom-sidebar">
                    {isOpen ? (
                      <div className="main-custom-navbar ">
                        <div className="d-flex justify-content-between align-items-center">
                          <Link
                            to="/"
                            className="flex-column justify-content-center gap-2 text-white "
                          >
                            <div className="d-flex gap-2">
                              <img className="" src={logo} alt="" />
                            </div>
                          </Link>
                          <p
                            className="text-white fs-1 "
                            onClick={() => setOpen(false)}
                            style={{ cursor: "pointer" }}
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

                  <ul className="d-flex justify-content-between m-0 flex-wrap w-100 p-0">
                    <div className="navbar-nav  mb-2 mb-lg-0  align-items-center m-auto">
                      <li
                        className={`nav-item ${
                          activeItem === "matches" ? "active" : ""
                        }`}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={() => setActiveItem("matches")}
                      >
                        <Link
                          to={"matches"}
                          className="nav-link active text-white"
                          aria-current="page"
                        >
                          {t("Matches")}
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
                          {t("News")}
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
                          {t("Leagues")}
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
                          {t("Elmarma Media")}
                        </Link>
                      </li>

                      <li
                        className="nav-item "
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <Link
                          to={"last-transfer"}
                          className="nav-link active text-white"
                          aria-current="page"
                        >
                          {t("Latest Transfers")}
                        </Link>
                      </li>

                      <li
                        className="nav-item "
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <Link
                          to={"women's-sports"}
                          className="nav-link active text-white"
                          aria-current="page"
                        >
                          {t("other sports")}
                        </Link>
                      </li>
                      <li
                        className="nav-item "
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <Link
                          to={"aboutUs"}
                          className="nav-link active text-white"
                          aria-current="page"
                        >
                          {t("About Us")}
                        </Link>
                      </li>
                      <li
                        className="nav-item "
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <Link
                          to={"terms-and-condition"}
                          className="nav-link active text-white"
                          aria-current="page"
                        >
                          {t("terms And condition")}
                        </Link>
                      </li>
                      <li
                        className="nav-item "
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <Link
                          to={"contact-us"}
                          className="nav-link active text-white"
                          aria-current="page"
                        >
                          {t("contact us")}
                        </Link>
                      </li>
                    </div>
                    <div className=" d-flex gap-3 Social align-items-end justify-content-end p-2 ">
                      {" "}
                      {/* <Settings /> */}
                      <DarkModeToggle />
                      <Link>
                        <li className="nav-item ">
                          <button
                            type="button"
                            className="btn text-primary position-relative  d-flex align-items-end justify-content-end w-100"
                          >
                            <Link to="" className="">
                              <img
                                src={shop}
                                alt=""
                                style={{ width: "20px" }}
                              />
                            </Link>
                            <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger">
                              new
                              <span className="visually-hidden">
                                unread messages
                              </span>
                            </span>
                          </button>
                        </li>
                      </Link>
                      {/* youtupe */}
                      <Link
                        onClick={() => handleLinkClick(data.skype_link)}
                        target="_blank"
                        className=""
                      >
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
                      <Link
                        onClick={() => handleLinkClick(data.inst_link)}
                        className=""
                      >
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
                      <Link
                        onClick={() => handleLinkClick(data.fb_link)}
                        className=""
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          data-name="Layer 1"
                          viewBox="0 0 24 24"
                          id="facebook"
                        >
                          <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"></path>
                        </svg>
                      </Link>
                      <Link
                        onClick={() => handleLinkClick(data.tw_link)}
                        className=""
                      >
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
