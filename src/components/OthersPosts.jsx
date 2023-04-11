import React from "react"
import { Badge, Card, Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useQuery } from "react-query"
import axios from "axios"
import PostsCard from "./PostsCard"
import { CgFileDocument } from "react-icons/cg"
import spinner from '../assets/111813-rolling-footbll.gif'
import { apiClient } from "../utils/axios-util"
import Spiner from "./Spiner"
import { t } from "i18next"

function OthersPosts({ DetailsPosts , path }) {
  const DetailsPostsProps = DetailsPosts

  const { data: category , isLoading } = useQuery({
    queryKey: [`categoryPost/${DetailsPostsProps?.category?.id}`],
    queryFn: async () => {
      const res = await apiClient.get(
        `posts?category_id=${DetailsPostsProps?.category?.id}`
      )
      return res.data.data
    },
  })
  const categoryPost = category ? category : []


  return (
    <>
      {isLoading ? (
            <p className="text-center">
            <Spiner variant="dark" />
            <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
          </p>
          ): categoryPost.length == 0 ? "لايوجد اخبار متعلقة بهذا الخبر " :
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
}
    </>
  )
}

export default OthersPosts
