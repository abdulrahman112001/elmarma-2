import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import CustomLeagues from "./CustomLeagues";
import MatchesCustomComp from "./MatchesCustomComp";
function CustomNavbar({ close }) {
  return (
    <div style={{ margin: "30px 0" }}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="legues">
        <Row>
          <Col
            sm={3}
            className="col-5 p-0 "
            style={{ backgroundColor: "#252525" }}
          >
            <Nav variant="pills" className="flex-column" >
              <Nav.Item>
                <Nav.Link
                  eventKey="matches"
                  className="py-2 "
                  style={{ borderBottom: " 1px solid white" }}
                >
                  <Link
                    to={"matches"}
                    className="nav-link  text-white"
                    aria-current="page"
                  >
                    <img
                      className="img-icon-navbr"
                      src="data:image/png;base64,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"
                    />
                    المباريات
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="news"
                  className="py-2"
                  style={{ borderBottom: " 1px solid white" }}
                >
                  <Link
                    to={"posts-home"}
                    className="nav-link  text-white"
                    aria-current="page"
                    onClick={close}
                  >
                    <img
                      className="img-icon-navbr"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO2aTUhVQRTHb2qSJGIaJAUJQrZQRLKNELjJSGrR3k24FFwUSDt16U5BcBMmguFGiPK9fbtIChET8guyjeBHRkq4MH5x5VwYcrx37rvv3ndfzh9m8ebMmTn/O+fM4Z0Zx7FIIYA6oK2A7Q5QHpXEReAHhcd4VCLVMtEx8KkAbV3Wf5MvIvuRJsp9/SeWiAq7I3nC/+han4EXBq0P6ATK0kpkP+RxvQG0BxIBsuQfcz5EFoFhTfNy3B7wChgF5qXvEGgMIpKJgci7MDEC3PVsA+qV/gvAtMhmfIkkhQAiQyIb08huieynSyztRCZE1nOGrhdXVWmKER2RSZE9DSBSnfYYmYxMJClYIo7dkXhgXcs5b64F3AeOfI7S3+6YkHlnrhiIZAyI2Dzi5LojSSGNrpU1cC0bI06uO3JuEyJQa1DjrSmGGPliECPLxUBk0KDOO5g4kaSQOiLYGMHGCDZGfAB0GBSg74V0rZci6zYJ9ir5cRDx+P1GMDY1xjwW2VuNrBUYOTFUT+SXWqArAf5Ix+UIRB6dUYRW20Of+u57JwRcW0XvSO1ck85mJ2EA12Tt7ZMarrnebdFb0fniUFwGBxjlZn0XHSF0nonOlNrZrnyV63EZ7GNUr6w/D1QYjL8EfBWdrn+FsyJwv86NOA3XGFYmV2/IH7QrAQ8cvLuRD6fc0VUGlmTALjAANCRBRNZvUE6+LaBf/aBAKfAA+ChjdtTLHx0Zjy3KpEm9gtjkNL4DC3Kh42EVaDFNbq/l3i5NWAaeA5Vht9u9q7tZ4JdDTZIYr4YyvljxF+vX9DJXP8aOAAAAAElFTkSuQmCC"
                    />
                    الاخبار
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="legues"
                  className="py-2"
                  style={{ borderBottom: " 1px solid white" }}
                >
                  <Link
                    to={"leagues"}
                    className="nav-link  text-white"
                    aria-current="page"
                  >
                    <img
                      className="img-icon-navbr"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE+0lEQVR4nO2be4gVVRzHT1o+s9TMIrS//KuiVCQ1TYIN6QVh0hYVsWH1RySZGWUpQvYyyp5UUJG11oYQFPYgzAjtTVYEQWUlWVbWRlpt2+PmJ37Nd7inYe/szL2zd2a2+4ELlzu/85sze875PWeda9GiRTMAJgOXAuuBbUA38Kc+3fqtE7gEmOQGA8B+wOnAy8DfJMdkNwGnmQ5XRoDpwFveQ/UCzwJLgFnaEaP0ORKYAywDngP+8Ma9AUx1ZQEYAlwH/KUH+A64FpiQQsdhwEodDaTrmsLvBmAY0KVJ7wMeBw5pQN844G7v+DwNjHBFBNhfWzykApyQgd6TIvbjGWCoKxrAA5rgL8CT+r4dGNmAztHADunqlG7jXlckgHO9s2pWf4Qe3ljegN5V0vExMBw4QzvLONsVAWA88L0mtdj7fb5+2wu8DlyQQudFwGveird515Z4xnWsyxvgDk3oFd9K2/n3PIFxVx3HKdxVsyOxxRZdW+MKsPq/yuJPj1xrA3o00a/TGC4ZVFth42czhJHrMz17M87lBXC5JvJSjetDPV9+dAq90zTGjtaQGjKbJXOZywtgqyZxToxMGBcsTaHXgh5jfYzM+ZJ51eUBcKASGTujB8XILdJE7dzOSKD3eBlNo6OfIKmisHm0azYERs54N0ZmErDHM2j2BxsVIz8mYjh/Ao6Ikf9AcrNcswE6dPPOfozkR94DrUygd7Un/yFwcILjdaFrNgSZm3F7AlnzFCSJCu04SXZvAtk709qXzABW6OY3JJD9QbLjE8hOlOzuBLI3SvZ6l6MLvC3HHbA2N1dINf5/LEbmcC8nMFalWFU0dmKM7BOSa3fNBpitm78TIzNZuUBIT9wukGvtTeEF3pPcTJdT8aNHrm1MjNzFmqQFTccm0DsVeFNjFsXIjVUcYMfrAJcHVMPRmqkp8JRklqXQayU1oytG5jzJbHJ5QVDmNl6MyQV+lEy/q++Nm6Ex3bWSKFWNY3fJgENQsdmjbHBa5Np8Lxv8po5sMKwxmE04uY9weZ9sRM3IsikAt2qimyP1gBO96o1xTwqdDyasB9zk8obAcn8V9cfAPC9nT1sR6tCYMH6Y20f8sTOXJKgvgAXeap1iVhl4P2n8XwuLMqVjm47FXGV/tv3PdEUCuNmr4KzT9y8aOaPKDr+UrnU688ZqV9CO0Abv7Fotf14Getu04iFdhe0QEbi9+yOdoQkZdoYetqPgig5B6fo3TXq39QaAQ1P2Bld4WaS50ytcmQCmeJFi6M+tdXal1x22BspIfbcK01XARuB3b5y11qe4skLQ9rZ+XlpszBw3WKDKQ5ZBAt9qV/Tq+9u69i9usEHCB2v9AYQrOwRxgXmDTyI5QVIq6govLqzfjwO4j+wo1vsACas6yMC1W/WozopTu1ciO86VBao9g0cy0PVobrX/egGu1qTXRn4Pe35xbK3R/EhcUssdYKEmvbFGNzmOLZExFhkaC11ZAI7RpD/NQNf2tO8X5A7BC00VfYY3oGeYiiyVwr4fWAvgc63cUa5ObNWl4zNXNoAXNPkFDeg4Szqed2WDauOykfcEl/flTQoNwSvuYZU4S0znqa7oMDAPH7LTFR1EWfRmzv/yD0Dgr9eoBzjQ7FI7LnWC1Yz+YDO5xRUFglUhi3+QSHAva48Zu1xRQAzW+/ULOeGKAsnS3Kz5T9rcokULVw//AJ/nPyhb2gN4AAAAAElFTkSuQmCC"
                    />
                    الدوريات والبطولات
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="medias"
                  className="py-2"
                  style={{ borderBottom: " 1px solid white" }}
                >
                  <Link
                    to={"medias"}
                    className="nav-link  text-white"
                    aria-current="page"
                    onClick={close}
                  >
                    <img
                      className="img-icon-navbr"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcklEQVR4nO2YvUrEQBCAFwtrG7nizlJB0IewlNja+ho+wDV22voEh4o/cKeNXCX22gg+gmBE7xrhik/CTWQNHJdbQzIJ81XJZnYzH7ObLOucYRiGYRQM0AEugBF6GAGXwPoiEjF6iYF2HpGkEgn9XB1KAmgDA8ntLE+HdDqpkUgB1iS3TzePtH5OKeTNz0SaVBHgHtgO6atNJGECnAKrIWPMo0yRlA/gEFgOGUuLyLV3/QLshoxXuYhc7wBPnlAh64eyReR+CTgA3opaP1Qh4rWvAEfA93/XD1WKeM83gHNvur0C+0W+o0yRfkZkr8h3/GJTyzV0sTP9/D5nPr9bIeNWJtKYH2JTtiiTJmwa74DNkL6qRMoAE6lxRWKJ7Ti9x0HveYJ7EjzQJMP0BPRWcuvNCnqkvjz4IpoOqxflyxcZSuOVqwnAjeQ89Bsjz/AYaDmlAC3gxMs3ygZ0qR/dWbaRTLMxehlLjn8rYRiGYRgunB8786sDzpmYowAAAABJRU5ErkJggg=="
                    />
                    ميديا المرمى
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="translate"
                  className="py-2"
                  style={{ borderBottom: " 1px solid white" }}
                >
                  <Link
                    to={""}
                    className="nav-link  text-white"
                    aria-current="page"
                    onClick={close}
                  >
                    <img
                      className="img-icon-navbr"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZElEQVR4nNWaWYhOYRjHn2EwdiF7lriQyFoSZZlIUpoQIUuyhYQroqZMXBgXGBe4oZSyJktZkihrXMhWkiyDCVHGPvz0NM+XN33fd86YM9Pz/erUdN7/97z/s7zved7nHZE0AM2o5gfwErgDnAZ2AkuB4UAj8Q7Qimg+AxeAVUBP8QrQHpgMlALlMS7sGjAPKBCvAPnAFOBsYFwvrgw4ClQG598B64Hm4hlgHHDPTP8E1tqruNTGUopXwGIgT7wCFADbgN9mehfQwNoKgRvBBZ0DuopngDnANzNcFpzPA6YBr63tvY438QwwAfhuhjekmTCOBq/hfPEMMAP4ZUdhmvbV9hrqsUY8A2yxO68f0LZp2mfZB1ZZIF4BGgG3zOjeDJoie2pfgKHiFWCgGdXx0DeDZqNd7HOgnXgF2G9Gj2RozwsmgF3iFaCHPREd2L0zaNoCFUAVMEi8Ahy3O16SRTPfNJfFK8CkYAZrmEHTELhvurHiEapNaq6ljInxVE6IV4B9ZnJTFk1Ty5Z1THUQj9gHULkaodttuuXiEb3DNnPp3W4Vkaspp8Qr9tFTRkW8XppBf3JbBwhWlFlzK+CK6QaLR4DtZnBzhE6rM8pC8QiwLFu6EuiWmK5UPAJMNYM3InTjTXdYHBcqlAcRuv6muy4e0cGbStljTNXKI/GIViBTxYcIXUvTvak/d9UddwoqJHH4HqMAWBMqEisx2QDV1WAsYsSLi/Y5PpGLCDovDu5Ql0SDBwAdg2y6WJJGq4vB1/tSprVHAn2ctz4u1kUf4YxTHpWy1yJ+icV+A3ROOv6/nY22LFff34kJxi20dX1VusJfnWBbCak6b48E4nUD3lrMdcm4jNexlnlOWMfXgca1iJUfZMRnUpX+esPKPE/NwNZaxCm1GC+0EJ6sy/gmhlt1XleHRf/x+8nBynJk3biMb0Z3sZQPQK8a/K67FSNwUbW38XLMDN0EmsQsgl+135x0s2UHtAGemLEdMfSpVeIzd8VtYFiwNTc7i266aX4AI8QjwEoz+SndVgPQB/homhXiGeCAGb2r5Z9/dodvW9sh8Q7QAnhohncH5/fYucdAa8kFgAG25abMBWba31+BIZJLAIvMfGXwbx+LJBfh79acclByFarHy307WkguA/TTI8mgfwASYDAS9xWJ+gAAAABJRU5ErkJggg=="
                    />
                    اخر الانتقالات
                  </Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col
            sm={9}
            className="col-7 p-0 result-coustom-navbar"
            style={{ backgroundColor: "#333333" }}
          >
            <Tab.Content>
              <Tab.Pane eventKey="matches">
                <MatchesCustomComp />
              </Tab.Pane>
              <Tab.Pane eventKey="news"></Tab.Pane>
              <Tab.Pane eventKey="legues">
                <CustomLeagues close={close} />
              </Tab.Pane>
              <Tab.Pane eventKey="medias">2</Tab.Pane>
              <Tab.Pane eventKey="translate">2</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default CustomNavbar;
