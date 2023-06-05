import React from "react"
import Spiner from "./Spiner"
import { t } from "i18next"
import { Link, useNavigate } from "react-router-dom"
import MatchesH2H from "./MatchesH2H"
import { useIsRTL } from "../hooks/useIsRTL"

function MainMatches({ MatchesCards, loadingMatch }) {
  const isRTL = useIsRTL()

  console.log(
    "🚀 ~ file: MainMatches.jsx:7 ~ MainMatches ~ MatchesCards:",
    MatchesCards
  )
  const navigate = useNavigate()
  return (
    <>
      {loadingMatch ? (
        <p className="text-center">
          <Spiner variant="dark" />
          <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
        </p>
      ) : MatchesCards.length == 0 ? (
        "يوجد خطأ في عرض البطولات  "
      ) : (
        <div className="col-xl-12 col-md-6  col-xs-12 bg-white ">
          <h4 className=" fw-bold p-3 " style={{ width: " fit-content" }}>
            المباريات
          </h4>

          {MatchesCards?.map((match) => (
            <>
              <button
                className="btn border px-4 bg-dark text-white w-100 my-2"
                // onClick={() => navigate(`/details-match${match.id}`)}
              >
                {match?.name || match?.fixture?.referee}
              </button>
              {!isRTL ? (
                <MatchesH2H match={match} />
              ) : (
                match?.matches?.map((item) => <MatchesH2H item={item} />)
              )}
            </>
          ))}
        </div>
      )}
    </>
  )
}

export default MainMatches
