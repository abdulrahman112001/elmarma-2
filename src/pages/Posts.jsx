import React, { useMemo, useState } from "react"
import { CardGroup, Row } from "react-bootstrap"
import { CgFileDocument } from "react-icons/cg"
import PostsCard from "../components/PostsCard"
import { useQuery } from "react-query"
import axios from "axios"
import SideBar from "../components/SideBar"
import { apiClient, customLang } from "../utils/axios-util"
const Posts = () => {



  const { data: news } = useQuery({
    queryKey: [`newsData`],
    queryFn: async () => {
    const res = await apiClient.get(
        `news?${customLang}`
      );
      return res.data.data;
    },
  });
  console.log("🚀 ~ file: Posts.jsx:22 ~ Posts ~ news:", news)

  const postsData = news ? news : []


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
            <PostsCard posts={postsData} xs={12} lg={6} xl={4} id={'daetails-News'} />
          </CardGroup>
        </Row>
      </div>
      <SideBar posts={postsData}  />
    </Row>
  )
}

export default Posts
