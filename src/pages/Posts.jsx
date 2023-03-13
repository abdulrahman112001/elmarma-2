import React, { useMemo } from "react"
import { CardGroup, Row } from "react-bootstrap"
import { CgFileDocument } from "react-icons/cg"
import PostsCard from "../components/PostsCard"
import { useQuery } from "react-query"
import axios from "axios"
import SideBar from "../components/SideBar"
const Posts = () => {
  const {
    isLoading,
    error,
    data: news,
    isFetching,
  } = useQuery("newsData", () =>
    axios
      .get(`https://elmarma.com/api/v1/posts?type=normal-post`)
      .then((res) => res.data.data)
  )
  const postsData = news ? news : []
console.log(postsData)


const {

  data: video,

} = useQuery("vidoeData", () =>
  axios
    .get(`https://elmarma.com/api/v1/all-teams`)
    .then((res) => res.data.data)
)
const vidoeData = video ? video : []
console.log("vidoeData",vidoeData)


  


  return (
    <Row className=" p-4">
      <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
        <Row>
          <div className="d-flex align-items-center gap-1">
            <CgFileDocument
              style={{ width: "24px", height: "24px", color: "#0573F6" }}
            />
            <h4 className="fs-4 my-3">الاخبار</h4>
          </div>
        </Row>
        <Row>
          <CardGroup>
            <PostsCard posts={postsData} xs={12} lg={6} xl={4} />
          </CardGroup>
        </Row>
      </div>
      <SideBar posts={postsData}  />
    </Row>
  )
}

export default Posts
