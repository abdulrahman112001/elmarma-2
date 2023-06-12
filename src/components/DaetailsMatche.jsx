import { t } from "i18next";
import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { AiFillPlayCircle } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { apiClient, apiClientEn, url } from "../utils/axios-util";
import SideBar from "./SideBar";
import Spiner from "./Spiner";
import { useIsRTL } from "../hooks/useIsRTL";

function DaetailsMatche() {

  const isRTL = useIsRTL()
  const { id } = useParams();
  var str = window.location.href;
  var wordToRemove = `${url}details-match`;
  var idLoca = str.split(new RegExp("\\b" + wordToRemove + "\\b")).join("");
  console.log(idLoca);

  const {
    data: DetaisMatch,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [`Detais-Match${idLoca}`],
    queryFn: async () => {
      const res = await apiClient.get(`details-match${idLoca}`);
      return res.data.data;
    },
  });
  const DetailsMathch = DetaisMatch ? DetaisMatch : {};

  const { data: DetailsMatchEng, isLoading: loadingDataEng } = useQuery({
    queryKey: [`DetailsMatchEng`],
    queryFn: async () => {
      const res = await apiClientEn.get(
        `https://v3.football.api-sports.io/fixtures?id=${id}`
      );
      return res.data.response;
    },
  });
  const DetailsMathchEn = DetailsMatchEng ? DetailsMatchEng : []
  console.log("🚀 ~ file: DaetailsMatche.jsx:45 ~ DaetailsMatche ~ DetailsMathchEn:", DetailsMathchEn)


  const {
    data: DetaisMatchGroub,
    isLoading: loadingMatchDetails,
    isFetching: featchingMatchDetails,
  } = useQuery({
    queryKey: [`previous-encounter${idLoca}`],
    queryFn: async () => {
      const res = await apiClient.get(`previous-encounter${idLoca}`);
      return res.data;
    },
  });
  const MathchGroub = DetaisMatchGroub ? DetaisMatchGroub : {};
  console.log(
    "🚀 ~ file: DaetailsMatche.jsx:43 ~ DaetailsMatche ~ MathchGroub:",
    MathchGroub
  );

  const {
    data: DetaisMatchPost,
    isLoading: loadingMatchDetailsPost,
    isFetching: featchingMatchDetailsPost,
  } = useQuery({
    queryKey: [`team-news-post${idLoca}`],
    queryFn: async () => {
      const res = await apiClient.get(`team-news${idLoca}`);
      return res.data.data;
    },
  });

  const MathchGroubPost = DetaisMatchPost ? DetaisMatchPost : [];
  console.log(
    "🚀 ~ file: DaetailsMatche.jsx:58 ~ DaetailsMatche ~ MathchGroubPost:",
    MathchGroubPost
  );

  const {
    data: DetaisMatchVideo,
    isLoading: loadingMatchDetailsVideo,
    isFetching: featchingMatchDetailsVideo,
  } = useQuery({
    queryKey: [`team-videos${idLoca}`],
    queryFn: async () => {
      const res = await apiClient.get(`team-videos${idLoca}`);
      return res.data.data;
    },
  });

  const MathchVideo = DetaisMatchVideo ? DetaisMatchVideo : [];

  return (
    <div style={{ marginTop: "120px" }}>
      <Row className="p-4">
        <div className="col-md-8">
          <>
            {
            loadingDataEng ? (
              <p className="text-center">
                <Spiner variant="dark" />
                <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
              </p>
            ) : Object.keys(MathchGroub).length !== 0 ? (
              <p>{t("cant views matches details")}</p>
            ) : (
              <>
                <div className="details-match rounded-2">
                  <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column align-items-center">
                      <small>
                        {DetailsMathch.championship_name}-
                        {DetailsMathch.championship_number}
                      </small>
                      <small className="py-1">
                        {DetailsMathch?.championship_date}-
                        {DetailsMathch?.championship_time}
                      </small>
                    </div>
                  </div>

                  <div className="row align-items-center">
                    <div className="col-md-4 ">
                      <div className="d-flex flex-column align-items-center ">
                        <h4>{DetailsMathch.first_team}</h4>
                        <Link to={`/details-club${DetailsMathch.first_id}`}>
                          <img
                            style={{ width: "80px" }}
                            src={DetailsMathch.first_img}
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex gap-5 flex-wrap justify-content-center py-2">
                      <div>
                        {DetailsMathch.first_result && (
                          <h2>{DetailsMathch.first_result}</h2>
                        )}
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <small className=" border-bottom bord  border-ligh border-opacity-50  ">
                          {DetailsMathch.championship_date}
                        </small>
                        <small className="py-1">
                          {DetailsMathch.championship_time}
                        </small>
                        {DetailsMathch.status && (
                          <small className="py-1">{DetailsMathch.status}</small>
                        )}
                      </div>
                      <div>
                        {DetailsMathch.second_result && (
                          <h2>{DetailsMathch.second_result}</h2>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex flex-column align-items-center ">
                        <h4>{DetailsMathch.second_team}</h4>
                        <Link to={`/details-club${DetailsMathch.second_id}`}>
                          <img
                            style={{ width: "80px" }}
                            src={DetailsMathch.second_img}
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly align-items-center mt-2">
                    {DetailsMathch.place && (
                      <small className="d-flex">
                        <img
                          style={{ width: "20px" }}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACIUlEQVR4nOWWPU9UQRSG12CjBRauhYIYt0MTfoXFQuxJ6BAC/AG2l8LEZivgPxCq3WgrItiZoIQPaWlRIFYbE33Mufted5jkzs5ckw2Jb3XvnJl57jlzzplbqfzXAm4D68AFMDlI6Ce6+gk8i1hTBTaBS+ADMF4GvC7oCfDEGZ8BvgLvvPn3gH166gD1MuAf8jSDAneAt87GW32gU8AQsAZMpICn8nMV9LM2/QbM2aYFUNOKbE29nyXBTcANx9Mj4FFmKIaaDmSrAael4HTPNPc0Bppr/5/gdL00zXnjswFoCL4aC94CdrwzndXzciK8qYSrJ5WaF95ljTWANrAIzAOtIriTtB1guwwUFy77A+C+nu0DfB1atgtquigLNbWdORb2X8ArvVsUQtooCzUtAKMWbgf+W2MW+iJ9Ae72672hkjHwQz278BFgKQCt9vPWGn5ILc177cI19qYU1KRbBiXES3UkX1l9A2MW4mxhL9vToSbVb8fp2VVt4KutsC/J04YHj4ea7GZSsQ+p+GsBuK+G0+EyKHAT2AU+VmKkqw21vZoyPQb+wtsnr++jWPCEGnwK/Ep4gcfAd9mmo8B94AeR0GO3EpLkwZsaWymC6kwtvOey7QHDslnPfp4KX1XC5Q2/yFOrilwtB/pUv1WXaa53F9dDUM3Z1uXw90wFPdGatTLgceC9/rk3gr23t2ZSnqJf51uVQUjgc5XnYKDXVn8A6CwlV1A2a74AAAAASUVORK5CYII="
                        />
                        {DetailsMathch.place}
                      </small>
                    )}
                    {DetailsMathch.channel && (
                      <small className="py-1">
                        <img
                          style={{ width: "20px" }}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHklEQVR4nO2aa4hVVRiGdw6V/QnpMiVBd6l+ZGnSNGI3NetHpBSTpjg/umI2hthNwsqMyrQpqQwimIwulA5MiV3UMoIug90vRlM6YUU2Vt5ykhmdJz58T+yWa9/O2Wc8J3phwZ6z19lrPXut9a33W2eC4H/lL+AM4C7giKBSBZwMHJKy7mDgV/ZqTlCJAi4G+oBPksCAAcBbAtoFDA0qUcAFgjI9lVDXplxB04NKFrAo1NmpEXXOA3arzqvAAUElCzgIaFeHdwCnAAOBWuBA4EjgJ93vBAYF1SDgBOAPdXwL0KvrPcCPuu4B6oJqEXtHxKZVnNZYvaBaBDSTTguDahBQA1wBNKQoVq+m3B0aADQCbwIdwPoKLh3AGxZhrd9xUWs51alXvOsTeIDq1jwX6GBguyc6NaVcG3mVScDckB/Mom3GEYYa6lRYAkwA1vbzOvkeaAVGAF2ejn8NPAusBLo9908PQ9U7N88B/mL/6UVnOewBrteLtlTlRvX5c+d79UlQrizSFLSZ8uoL4NrQ348A9+q6Qa6kU/00h18U1N3ANF0vBcZTXn3pQJ0vW4VGcKuub3FedmqoeRr6PgFdBPwZ0Rlb4K9p3rdpTfbkAFUfUW8+8EIxUMsTgOzeMmAUMAaYqfRjoUa3DrhO06VYqInAp552RyvAZIZCQGM9QF1avJZOfOfpnC3wq4DZwLkZPKELtV4R8f2Q85/mJJqZoNoigDap3tvAo1p3rm4D7tf1bo1iUxFQph+AycBwYCTwPPsqNVS7B6hXi/eD0IhcDrSE6qxQpHJ1M/AY2aHSKHNID2sB8LDzWbccwUyN4lnAb57v9upNF7LfrFCbYoJP0VA96rDvwX2KfMfoEGYVsFFZ8O9a7IuBMzViWaCWaOpNUFCapLWVC5RFw6PVqE2jd3UWUdAuQdv+cadSGYtSlyoKtmjzHhE6eUqCWq3vF/zpdlm7cXlB3SF/9pne3iydDtnbu1XF9rYkTY6ImD6oMSGTa9P3QqUbU1W3ZKgpwFeez3fqcPIk4GwFiZf1uU+zlQmkgaoPXfeF2m/WHlkylL3hDRH3egVk+kZ+zTbfK+Wsw9PNUozXM4xUl6deo2Nqi4Yyv/VexL11asiXMtwk4MVagzd4XEIUVCtwmbO1tGmtkgeUea0HlZqs1sZrO/s96nhTTADYpvoWJI6LCc2+6PeSAlCD1nBj6GyxZCjr2LHKaywsP6OIuELG1zo8DLjPSQvC+ljTuJh9amNEglgSFPJd9uZ8o7hII/CEAH1BZbwcfEU5is0aqV+cz1s1NV0jGl7Mtk9NT3i+C/W0nusrnXlBIcc8TNOhoLUew7pBEbBbbn9czPSJglql7cFXuvKEMn0osBYFh26lGK4el8WZ6LiPtFBplQsU8l+zBHc7cLxC9TsKIlMEFM5Qs0I169m+0lEOqIJ2yrrMURScoQOTuICQFqpdU9BXtpQTKk/t9+nXH1DzY6afuZhUUHUxrqA/tFJpS0HrgI8iyo4oKFvIroOeG/pZsz/1syKob9NO0vAw1CDHh/Xq0HCk/FZ/lkuUeGZVD3DoP1ACs/PratZz/wISVG1MJlrp6rCzx32gBHY48GTorLrStVX52WFeIM9vv4N17jA2oQwBTsyxDEnR5ij1z/9bbwKcWZ0k1WZ+cHybR6Voc00pDfwnoZoTHv6t/d9RzlADUwSsBaU2chpwjTbjh7R/zdDZW00Z/8FktI4LrD1r19q/Gji1HG1WvP4G1LoU/LWwWaoAAAAASUVORK5CYII="
                        />{" "}
                        {DetailsMathch.channel}
                      </small>
                    )}
                    {DetailsMathch.refree && (
                      <small className="py-1">
                        <img
                          style={{ width: "20px" }}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADT0lEQVR4nO2XTUhVQRTHr69nggUJLexrE7XIaGcilhZGLSLCXdCiNkFBISFIH7RpURiWQYugdpEW0SJqmS2USmrRog+DqEVCQWCSvSgqSX8xdG6chrn3DjLvSXD/cHnOmZlzzv9/Zs69RlGOMADmmWcuE9gCvCQcRoGNlSSwFLgKzBAeM+K7vpwEqoFu4IsV/A7wVv6+ARQ8fBVkrcGY+NCYBDqBYmgS7VJ6rdpHGW8H1gATMu7z8Ncnaz8Ba4EdMh63qv0UaA1BYBlwXSn1DGiT4AZTQI2s3aAS6Erx2aX8bRZbjfhCRGmTWFq4JbMhUAQOAyVx9hk4CsyX+RNix9qHCr7H4XcXMJ2x94jKYb+q9FfgZJyDD4lNwPO0ywc8yUjG4Cew1fL7Qy9I2Dti2RcDF5QAr4BtWd3oWtb5BFbqjpWQzHl1adfJM2nNJe2dBpY74rZKTrHA/SZnvaAo57aU1jFk3SFV6rRkdFd6J8/fruZRzXHggP2ilBw6lSglyb1oJgcVyyuuHm6OCPDCCpaYjLrAQ2rpkGoMWURimAq0O/Kpl1zjk3E3Um2127FhNXDbUoqso6XGdWpvXdI6i8iMFcvgFrDKkZ95rxmMRnJcDIbUggXSIb5bHWOfjB/5EJmNDXgsv7utzjkll36R2jMscwfNoFad+2ZgL/DB1cOBm2I/VkYix+V3QDWhy8AvsU8IwSb1Ul0YO+kR4zfl8CGwXgWqUeo0lJFIg/yaC12t5k3iI2pdnGuP/QY3fd/gvVSlygpkPkUMXodKOsnGn3cFrvcFsFN925njtsJeMCCTp+zNMn9JK1BmImdkeDEhl9My3++abFRnsFZsVXJvzqlj1VIBIi0yLEns5viEWHe60UVUdwGjyFn5xLZRqACRgiPumOQUV2vYSUIcdDgcmPPYawcvJxEDFb9X3QmNjigJosQ94I04aFJzc0Ik+rdr9Upugz7/wCWRnFMiwZATEaSJ4itUEPgECmkjJ5KBvCKCNFF8hQoCn0AhbeREMpBXRJAmiq9QQeATKKSNnEgG8ooI0kTxFSoIfAKFtJETyUBeEUGaKL5CBYFPoJA2ciIZyCsiSBPFV6gg8An0XxGpNKIyEHlQcRZwPziRHFFl8BsJy6XGVC6s9gAAAABJRU5ErkJggg=="
                        />
                        {DetailsMathch.refree}
                      </small>
                    )}
                    {DetailsMathch.first_player && (
                      <small className="py-1">
                        <img
                          style={{ width: "20px" }}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5klEQVR4nO2aW4hWVRTHj82MjmmldtFumm8q0UDYSxD0oKFmowTdJIJAKqJsCOrNS2UaRFBBOiQR2UNWkJWg1ZOZKNodp4t2025TCqUONjrl/GLh2rA8s885e+/zzXTBPwwMZ6/LXmfvs/Z/rf1l2Sn8TwGMAmYADwMbgU+An4Bj+vcb0AW8CiwH5gGnZ/8GAK3ALcDbQB/x+ANYD9wMNP8TAYwEOoBuMyl56zuAvwICEJmdwJ/m2TfAHcCIoQpiDvCdmcCHwJ3AGB2frs+KIGPTVXac6n5qxr8GrhrsbfSccfgxMKtAtklX7LCR79FnTQU6c01Ax4EnZeUbHcSF5i3Lvr63aEI5vYvM9pkcIN8EPKA+BNtk1RoVxGTgWzW8G5gWqX9UdYP3PtCm34zgM+DipMkbg+cD+9TglpS3kxKI+X52mERwTpYCyfHA+2poKzA60U5SIALgTGC76m8GWrJYAJ1q4Ifkt1EzEAFwrmYyweosBppB0EPuyijlBgciAC4DeoF+4OosBOLQfGjLgpQGORABsFjtdAVtMeB+k/tXVioMXSArzbw6qoSHAz8ahW01nZ9hOFit84ATZ4rD3tJzDLjVCLtvZFSiY6EqXxlb8v8VNZh1X25u15UpbGIgZkY6Haans5DIPI7p2LBImzM9tjaWHUA+Kr4OmBjocIJS+iqIzISI9Puix0af92wD5lc4F6qwDJha4FCKqp8Jx37g2gJbE5XSb8hR/TwGklbgcY+gsNFXlLla7AIeUk4kCeIJzfGx6FddsXGpptiPcjK9GpCl+g6P+gKR8tTiTbd0WkhJafqClqwWlqqnIm/jEPAScKNkPp3DaOCNnNxrvkCE2TrI6pxWsOwt+vF15irEuvgVeBaYXXTmyJxyO6fLJ3RQBxf6jBQYbta9Xhf7YwghsFD1un2DLl1GMUxgTQMCWRPpc7jqHfENuqZBZeWX05vVgEBmR/psVr0e36D7iMdGGm3xJIAY/C5vONLn2ar7i2/Q0YkpMUZVd22NQNYm+JuqurvK0u+8BMOSmlPRnuDv+rL069La0gTDIz2HZgh6Ulo+nDiMBcvLKMrmWMOq/3JCIOsSfb1XRlHOUl7T57qGkcYXJASyIMHPWJ3jUXfq+4Qcc70rgbrnKU4INiVQ+rtV9/UyIemKo8Qt2IEpjw9IVzJA/gKVrS5bB74wRx5vyCr6u46KzykUPFnncl3m/tKqbaBeu+qIbltkdtxbeQ0B3Gea1KXCykgd2Xw6NAijv8rUOqXZSw9e6aAIFoUYbzW93tJlB55XObmdak1M2xKEYFWF7IMq90UwHzT8qbdo2fWmSnCkqGoM9NVmWkbtAdt3RpbIavcpBZH7iiXAPcDtWvxE0f4SXx0mWdymPpaoT/H9vY4/lWK81TSxi7C+bhAmG71T4Wt7yva1adI1kAluyaT5KjuHZA7n1XUwKXdnaHE85CYqwMclasuHPaHtqBBH482lSx4rGmB/RYHtnXLZ1JAgcqnyGU/bpzvpAubkstXXxOgc1KtqTc2y3BaPyPeUYGuMoeQOcqVxzeDM3v8WO0xaRFfqA/0Jx3yt4sblWOs0HZOO5bu5Fq383GNRcmaqGVCLEs0NBU3rKkjZ8BZw05D94iFwm8zVCxkJ7HNtSvTqhOWw+1I7mI8JwSysJ04h++/jb3V/n/AQOIfFAAAAAElFTkSuQmCC"
                        />
                        {DetailsMathch.first_player}
                      </small>
                    )}
                  </div>
                </div>


                {
                  !isRTL && <>
                 { DetailsMathchEn.map((item)=>(

                    <div className="details-match rounded-2">
                  <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column align-items-center">
                      <small>
                        {item?.league?.round}-
                        {item?.league?.name}
                      </small>
                      <small className="py-1">
                        {item?.fixture?.date.slice(0,10)}
                        {/* {item?.fixture?.date.slice(10)} */}
                      </small>
                    </div>
                  </div>

                  <div className="row align-items-center">
                    <div className="col-md-4 ">
                      <div className="d-flex flex-column align-items-center ">
                        <h4>{item?.teams?.away?.name}</h4>
                        <Link to={`/details-club${DetailsMathch.first_id}`}>
                          <img
                            style={{ width: "80px" }}
                            src={item?.teams?.away?.logo}
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex gap-5 flex-wrap justify-content-center py-2">
                      <div>
                        {item?.goals?.away && (
                          <h2>{item?.goals?.away}</h2>
                        )}
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <small className=" border-bottom bord  border-ligh border-opacity-50  ">
                        {item?.fixture?.date.slice(0,10)}
                  
                        </small>
                        <small className="py-1">
                        {item?.fixture?.date.slice(0,10)}
                        </small>
                        {/* {DetailsMathch.status && (
                          <small className="py-1">{DetailsMathch.status}</small>
                        )} */}
                      </div>
                      <div>
                        {item?.goals?.home && (
                          <h2>{item?.goals?.home}</h2>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex flex-column align-items-center ">
                        <h4>{item?.teams?.home?.name}</h4>
                        <Link to={`/details-club${DetailsMathch.second_id}`}>
                          <img
                            style={{ width: "80px" }}
                            src={item?.teams?.home?.logo}
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly align-items-center mt-2">
                    {item?.fixture?.venue?.name && (
                      <small className="d-flex">
                        <img
                          style={{ width: "20px" }}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACIUlEQVR4nOWWPU9UQRSG12CjBRauhYIYt0MTfoXFQuxJ6BAC/AG2l8LEZivgPxCq3WgrItiZoIQPaWlRIFYbE33Mufted5jkzs5ckw2Jb3XvnJl57jlzzplbqfzXAm4D68AFMDlI6Ce6+gk8i1hTBTaBS+ADMF4GvC7oCfDEGZ8BvgLvvPn3gH166gD1MuAf8jSDAneAt87GW32gU8AQsAZMpICn8nMV9LM2/QbM2aYFUNOKbE29nyXBTcANx9Mj4FFmKIaaDmSrAael4HTPNPc0Bppr/5/gdL00zXnjswFoCL4aC94CdrwzndXzciK8qYSrJ5WaF95ljTWANrAIzAOtIriTtB1guwwUFy77A+C+nu0DfB1atgtquigLNbWdORb2X8ArvVsUQtooCzUtAKMWbgf+W2MW+iJ9Ae72672hkjHwQz278BFgKQCt9vPWGn5ILc177cI19qYU1KRbBiXES3UkX1l9A2MW4mxhL9vToSbVb8fp2VVt4KutsC/J04YHj4ea7GZSsQ+p+GsBuK+G0+EyKHAT2AU+VmKkqw21vZoyPQb+wtsnr++jWPCEGnwK/Ep4gcfAd9mmo8B94AeR0GO3EpLkwZsaWymC6kwtvOey7QHDslnPfp4KX1XC5Q2/yFOrilwtB/pUv1WXaa53F9dDUM3Z1uXw90wFPdGatTLgceC9/rk3gr23t2ZSnqJf51uVQUjgc5XnYKDXVn8A6CwlV1A2a74AAAAASUVORK5CYII="
                        />
                        {item?.fixture?.venue?.name}
                      </small>
                    )}
                    {/* {DetailsMathch.channel && (
                      <small className="py-1">
                        <img
                          style={{ width: "20px" }}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHklEQVR4nO2aa4hVVRiGdw6V/QnpMiVBd6l+ZGnSNGI3NetHpBSTpjg/umI2hthNwsqMyrQpqQwimIwulA5MiV3UMoIug90vRlM6YUU2Vt5ykhmdJz58T+yWa9/O2Wc8J3phwZ6z19lrPXut9a33W2eC4H/lL+AM4C7giKBSBZwMHJKy7mDgV/ZqTlCJAi4G+oBPksCAAcBbAtoFDA0qUcAFgjI9lVDXplxB04NKFrAo1NmpEXXOA3arzqvAAUElCzgIaFeHdwCnAAOBWuBA4EjgJ93vBAYF1SDgBOAPdXwL0KvrPcCPuu4B6oJqEXtHxKZVnNZYvaBaBDSTTguDahBQA1wBNKQoVq+m3B0aADQCbwIdwPoKLh3AGxZhrd9xUWs51alXvOsTeIDq1jwX6GBguyc6NaVcG3mVScDckB/Mom3GEYYa6lRYAkwA1vbzOvkeaAVGAF2ejn8NPAusBLo9908PQ9U7N88B/mL/6UVnOewBrteLtlTlRvX5c+d79UlQrizSFLSZ8uoL4NrQ348A9+q6Qa6kU/00h18U1N3ANF0vBcZTXn3pQJ0vW4VGcKuub3FedmqoeRr6PgFdBPwZ0Rlb4K9p3rdpTfbkAFUfUW8+8EIxUMsTgOzeMmAUMAaYqfRjoUa3DrhO06VYqInAp552RyvAZIZCQGM9QF1avJZOfOfpnC3wq4DZwLkZPKELtV4R8f2Q85/mJJqZoNoigDap3tvAo1p3rm4D7tf1bo1iUxFQph+AycBwYCTwPPsqNVS7B6hXi/eD0IhcDrSE6qxQpHJ1M/AY2aHSKHNID2sB8LDzWbccwUyN4lnAb57v9upNF7LfrFCbYoJP0VA96rDvwX2KfMfoEGYVsFFZ8O9a7IuBMzViWaCWaOpNUFCapLWVC5RFw6PVqE2jd3UWUdAuQdv+cadSGYtSlyoKtmjzHhE6eUqCWq3vF/zpdlm7cXlB3SF/9pne3iydDtnbu1XF9rYkTY6ImD6oMSGTa9P3QqUbU1W3ZKgpwFeez3fqcPIk4GwFiZf1uU+zlQmkgaoPXfeF2m/WHlkylL3hDRH3egVk+kZ+zTbfK+Wsw9PNUozXM4xUl6deo2Nqi4Yyv/VexL11asiXMtwk4MVagzd4XEIUVCtwmbO1tGmtkgeUea0HlZqs1sZrO/s96nhTTADYpvoWJI6LCc2+6PeSAlCD1nBj6GyxZCjr2LHKaywsP6OIuELG1zo8DLjPSQvC+ljTuJh9amNEglgSFPJd9uZ8o7hII/CEAH1BZbwcfEU5is0aqV+cz1s1NV0jGl7Mtk9NT3i+C/W0nusrnXlBIcc8TNOhoLUew7pBEbBbbn9czPSJglql7cFXuvKEMn0osBYFh26lGK4el8WZ6LiPtFBplQsU8l+zBHc7cLxC9TsKIlMEFM5Qs0I169m+0lEOqIJ2yrrMURScoQOTuICQFqpdU9BXtpQTKk/t9+nXH1DzY6afuZhUUHUxrqA/tFJpS0HrgI8iyo4oKFvIroOeG/pZsz/1syKob9NO0vAw1CDHh/Xq0HCk/FZ/lkuUeGZVD3DoP1ACs/PratZz/wISVG1MJlrp6rCzx32gBHY48GTorLrStVX52WFeIM9vv4N17jA2oQwBTsyxDEnR5ij1z/9bbwKcWZ0k1WZ+cHybR6Voc00pDfwnoZoTHv6t/d9RzlADUwSsBaU2chpwjTbjh7R/zdDZW00Z/8FktI4LrD1r19q/Gji1HG1WvP4G1LoU/LWwWaoAAAAASUVORK5CYII="
                        />{" "}
                        {DetailsMathch.channel}
                      </small>
                    )} */}
                    {item?.fixture?.referee && (
                      <small className="py-1">
                        <img
                          style={{ width: "20px" }}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADT0lEQVR4nO2XTUhVQRTHr69nggUJLexrE7XIaGcilhZGLSLCXdCiNkFBISFIH7RpURiWQYugdpEW0SJqmS2USmrRog+DqEVCQWCSvSgqSX8xdG6chrn3DjLvSXD/cHnOmZlzzv9/Zs69RlGOMADmmWcuE9gCvCQcRoGNlSSwFLgKzBAeM+K7vpwEqoFu4IsV/A7wVv6+ARQ8fBVkrcGY+NCYBDqBYmgS7VJ6rdpHGW8H1gATMu7z8Ncnaz8Ba4EdMh63qv0UaA1BYBlwXSn1DGiT4AZTQI2s3aAS6Erx2aX8bRZbjfhCRGmTWFq4JbMhUAQOAyVx9hk4CsyX+RNix9qHCr7H4XcXMJ2x94jKYb+q9FfgZJyDD4lNwPO0ywc8yUjG4Cew1fL7Qy9I2Dti2RcDF5QAr4BtWd3oWtb5BFbqjpWQzHl1adfJM2nNJe2dBpY74rZKTrHA/SZnvaAo57aU1jFk3SFV6rRkdFd6J8/fruZRzXHggP2ilBw6lSglyb1oJgcVyyuuHm6OCPDCCpaYjLrAQ2rpkGoMWURimAq0O/Kpl1zjk3E3Um2127FhNXDbUoqso6XGdWpvXdI6i8iMFcvgFrDKkZ95rxmMRnJcDIbUggXSIb5bHWOfjB/5EJmNDXgsv7utzjkll36R2jMscwfNoFad+2ZgL/DB1cOBm2I/VkYix+V3QDWhy8AvsU8IwSb1Ul0YO+kR4zfl8CGwXgWqUeo0lJFIg/yaC12t5k3iI2pdnGuP/QY3fd/gvVSlygpkPkUMXodKOsnGn3cFrvcFsFN925njtsJeMCCTp+zNMn9JK1BmImdkeDEhl9My3++abFRnsFZsVXJvzqlj1VIBIi0yLEns5viEWHe60UVUdwGjyFn5xLZRqACRgiPumOQUV2vYSUIcdDgcmPPYawcvJxEDFb9X3QmNjigJosQ94I04aFJzc0Ik+rdr9Upugz7/wCWRnFMiwZATEaSJ4itUEPgECmkjJ5KBvCKCNFF8hQoCn0AhbeREMpBXRJAmiq9QQeATKKSNnEgG8ooI0kTxFSoIfAKFtJETyUBeEUGaKL5CBYFPoJA2ciIZyCsiSBPFV6gg8An0XxGpNKIyEHlQcRZwPziRHFFl8BsJy6XGVC6s9gAAAABJRU5ErkJggg=="
                        />
                        {item?.fixture?.referee}
                      </small>
                    )}
                    {/* {DetailsMathch.first_player && (
                      <small className="py-1">
                        <img
                          style={{ width: "20px" }}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5klEQVR4nO2aW4hWVRTHj82MjmmldtFumm8q0UDYSxD0oKFmowTdJIJAKqJsCOrNS2UaRFBBOiQR2UNWkJWg1ZOZKNodp4t2025TCqUONjrl/GLh2rA8s885e+/zzXTBPwwMZ6/LXmfvs/Z/rf1l2Sn8TwGMAmYADwMbgU+An4Bj+vcb0AW8CiwH5gGnZ/8GAK3ALcDbQB/x+ANYD9wMNP8TAYwEOoBuMyl56zuAvwICEJmdwJ/m2TfAHcCIoQpiDvCdmcCHwJ3AGB2frs+KIGPTVXac6n5qxr8GrhrsbfSccfgxMKtAtklX7LCR79FnTQU6c01Ax4EnZeUbHcSF5i3Lvr63aEI5vYvM9pkcIN8EPKA+BNtk1RoVxGTgWzW8G5gWqX9UdYP3PtCm34zgM+DipMkbg+cD+9TglpS3kxKI+X52mERwTpYCyfHA+2poKzA60U5SIALgTGC76m8GWrJYAJ1q4Ifkt1EzEAFwrmYyweosBppB0EPuyijlBgciAC4DeoF+4OosBOLQfGjLgpQGORABsFjtdAVtMeB+k/tXVioMXSArzbw6qoSHAz8ahW01nZ9hOFit84ATZ4rD3tJzDLjVCLtvZFSiY6EqXxlb8v8VNZh1X25u15UpbGIgZkY6Haans5DIPI7p2LBImzM9tjaWHUA+Kr4OmBjocIJS+iqIzISI9Puix0af92wD5lc4F6qwDJha4FCKqp8Jx37g2gJbE5XSb8hR/TwGklbgcY+gsNFXlLla7AIeUk4kCeIJzfGx6FddsXGpptiPcjK9GpCl+g6P+gKR8tTiTbd0WkhJafqClqwWlqqnIm/jEPAScKNkPp3DaOCNnNxrvkCE2TrI6pxWsOwt+vF15irEuvgVeBaYXXTmyJxyO6fLJ3RQBxf6jBQYbta9Xhf7YwghsFD1un2DLl1GMUxgTQMCWRPpc7jqHfENuqZBZeWX05vVgEBmR/psVr0e36D7iMdGGm3xJIAY/C5vONLn2ar7i2/Q0YkpMUZVd22NQNYm+JuqurvK0u+8BMOSmlPRnuDv+rL069La0gTDIz2HZgh6Ulo+nDiMBcvLKMrmWMOq/3JCIOsSfb1XRlHOUl7T57qGkcYXJASyIMHPWJ3jUXfq+4Qcc70rgbrnKU4INiVQ+rtV9/UyIemKo8Qt2IEpjw9IVzJA/gKVrS5bB74wRx5vyCr6u46KzykUPFnncl3m/tKqbaBeu+qIbltkdtxbeQ0B3Gea1KXCykgd2Xw6NAijv8rUOqXZSw9e6aAIFoUYbzW93tJlB55XObmdak1M2xKEYFWF7IMq90UwHzT8qbdo2fWmSnCkqGoM9NVmWkbtAdt3RpbIavcpBZH7iiXAPcDtWvxE0f4SXx0mWdymPpaoT/H9vY4/lWK81TSxi7C+bhAmG71T4Wt7yva1adI1kAluyaT5KjuHZA7n1XUwKXdnaHE85CYqwMclasuHPaHtqBBH482lSx4rGmB/RYHtnXLZ1JAgcqnyGU/bpzvpAubkstXXxOgc1KtqTc2y3BaPyPeUYGuMoeQOcqVxzeDM3v8WO0xaRFfqA/0Jx3yt4sblWOs0HZOO5bu5Fq383GNRcmaqGVCLEs0NBU3rKkjZ8BZw05D94iFwm8zVCxkJ7HNtSvTqhOWw+1I7mI8JwSysJ04h++/jb3V/n/AQOIfFAAAAAElFTkSuQmCC"
                        />
                        {DetailsMathch.first_player}
                      </small>
                    )} */}
                  </div>
                </div>
                  ))}

                  </>
                }

                <div>
                  <div>
                    <h3></h3>
                    <Table striped bordered hover className="mt-2">
                      <thead>
                        <th colSpan={4} className=" text-center">
                          {MathchGroub.previous_matches}
                        </th>
                      </thead>

                      <tbody>
                        <tr>
                          <td className=" text-center">
                            <Link to={`/details-club${DetailsMathch.first_id}`}>
                              <img
                                style={{ width: "40px" }}
                                src={MathchGroub?.first_team?.image}
                                alt=""
                              />
                            </Link>
                          </td>
                          <td className=" text-center">
                            <h5> الاحصائيات</h5>
                          </td>
                          <td className=" text-center">
                            <Link
                              to={`/details-club${DetailsMathch.second_id}`}
                            >
                              <img
                                style={{ width: "40px" }}
                                src={MathchGroub?.second_team?.image}
                                alt=""
                              />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className=" text-center">
                            {MathchGroub?.first_team?.فوز}
                          </td>
                          <td className=" text-center">فوز</td>
                          <td className=" text-center">
                            {MathchGroub?.second_team?.فوز}
                          </td>
                        </tr>
                        <tr>
                          <td className=" text-center">
                            {MathchGroub?.first_team?.تعادل}
                          </td>
                          <td className=" text-center">تعادل</td>
                          <td className=" text-center">
                            {MathchGroub?.second_team?.تعادل}
                          </td>
                        </tr>
                        <tr>
                          <td className=" text-center">
                            {MathchGroub?.first_team?.هزيمة}
                          </td>
                          <td className=" text-center">هزيمة</td>
                          <td className=" text-center">
                            {MathchGroub?.second_team?.هزيمة}
                          </td>
                        </tr>
                        <tr>
                          <td className=" text-center">
                            {MathchGroub?.first_team?.الأهداف}
                          </td>
                          <td className=" text-center">الأهداف</td>
                          <td className=" text-center">
                            {MathchGroub?.second_team?.الأهداف}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
                <Row>
                  <div className="d-flex align-items-center justify-content-between border-bottom mb-5">
                    <div className="d-flex align-items-center gap-1 ">
                      <CgFileDocument
                        style={{
                          width: "24px",
                          height: "24px",
                          color: "#0573F6",
                        }}
                      />
                      <h4 className="fs-4 my-3"> {t("news clubs")}</h4>
                    </div>
                  </div>
                </Row>
                <Row>
                  {MathchGroubPost.map((post) => (
                    <Col
                      xs={6}
                      lg={6}
                      xl={6}
                      key={post.id}
                      className="p-1 shadow mt-3 rounded-2  "
                    >
                      <Link to={`/details-post-out${post.id}`}>
                        <div
                          className="row position-relative card-custom-size "
                          style={{ border: "0" }}
                        >
                          <div className="col-5">
                            <img
                              variant="top"
                              className="img-fluid"
                              src={post.image}
                              alt="..."
                              style={{ height: "100px" }}
                            />
                          </div>
                          <div className=" col-7 ">
                            <div className=" col-12">
                              <p
                                className="card-text text-start text-dark "
                                style={{
                                  borderRight: "3px solid  rgb(255 157 7)",
                                }}
                              >
                                <small
                                  className="fs-6 fw-bold w-100 me-2 "
                                  style={{ color: " rgb(255 157 7)" }}
                                >
                                  {post?.category?.title}
                                </small>
                              </p>
                            </div>
                            <div className=" col-12">
                              <div className="lightGreen">
                                {post.title ? post.title.slice(0, 25) : ""}
                              </div>
                              <div className="fs-6">
                                {post.desc
                                  ? `${post.desc.slice(0, 25)} ...`
                                  : ""}
                              </div>
                              <div
                                className="col-md-"
                                style={{
                                  border: "0",
                                  background: "transparent",
                                }}
                              >
                                <small className="text-muted">
                                  {/* <svg viewBox="0 0 20 20"><use xlink:href="#time"></use></svg> */}
                                  {post.created_at}
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>

                <Row>
                  <div className="d-flex align-items-center justify-content-between border-bottom mt-3">
                    <div className="d-flex align-items-center gap-1 ">
                      <CgFileDocument
                        style={{
                          width: "24px",
                          height: "24px",
                          color: "#0573F6",
                        }}
                      />
                      <h4 className="fs-4 my-3"> {t("video clubs")}</h4>
                    </div>
                  </div>
                </Row>

                <Row>
                  {MathchVideo.length === 0 ? (
                    <p className="m-4">لايوجد فيديوهات</p>
                  ) : (
                    <div className="row row-cols-1 row-cols-md-3 g-4 ">
                      {MathchVideo?.map((card) => (
                        <Link to={`/details-video${card.id}`}>
                          <div key={card.id} className="col rounded-max p-1">
                            <div className="card h-100  rounded-max">
                              <div className="d-flex align-items-center justify-content-center position-relative p-2 rounded-2">
                                <img
                                  style={{ height: "130px" }}
                                  src={card?.image}
                                  className="card-img-top w-100"
                                  alt="..."
                                />
                                <div className="position-absolute">
                                  <AiFillPlayCircle
                                    style={{ fontSize: "50px", fill: "red" }}
                                  />
                                </div>
                                <div className="position-absolute top-0 start-0">
                                  <p className="bg-dark text-white px-2 rounded-2 w-25 text-center m-3">
                                    3:12
                                  </p>
                                </div>
                              </div>
                              <div className="card-body gap-2 p-2   d-flex flex-column align-items-start justify-content-center  rounded-bottom ">
                                <small class="text-muted">{card?.date}</small>
                                <h5 className="card-title">
                                  {card?.title.slice(0, 20)} ...
                                </h5>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </Row>
              </>
            )}
          </>
        </div>

        <SideBar />
      </Row>
    </div>
  );
}

export default DaetailsMatche;
