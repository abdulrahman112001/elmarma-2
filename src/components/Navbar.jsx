/////////// IMPORTS
///
import { Settings } from "../setting"
import { Link } from "react-router-dom"
import { AiFillYoutube } from "react-icons/ai"
import { FaInstagram } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs" /////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Navbar = () => {
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
                  <img  src="images/logo-final-removebg-preview.png" alt="" />
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
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                <span className="navbar-toggler-icon"> </span>
              </button>

              <div
                className="offcanvas offcanvas-end align-items-center"
                data-bs-scroll="true"
            
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <ul className="d-flex justify-content-between m-0">
                  <div className="navbar-nav me-auto mb-2 mb-lg-0 m-auto align-items-center">
                  <li className="nav-item mx-3">
                  <Link className="nav-link text-white" to="/">
                      الاخبار
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link
                      to="matches"
                      className="nav-link active text-white"
                      aria-current="page"
                    >
                      المباريات
                    </Link>
                  </li>
           
                  <li className="nav-item mx-3">
                  <Link
                      to="matches-Championships"
                      className="nav-link active text-white"
                      aria-current="page"
                    >
                          الدوريات والبطولات
                    </Link>

                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link text-white" href="/">
                      ميديا المرمى
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link text-white" href="/">
                      اخر الانتقالات
                    </a>
                  </li>
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
                        <span className="visually-hidden">unread messages</span>
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
          </nav>
        </div>
      </div>
    </>
  )
}
