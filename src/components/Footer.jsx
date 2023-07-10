import React from "react"
import { ModalFooter } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AiFillYoutube } from "react-icons/ai"
import { FaInstagram } from "react-icons/fa"
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs"
import logo from "../assets/logo.png";
import { useQuery } from "react-query"

const Footer = () => {
  const { data } = useQuery('aboutUs');

  return (
    <ModalFooter className="footer  bg-dark flex-column justify-content-center gap-2 text-white p-3">
      <div className="d-flex gap-2">
        {/* <div className="d-flex flex-column text-center">
          <h2>المرمي</h2>
          <p>موقع لأخبار الكورة</p>
        </div> */}
        <img src={logo} alt="" />
      </div>
      <div className=" d-flex gap-5 RoutLink flex-wrap justify-content-center">
        <Link to={"matches"} className="">
          المباريات
        </Link>
        <Link to={"posts-home"}>الأخبار</Link>
        <Link to={"leagues"}>الدوريات و البطولات</Link>
        <Link to={"medias"}>ميديا المرمي</Link>
        <Link to={"last-transfer"}>اخر الانتقالات</Link>
      </div>
      <div className=" d-flex gap-3 Social">
        <Link to="#" className="">
          <AiFillYoutube/>
        </Link>
        <a href={`${data?.linkedin_link}`} target="_blank"  className="">
          <BsLinkedin/>
        </a>
        <Link to={`/${data?.inst_link}`} className="">
          <FaInstagram/>
        </Link>
        <Link to={`/${data?.fb_link}`} className="">
          <BsFacebook/>
        </Link>
        <Link to={`/${data?.tw_link}`} className="">
          <BsTwitter/>
        </Link>
      </div>
      <p>جميع الحقوق محفوظة لدي @2023</p>
    </ModalFooter>
  )
}

export default Footer
