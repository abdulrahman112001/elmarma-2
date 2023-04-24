import React from "react";
import { Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { apiClient } from "../utils/axios-util";
import SideBar from "./SideBar";
import { t } from "i18next";
import Spiner from "./Spiner";

function DaetailsMatche() {
  // const {"*":id} = useParams()

  const idLoca = window.location.href.slice(35);
  console.log(
    "🚀 ~ file: DaetailsMatche.jsx:13 ~ DaetailsMatche ~ idLoca:",
    idLoca
  );

  // console.log("🚀 ~ file: DaetailsMatche.jsx:11 ~ DaetailsMatche ~ id:", id)

  const { data: DetaisMatch, isLoading , isFetching } = useQuery({
    queryKey: [`Detais-Match${idLoca}`],
    queryFn: async () => {
      const res = await apiClient.get(`details-match${idLoca}`);
      return res.data.data;
    },
  });

  const DetailsMathch = DetaisMatch ? DetaisMatch : {};
  console.log(
    "🚀 ~ file: DaetailsMatche.jsx:23 ~ DaetailsMatche ~ DetaisMatchData:",
    DetailsMathch
  );

  return (
    <div>
      <Row className="p-4">
        <div className="col-md-8">
          <>
          {

          isLoading ? (
          <p className="text-center">
            <Spiner variant="dark" />
            <h6 className="mt-2 text-dark"> {`${t("Loading ....")}`} </h6>
          </p>
        ) : 
            <div className="details-match rounded-2">
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column align-items-center">
                  <small>
                  {DetailsMathch.championship_name}
                  -
                    {DetailsMathch.championship_number}
                    </small>
                  <small className="py-1">
                    {DetailsMathch.championship_date}-
                    {DetailsMathch.championship_time}
                  </small>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="d-flex flex-column align-items-center ">
                    <h4>{DetailsMathch.first_team}</h4>
                    <img
                      style={{ width: "80px" }}
                      src={DetailsMathch.first_img}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex flex-column align-items-center">
                    <small className=" border-bottom bord  border-ligh border-opacity-50  ">
                      {DetailsMathch.championship_date}
                    </small>
                    <small className="py-1">
                      {DetailsMathch.championship_time}
                    </small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex flex-column align-items-center ">
                    <h4>{DetailsMathch.second_team}</h4>
                    <img
                      style={{ width: "80px" }}
                      src={DetailsMathch.second_img}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-evenly align-items-center mt-2">
                <small  className="d-flex">
                  <img style={{width:"20px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACIUlEQVR4nOWWPU9UQRSG12CjBRauhYIYt0MTfoXFQuxJ6BAC/AG2l8LEZivgPxCq3WgrItiZoIQPaWlRIFYbE33Mufted5jkzs5ckw2Jb3XvnJl57jlzzplbqfzXAm4D68AFMDlI6Ce6+gk8i1hTBTaBS+ADMF4GvC7oCfDEGZ8BvgLvvPn3gH166gD1MuAf8jSDAneAt87GW32gU8AQsAZMpICn8nMV9LM2/QbM2aYFUNOKbE29nyXBTcANx9Mj4FFmKIaaDmSrAael4HTPNPc0Bppr/5/gdL00zXnjswFoCL4aC94CdrwzndXzciK8qYSrJ5WaF95ljTWANrAIzAOtIriTtB1guwwUFy77A+C+nu0DfB1atgtquigLNbWdORb2X8ArvVsUQtooCzUtAKMWbgf+W2MW+iJ9Ae72672hkjHwQz278BFgKQCt9vPWGn5ILc177cI19qYU1KRbBiXES3UkX1l9A2MW4mxhL9vToSbVb8fp2VVt4KutsC/J04YHj4ea7GZSsQ+p+GsBuK+G0+EyKHAT2AU+VmKkqw21vZoyPQb+wtsnr++jWPCEGnwK/Ep4gcfAd9mmo8B94AeR0GO3EpLkwZsaWymC6kwtvOey7QHDslnPfp4KX1XC5Q2/yFOrilwtB/pUv1WXaa53F9dDUM3Z1uXw90wFPdGatTLgceC9/rk3gr23t2ZSnqJf51uVQUjgc5XnYKDXVn8A6CwlV1A2a74AAAAASUVORK5CYII=" />
                  {DetailsMathch.place}
                </small>
                <small className="py-1">
                <img style={{width:"20px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHklEQVR4nO2aa4hVVRiGdw6V/QnpMiVBd6l+ZGnSNGI3NetHpBSTpjg/umI2hthNwsqMyrQpqQwimIwulA5MiV3UMoIug90vRlM6YUU2Vt5ykhmdJz58T+yWa9/O2Wc8J3phwZ6z19lrPXut9a33W2eC4H/lL+AM4C7giKBSBZwMHJKy7mDgV/ZqTlCJAi4G+oBPksCAAcBbAtoFDA0qUcAFgjI9lVDXplxB04NKFrAo1NmpEXXOA3arzqvAAUElCzgIaFeHdwCnAAOBWuBA4EjgJ93vBAYF1SDgBOAPdXwL0KvrPcCPuu4B6oJqEXtHxKZVnNZYvaBaBDSTTguDahBQA1wBNKQoVq+m3B0aADQCbwIdwPoKLh3AGxZhrd9xUWs51alXvOsTeIDq1jwX6GBguyc6NaVcG3mVScDckB/Mom3GEYYa6lRYAkwA1vbzOvkeaAVGAF2ejn8NPAusBLo9908PQ9U7N88B/mL/6UVnOewBrteLtlTlRvX5c+d79UlQrizSFLSZ8uoL4NrQ348A9+q6Qa6kU/00h18U1N3ANF0vBcZTXn3pQJ0vW4VGcKuub3FedmqoeRr6PgFdBPwZ0Rlb4K9p3rdpTfbkAFUfUW8+8EIxUMsTgOzeMmAUMAaYqfRjoUa3DrhO06VYqInAp552RyvAZIZCQGM9QF1avJZOfOfpnC3wq4DZwLkZPKELtV4R8f2Q85/mJJqZoNoigDap3tvAo1p3rm4D7tf1bo1iUxFQph+AycBwYCTwPPsqNVS7B6hXi/eD0IhcDrSE6qxQpHJ1M/AY2aHSKHNID2sB8LDzWbccwUyN4lnAb57v9upNF7LfrFCbYoJP0VA96rDvwX2KfMfoEGYVsFFZ8O9a7IuBMzViWaCWaOpNUFCapLWVC5RFw6PVqE2jd3UWUdAuQdv+cadSGYtSlyoKtmjzHhE6eUqCWq3vF/zpdlm7cXlB3SF/9pne3iydDtnbu1XF9rYkTY6ImD6oMSGTa9P3QqUbU1W3ZKgpwFeez3fqcPIk4GwFiZf1uU+zlQmkgaoPXfeF2m/WHlkylL3hDRH3egVk+kZ+zTbfK+Wsw9PNUozXM4xUl6deo2Nqi4Yyv/VexL11asiXMtwk4MVagzd4XEIUVCtwmbO1tGmtkgeUea0HlZqs1sZrO/s96nhTTADYpvoWJI6LCc2+6PeSAlCD1nBj6GyxZCjr2LHKaywsP6OIuELG1zo8DLjPSQvC+ljTuJh9amNEglgSFPJd9uZ8o7hII/CEAH1BZbwcfEU5is0aqV+cz1s1NV0jGl7Mtk9NT3i+C/W0nusrnXlBIcc8TNOhoLUew7pBEbBbbn9czPSJglql7cFXuvKEMn0osBYFh26lGK4el8WZ6LiPtFBplQsU8l+zBHc7cLxC9TsKIlMEFM5Qs0I169m+0lEOqIJ2yrrMURScoQOTuICQFqpdU9BXtpQTKk/t9+nXH1DzY6afuZhUUHUxrqA/tFJpS0HrgI8iyo4oKFvIroOeG/pZsz/1syKob9NO0vAw1CDHh/Xq0HCk/FZ/lkuUeGZVD3DoP1ACs/PratZz/wISVG1MJlrp6rCzx32gBHY48GTorLrStVX52WFeIM9vv4N17jA2oQwBTsyxDEnR5ij1z/9bbwKcWZ0k1WZ+cHybR6Voc00pDfwnoZoTHv6t/d9RzlADUwSsBaU2chpwjTbjh7R/zdDZW00Z/8FktI4LrD1r19q/Gji1HG1WvP4G1LoU/LWwWaoAAAAASUVORK5CYII="/>                  {DetailsMathch.channel}</small>
                <small className="py-1">
                <img style={{width:"20px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADT0lEQVR4nO2XTUhVQRTHr69nggUJLexrE7XIaGcilhZGLSLCXdCiNkFBISFIH7RpURiWQYugdpEW0SJqmS2USmrRog+DqEVCQWCSvSgqSX8xdG6chrn3DjLvSXD/cHnOmZlzzv9/Zs69RlGOMADmmWcuE9gCvCQcRoGNlSSwFLgKzBAeM+K7vpwEqoFu4IsV/A7wVv6+ARQ8fBVkrcGY+NCYBDqBYmgS7VJ6rdpHGW8H1gATMu7z8Ncnaz8Ba4EdMh63qv0UaA1BYBlwXSn1DGiT4AZTQI2s3aAS6Erx2aX8bRZbjfhCRGmTWFq4JbMhUAQOAyVx9hk4CsyX+RNix9qHCr7H4XcXMJ2x94jKYb+q9FfgZJyDD4lNwPO0ywc8yUjG4Cew1fL7Qy9I2Dti2RcDF5QAr4BtWd3oWtb5BFbqjpWQzHl1adfJM2nNJe2dBpY74rZKTrHA/SZnvaAo57aU1jFk3SFV6rRkdFd6J8/fruZRzXHggP2ilBw6lSglyb1oJgcVyyuuHm6OCPDCCpaYjLrAQ2rpkGoMWURimAq0O/Kpl1zjk3E3Um2127FhNXDbUoqso6XGdWpvXdI6i8iMFcvgFrDKkZ95rxmMRnJcDIbUggXSIb5bHWOfjB/5EJmNDXgsv7utzjkll36R2jMscwfNoFad+2ZgL/DB1cOBm2I/VkYix+V3QDWhy8AvsU8IwSb1Ul0YO+kR4zfl8CGwXgWqUeo0lJFIg/yaC12t5k3iI2pdnGuP/QY3fd/gvVSlygpkPkUMXodKOsnGn3cFrvcFsFN925njtsJeMCCTp+zNMn9JK1BmImdkeDEhl9My3++abFRnsFZsVXJvzqlj1VIBIi0yLEns5viEWHe60UVUdwGjyFn5xLZRqACRgiPumOQUV2vYSUIcdDgcmPPYawcvJxEDFb9X3QmNjigJosQ94I04aFJzc0Ik+rdr9Upugz7/wCWRnFMiwZATEaSJ4itUEPgECmkjJ5KBvCKCNFF8hQoCn0AhbeREMpBXRJAmiq9QQeATKKSNnEgG8ooI0kTxFSoIfAKFtJETyUBeEUGaKL5CBYFPoJA2ciIZyCsiSBPFV6gg8An0XxGpNKIyEHlQcRZwPziRHFFl8BsJy6XGVC6s9gAAAABJRU5ErkJggg=="/>
                  {DetailsMathch.refree}</small>
              </div>
            </div>
          }
          </>
        </div>

        <SideBar />
      </Row>

      <Row></Row>
    </div>
  );
}

export default DaetailsMatche;
