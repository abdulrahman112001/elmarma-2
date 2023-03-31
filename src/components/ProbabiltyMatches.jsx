import axios from "axios";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useQuery } from "react-query";

function ProbabiltyMatches() {
    const idLoca = window.location.href.slice(38)


    const { data: stastics } = useQuery("newsDataParent", () =>
    axios
      .get(`https://elmarma.com/api/v1/stastics-leagues-tournaments/${idLoca}`)
      .then((res) => res.data.data)
  );
  const stasticsData = stastics ? stastics : [];
  console.log("🚀 ~ file: ProbabiltyMatches.jsx:14 ~ ProbabiltyMatches ~ stasticsData:", stasticsData)


  return (
    <>

        <div
            className="  px-3 py-1 rounded-top border-bottom border-2 mt-5"
            style={{
                width: "fit-content",
                backgroundColor: "#F2F2F2",
                boxShadow: " 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);",
            }}
        >
            <h4 className="fs-4 rounded-top"> الاحصائيات </h4>
        </div>
            <div className="p-2" style={{background:'#EDEDED'}} >
           <Row>
            <Col sm={12} xl={5} className='bg-white m-3 p-1 rounded-3'>
                <div className="d-flex align-items-center justify-content-between ">
                    <div>

                        <div className="d-flex gap-2 align-items-center" >

                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M1.33398 5.71431C1.33398 4.27765 1.33398 3.55931 1.72451 3.113C2.11503 2.66669 2.74357 2.66669 4.00065 2.66669H12.0006C13.2577 2.66669 13.8862 2.66669 14.2768 3.113C14.6673 3.55931 14.6673 4.27765 14.6673 5.71431V10.2858C14.6673 11.7224 14.6673 12.4408 14.2768 12.887C13.8862 13.3334 13.2577 13.3334 12.0006 13.3334H4.00065C2.74357 13.3334 2.11503 13.3334 1.72451 12.887C1.33398 12.4408 1.33398 11.7224 1.33398 10.2858V5.71431Z"
                                stroke="#1E1E1E"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M7.99935 9.33335C8.73573 9.33335 9.33268 8.7364 9.33268 8.00002C9.33268 7.26364 8.73573 6.66669 7.99935 6.66669C7.26297 6.66669 6.66602 7.26364 6.66602 8.00002C6.66602 8.7364 7.26297 9.33335 7.99935 9.33335Z"
                                stroke="#1E1E1E"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M8 6.66667V3.33334M8 9.33334V12.6667"
                                stroke="#1E1E1E"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M14.6673 6H13.0007C12.6325 6 12.334 6.29848 12.334 6.66667V9.33333C12.334 9.70153 12.6325 10 13.0007 10H14.6673"
                                stroke="#1E1E1E"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M1.33398 6H3.00065C3.36884 6 3.66732 6.29848 3.66732 6.66667V9.33333C3.66732 9.70153 3.36884 10 3.00065 10H1.33398"
                                stroke="#1E1E1E"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                            </svg>
                            <h5> المباريات </h5>
                        </div>
                        <p>
                        المباريات المتبقية : 32 مباراة 
                        </p>
                    </div>
                <h1  style={{color:'#0573F6'}}>
                    54
                </h1>

                </div>

            </Col>
            <Col sm={12} xl={5} className='bg-white m-3 p-1 rounded-3'>
                <div className="d-flex align-items-center justify-content-between ">
                    <div>

                        <div className="d-flex gap-2 align-items-center" >

                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M1.33398 5.71431C1.33398 4.27765 1.33398 3.55931 1.72451 3.113C2.11503 2.66669 2.74357 2.66669 4.00065 2.66669H12.0006C13.2577 2.66669 13.8862 2.66669 14.2768 3.113C14.6673 3.55931 14.6673 4.27765 14.6673 5.71431V10.2858C14.6673 11.7224 14.6673 12.4408 14.2768 12.887C13.8862 13.3334 13.2577 13.3334 12.0006 13.3334H4.00065C2.74357 13.3334 2.11503 13.3334 1.72451 12.887C1.33398 12.4408 1.33398 11.7224 1.33398 10.2858V5.71431Z"
                                stroke="#1E1E1E"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M7.99935 9.33335C8.73573 9.33335 9.33268 8.7364 9.33268 8.00002C9.33268 7.26364 8.73573 6.66669 7.99935 6.66669C7.26297 6.66669 6.66602 7.26364 6.66602 8.00002C6.66602 8.7364 7.26297 9.33335 7.99935 9.33335Z"
                                stroke="#1E1E1E"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M8 6.66667V3.33334M8 9.33334V12.6667"
                                stroke="#1E1E1E"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M14.6673 6H13.0007C12.6325 6 12.334 6.29848 12.334 6.66667V9.33333C12.334 9.70153 12.6325 10 13.0007 10H14.6673"
                                stroke="#1E1E1E"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M1.33398 6H3.00065C3.36884 6 3.66732 6.29848 3.66732 6.66667V9.33333C3.66732 9.70153 3.36884 10 3.00065 10H1.33398"
                                stroke="#1E1E1E"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                            </svg>
                            <h5> المباريات </h5>
                        </div>
                        <p>
                        المباريات المتبقية : 32 مباراة 
                        </p>
                    </div>
                <h1  style={{color:'#0573F6'}}>
                    54
                </h1>

                </div>

            </Col>
            <Col sm={12} xl={5} className='bg-white m-3 p-1 rounded-3'>
                <div className="d-flex align-items-center justify-content-between ">
                    <div>

                        <div className="d-flex gap-2 align-items-center" >

                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M1.33398 5.71431C1.33398 4.27765 1.33398 3.55931 1.72451 3.113C2.11503 2.66669 2.74357 2.66669 4.00065 2.66669H12.0006C13.2577 2.66669 13.8862 2.66669 14.2768 3.113C14.6673 3.55931 14.6673 4.27765 14.6673 5.71431V10.2858C14.6673 11.7224 14.6673 12.4408 14.2768 12.887C13.8862 13.3334 13.2577 13.3334 12.0006 13.3334H4.00065C2.74357 13.3334 2.11503 13.3334 1.72451 12.887C1.33398 12.4408 1.33398 11.7224 1.33398 10.2858V5.71431Z"
                                stroke="#1E1E1E"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M7.99935 9.33335C8.73573 9.33335 9.33268 8.7364 9.33268 8.00002C9.33268 7.26364 8.73573 6.66669 7.99935 6.66669C7.26297 6.66669 6.66602 7.26364 6.66602 8.00002C6.66602 8.7364 7.26297 9.33335 7.99935 9.33335Z"
                                stroke="#1E1E1E"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M8 6.66667V3.33334M8 9.33334V12.6667"
                                stroke="#1E1E1E"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M14.6673 6H13.0007C12.6325 6 12.334 6.29848 12.334 6.66667V9.33333C12.334 9.70153 12.6325 10 13.0007 10H14.6673"
                                stroke="#1E1E1E"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M1.33398 6H3.00065C3.36884 6 3.66732 6.29848 3.66732 6.66667V9.33333C3.66732 9.70153 3.36884 10 3.00065 10H1.33398"
                                stroke="#1E1E1E"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                            </svg>
                            <h5> المباريات </h5>
                        </div>
                        <p>
                        المباريات المتبقية : 32 مباراة 
                        </p>
                    </div>
                <h1  style={{color:'#0573F6'}}>
                    54
                </h1>

                </div>

            </Col>
            <Col sm={12} xl={5} className='bg-white m-3 p-1 rounded-3'>
                <div className="d-flex align-items-center justify-content-between ">
                    <div>

                        <div className="d-flex gap-2 align-items-center" >

                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M1.33398 5.71431C1.33398 4.27765 1.33398 3.55931 1.72451 3.113C2.11503 2.66669 2.74357 2.66669 4.00065 2.66669H12.0006C13.2577 2.66669 13.8862 2.66669 14.2768 3.113C14.6673 3.55931 14.6673 4.27765 14.6673 5.71431V10.2858C14.6673 11.7224 14.6673 12.4408 14.2768 12.887C13.8862 13.3334 13.2577 13.3334 12.0006 13.3334H4.00065C2.74357 13.3334 2.11503 13.3334 1.72451 12.887C1.33398 12.4408 1.33398 11.7224 1.33398 10.2858V5.71431Z"
                                stroke="#1E1E1E"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M7.99935 9.33335C8.73573 9.33335 9.33268 8.7364 9.33268 8.00002C9.33268 7.26364 8.73573 6.66669 7.99935 6.66669C7.26297 6.66669 6.66602 7.26364 6.66602 8.00002C6.66602 8.7364 7.26297 9.33335 7.99935 9.33335Z"
                                stroke="#1E1E1E"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M8 6.66667V3.33334M8 9.33334V12.6667"
                                stroke="#1E1E1E"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M14.6673 6H13.0007C12.6325 6 12.334 6.29848 12.334 6.66667V9.33333C12.334 9.70153 12.6325 10 13.0007 10H14.6673"
                                stroke="#1E1E1E"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                                <path
                                d="M1.33398 6H3.00065C3.36884 6 3.66732 6.29848 3.66732 6.66667V9.33333C3.66732 9.70153 3.36884 10 3.00065 10H1.33398"
                                stroke="#1E1E1E"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                            </svg>
                            <h5> المباريات </h5>
                        </div>
                        <p>
                        المباريات المتبقية : 32 مباراة 
                        </p>
                    </div>
                <h1  style={{color:'#0573F6'}}>
                    54
                </h1>

                </div>

            </Col>
        </Row>
       </div>
    </>
  );
}

export default ProbabiltyMatches;
