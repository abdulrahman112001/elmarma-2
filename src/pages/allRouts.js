import React from "react"
import { createBrowserRouter } from "react-router-dom"
import DaetailsMatche from "../components/DaetailsMatche"
import DaetailsPost from "../components/DaetailsPost"
import Matches from "./Matches"
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
        path: "news-home",
        element: <News />,
      },
      {
        path: ":daetails-post/:id",
        element: <DaetailsPost />,
      },
      {
        path: "details-match/:id/:id/:id/:id/:id",
        element: <DaetailsMatche />,
      },
    ],
  },
])
