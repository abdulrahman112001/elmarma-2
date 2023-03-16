import React from "react"
import { Badge, Card, Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useQuery } from "react-query"
import axios from "axios"
import PostsCard from "./PostsCard"
import { CgFileDocument } from "react-icons/cg"
import spinner from '../assets/111813-rolling-footbll.gif'

function OthersPosts({ DetailsPosts , path }) {
  const DetailsPostsProps = DetailsPosts
  const { data: category  } = useQuery({
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
      <p className="text-center">
        <img style={ { width: '15%' } } src={ spinner } alt="" />
        <h6 className="mt-2"> جاري تحميل البيانات ... </h6>
      </p>
    )
  }

  return (
    <div>
      <Row>
        <div className="d-flex align-items-center gap-1">
          <CgFileDocument style={{ width: "24px", height: "24px", color: "#0573F6" }}/>
          <h4 className="fs-4 my-3">اخبار قدر تهمك </h4>
        </div>
      </Row>
      <Row>
        <PostsCard posts={categoryPost} xs={12} lg={6} xl={4} id={'daetails-Post'} />
      </Row>
    </div>
  )
}

export default OthersPosts
