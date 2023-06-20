import React from "react"
import { CardGroup, Row } from "react-bootstrap"
import { CgFileDocument } from "react-icons/cg"
import { useQuery } from "react-query"
import PostsCard from "../components/PostsCard"
import SideBar from "../components/SideBar"
import { apiClient, customLang } from "../utils/axios-util"
import Spiner from "../components/Spiner"
import { t } from "i18next"
const Posts = () => {



  const { data: news , isLoading , isFetching } = useQuery({
    queryKey: [`newsData`],
    queryFn: async () => {
    const res = await apiClient.get(
        `news?${customLang}`
      );
      return res.data.data;
    },
  });

  const postsData = news ? news : []


  return (
    <>
  {isLoading && isFetching ? (
        <p className="text-center">
          <Spiner variant="dark" />
          <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
        </p>
      ) : postsData.length === 0 ? (
        "يوجد خطأ في عرض الاخبار  "
      ) : (

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
              <PostsCard
                posts={postsData}
                xs={12}
                lg={12}
                xl={12}
                id={"daetails-News"}
                BigPost={true}
              />
            </CardGroup>
          </Row>
        </div>
        <SideBar posts={postsData} />
      </Row>
       )}
    </>
  )
}

export default Posts
