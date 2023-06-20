import React from "react";
import { Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { apiClient, customLang } from "../utils/axios-util";
import SideBar from "./SideBar";
import TournamentCard from "./TournamentCard";

function LeguesNews({title }) {

  const { data: tournamentNews } = useQuery("tournament-news", () =>
  apiClient
      .get(`tournament-news?title=${title}&&${customLang}`)
      .then((res) => res.data.data)
  );
  const tournament = tournamentNews ? tournamentNews : [];
  // ///////////////////////////
  return (
    <Row>
      <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
    {tournament.length == 0 ? (
        "لاوجد اخبار"
      ) : (
        <Row>
          <TournamentCard
            posts={tournament}
         
            xs={12}
            lg={6}
            xl={4}
            idRoute={`tournament-news-details`}
          />
        </Row>
)}
      </div>
      <SideBar />
    </Row>
  );
}

export default LeguesNews;
