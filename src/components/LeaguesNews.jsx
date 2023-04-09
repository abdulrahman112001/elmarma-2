import React from "react";
import { Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { apiClient, customLang } from "../utils/axios-util";
import PostsCard from "./PostsCard";
function LeaguesNews() {
  const { data: LeaguesNews, isLoading } = useQuery({
    queryKey: ["newsData"],
    queryFn: async () => {
      const res = await apiClient.get(`news&${customLang}`);
      return res.data.data;
    },
  });

  const postsData = LeaguesNews ? LeaguesNews : [];

  return (
    <div>
      <Row className="mt-5">
        <PostsCard
          posts={postsData}
          xs={12}
          lg={6}
          xl={4}
          id={"daetails-News"}
        />
      </Row>
    </div>
  );
}

export default LeaguesNews;
