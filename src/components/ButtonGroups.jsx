import React from "react"
import { Col, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { Link } from "react-router-dom"

const ButtonGroups = () => {



  const getYasterDay = (x) =>{
  const today =new Date()
   const yesterday = new Date(today)
   yesterday.setDate(yesterday.getDate() - 1)
   today.toDateString()
   yesterday.toDateString()
   console.log( yesterday.toDateString())
  }
  
  const getNextDay = (x) =>{
    const today =new Date()
     const yesterday = new Date(today)
     yesterday.setDate(yesterday.getDate() + 1)
     today.toDateString()
     yesterday.toDateString()
     console.log( yesterday.toDateString())
    }

    const getNewDat = (x) =>{
      const today =new Date()
       const yesterday = new Date(today)
       yesterday.setDate(yesterday.getDate())
       today.toDateString()
       yesterday.toDateString()
       console.log( yesterday.toDateString())
      }
    


  return (
    <Row className="">
      <Col lg={9}>
        <ButtonGroup
          aria-label="Basic"
          style={{
            filter: "drop-shadow(0.5px 0.5px 4px rgba(0, 0, 0, 0.25))",
            borderRadius: "5px",
          }}
          className="ButtonGroups d-flex align-items-end justify-content-end m-auto w-50"
        >
          <Button className=" py-2 px-5 text-dark" variant="light" onClick={()=> console.log(getYasterDay(new Date()))}>
            امس
           
          </Button>
          <Button className=" py-2 px-5  text-dark" variant="light" onClick={()=> console.log(getNewDat(new Date()))}>
            اليوم
          </Button>
          <Button className=" py-2 px-5 text-dark" variant="light" onClick={()=> console.log(getNextDay(new Date()))}>
            غدا
          </Button>
        </ButtonGroup>
      </Col>
      <Col lg={3} >
        <Link to="" className="d-flex align-items-end justify-content-end all-matches-btn">
          <div className="d-flex bg-primary rounded-3  align-items-center justify-content-center">
            <p className="text-white m-0 p-2">جميع المباريات</p>
            <MdKeyboardArrowLeft
              style={{ color: "white", width: "20px", height: "20px" }}
            />
          </div>
        </Link>
      </Col>
    </Row>
  )
}

export default ButtonGroups
