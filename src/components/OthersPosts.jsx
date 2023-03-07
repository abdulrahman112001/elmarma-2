import React from "react"
import { Badge, Card, Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useQuery } from "react-query"
import axios from "axios"
import PostsCard from "./PostsCard"
import { CgFileDocument } from "react-icons/cg"
import spinner from '../19621-football-animation-with-the-path.gif'

function OthersPosts({ DetailsPosts }) {
  const DetailsPostsProps = DetailsPosts
  const { data: category , isLoading } = useQuery({
    queryKey: ["categoryPost"],
    queryFn: async () => {
      const res = await axios.get(
        `https://elmarma.com/api/v1/posts?category_id=${DetailsPostsProps?.category?.id}`
      )
      return res.data.data
    },
  })
  const categoryPost = category ? category : []
  if (categoryPost == 0) {
    return (
      <p>
        <img src={spinner} alt="" />
      </p>
    )
  }

  return (
    <div>
      <Row>
        <div className="d-flex align-items-center gap-1">
          <CgFileDocument
            style={{ width: "24px", height: "24px", color: "#0573F6" }}
          />
          <h4 className="fs-4 my-3">اخبار قدر تهمك </h4>
        </div>
      </Row>
      <Row>
        <PostsCard posts={categoryPost} xs={12} lg={6} xl={4} />
      </Row>
    </div>
  )
}

export default OthersPosts
