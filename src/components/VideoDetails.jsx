/////////// IMPORTS
///
import React from "react"
import { Badge, Card, Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useQuery } from "react-query"
import axios from "axios"
import SideBar from "./SideBar"
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const VideoDetails = ( { ImgOverlay } ) =>
{
    const { "*":id } = useParams()
       const { data: VideoDetails } = useQuery({
         queryKey: ["todos", id],
         queryFn: async () => {
           const res = await axios.get(
             `https://elmarma.com/api/v1/details-video/video/${id}`
           )
           return res.data.data
         },
       })
       const VideoDetailsData = VideoDetails ? VideoDetails : []
       console.log("🚀 ~ file: VIdeoDetails.jsx:31 ~ VideoDeailsData:", VideoDetailsData)

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
    <Row className="p-4">
      <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
        {VideoDetailsData.map((item) => (
            <Card style={{ border: "0" }}>
            <div className="position-relative">
                    <h3>{ item?.title }</h3>
                    <div>

                        <span>{item?.date}</span>
                    <span className="mx-2">{ item?.time }</span>
                    </div>
                    

              <video width="320" height="240" controls>
                <source src="movie.mp4" type="video/mp4" />
                    </video>
                    
                    <hr/>

            <Card.Img variant="top" src={""} alt="..." />
            </div>

                <Card.Body>
                  <Card.Title className="lightGreen"></Card.Title>
                  <Card.Text className="fs-6"></Card.Text>
                </Card.Body>
                <Card.Footer style={{ border: "0", background: "transparent" }}>
                  <small className="text-muted"></small>
                </Card.Footer>
  
       
          </Card>
        ))}

        {/* <OthersPosts DetailsPosts={DetailsPosts} /> */}
      </div>

      <SideBar />
    </Row>
  </>
)
}