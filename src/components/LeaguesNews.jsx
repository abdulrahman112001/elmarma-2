import React from 'react'
import { useQuery } from "react-query"
import axios from "axios"
import PostsCard from './PostsCard'
import { Row } from 'react-bootstrap'
function LeaguesNews() {


    const {
        isLoading,
        error,
        data: news,
        isFetching,
      } = useQuery("newsData", () =>
        axios.get(`https://elmarma.com/api/v1/news`).then((res) => res.data.data)
      )
      const postsData = news ? news : []
  return (
    <div>
        <Row className='mt-5'>

    <PostsCard posts={postsData} xs={12} lg={6} xl={4} id={'daetails-News'} />
        </Row>


    </div>
  )
}

export default LeaguesNews