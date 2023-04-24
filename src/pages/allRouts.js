import React from "react"
import { createBrowserRouter } from "react-router-dom"
import DaetailsMatche from "../components/DaetailsMatche"
import DaetailsPost from "../components/DaetailsPost"
import DetailsLeagues from "../components/DetailsLeagues"
import DetailsNews from "../components/DetailsNews"
import TournamentNewsDetails from "../components/TournamentNewsDetails"
import { VideoDetails } from "../components/VideoDetails"
import Leagues from "./Leagues"
import Matches from "./Matches"
import Media from "./Media"
import News from "./News"
import Posts from "./Posts"
import Root from "./Root"
import LatestTransfers from "./LatestTransfers"
import WomenSports from "../components/WomenSports"

export const Routs = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>error</p>,
    children: [
      {
        index: true,
        element: <News />,
      },
      {
        path: "matches",
        element: <Matches />,
      },
      {
        path: "posts-home",
        element: <Posts />,
      },
      {
        path: "leagues",
        element: <Leagues />,
      },
      {
        path: "medias",
        element: <Media />,
      },
      {
        path: "news-home",
        element: <News />,
      },
      {
        path: "last-transfer",
        element: <LatestTransfers />,
      },
      {
        path: "women's-sports",
        element: <WomenSports/>,
      },
      {
        path: ":daetails-post/:id",
        element: <DaetailsPost />,
      },
      {
        path: ":daetails-News/:id",
        element: <DetailsNews/>,
      },
      {
        path: "details-match/:id/*",
        element: <DaetailsMatche />,
      },
      {
        path: "details-video/:id/*",
        element: <VideoDetails />,
      },
      {
        path: "details-leagues/:id/*",
        element: <DetailsLeagues />,
      },
      {
        path: "tournament-news-details/:id",
        element:  <TournamentNewsDetails/> ,
      },
       
  
    ],
  },
])
