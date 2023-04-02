/////////// IMPORTS
///
import { Settings } from "../setting"
import { Link } from "react-router-dom"
import { AiFillYoutube } from "react-icons/ai"
import { FaInstagram } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs" /////////// Types
import { useState } from "react"
import logo from "../assets/logo.png"
///

/////////// HELPER VARIABLES & FUNCTIONS
///
///
const NaveBarLinks = [
  {
    id: crypto.randomUUID(),
    title: "المباريات",
    Link: "matches",
    subMenu: [
      { title: "المباريات", Link: "matches" },
      { title: "المباريات", Link: "matches" },
      { title: "المباريات", Link: "matches" },
      { title: "المباريات", Link: "matches" },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "الاخبار",
    Link: "posts-home",
    subMenu: [{ title: "الاخبار", Link: "matches" }],
  },
  {
    id: crypto.randomUUID(),
    title: "الدوريات والبطولات",
    Link: "leagues",
    subMenu: [{ title: "الدوريات", Link: "matches" }],
  },
  {
    id: crypto.randomUUID(),
    title: "ميديا المرمى",
    Link: "medias",
    subMenu: [{ title: "ميديا", Link: "matches" }],
  },
  {
    id: crypto.randomUUID(),
    title: " اخر الانتقالات",
    Link: "",
    subMenu: [{ title: "الانتقالات", Link: "matches" }],
  },
]

///
export const NavbarComp = () => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  const [isNavCollapsed, setIsNavCollapsed] = useState(false)

  const handleNavCollapse = () => setIsNavCollapsed(true)

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
                  <img src={logo} alt="" />
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
          <nav className="navbar navbar-expand-lg w-100 ">
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
                className="offcanvas offcanvas-start align-items-center h-100"
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

                <div class="offcanvas-body h-100">
                  <ul className="d-flex justify-content-between m-0 flex-wrap">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0 m-auto gap-2 align-items-center">
                      {NaveBarLinks.map((navLink) => (
                        <>
                          {navLink.subMenu ? (
                            <div className=" dropdown-center  w-100 rounded-2">
                              <button
                                type="button"
                                className="btn nav-ite p-2 bg-transparent border-0  text-white dropdown-toggle "
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {navLink.title}
                              </button>
                              <ul className="dropdown-menu p-0 ulSubMenu">
                                {navLink.subMenu.map((sub, i) => (
                                  <li
                                    key={i}
                                    className="  bg-white m-0 p-1 subMenu dropdown-item"
                                    type="button"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                  >
                                    <Link
                                      to={sub.Link}
                                      className=" active"
                                      aria-current="page"
                                    >
                                      {sub.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <li
                              key={navLink.id}
                              className="nav-item mx-4"
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
                          )}
                        </>
                      ))}
                    </div>
                    <div className=" d-flex flex-md-row flex-column gap-3 Social align-items-center justify-content-end p-2 ">
                      <li className=" mx-4 w-100 bg-transparent">
                        <button
                          type="button"
                          className="btn text-primary position-relative  d-flex align-items-end justify-content-end p-2 w-100"
                        >
                          <Link className="w-100" to="">
                            متجر المرمي
                          </Link>
                          <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger">
                            new
                          </span>
                        </button>
                      </li>
                      <div className=" d-flex gap-3 Social align-items-center justify-content-end p-2 ">
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
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}