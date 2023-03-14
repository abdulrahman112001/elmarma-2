import React from "react"
import { createBrowserRouter } from "react-router-dom"
import DaetailsMatche from "../components/DaetailsMatche"
import DaetailsPost from "../components/DaetailsPost"
import { VideoDetails } from "../components/VideoDetails"
import Leagues from "./Leagues"
import Matches from "./Matches"
import Media from "./Media"
import News from "./News"
import Posts from "./Posts"
import Root from "./Root"

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
        path: ":daetails-post/:id",
        element: <DaetailsPost />,
      },
      {
        path: "details-match/:id/*",
        element: <DaetailsMatche />,
      },
      {
        path: "details-video/:id/*",
        element: <VideoDetails />,
      },
    ],
  },
])
