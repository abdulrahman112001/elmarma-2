// import React, { useState, useEffect } from "react"
// import Swiper from "react-id-swiper"
// import {
//   Pagination,
//   Navigation,
//   Lazy,
//   Controller,
// } from "swiper/dist/js/swiper.esm"
// import { SwiperSlide } from "swiper/react"

// const PostDetailSlide = ({ media, ImgOverlay }) => {
//   const [swiper, updateSwiper] = useState(null)

//   const [swiperThumbs, updateSwiperThumbs] = useState(null)
//   let params = {
//     modules: [Controller, Pagination, Navigation, Lazy],
//     preloadImages: false,
//     lazy: true,
//     pagination: {
//       el: ".swiper-pagination",
//       type: "bullets",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     loop: false,
//     spaceBetween: 30,
//     getSwiper: updateSwiper, // Get swiper instance callback
//     //  breakpoints:{{
//     //       640: {
//     //         slidesPerView: 1,
//     //       },
//     //       768: {
//     //         slidesPerView: 2,
//     //       },
//     //       1000: {
//     //         slidesPerView: 3,
//     //       },
//     //     }}
//   }
//   let thumbsParams = {
//     modules: [Controller],
//     slideToClickedSlide: true,
//     slidesPerView: "auto",
//     centeredSlides: true,
//     spaceBetween: 10,
//     getSwiper: updateSwiperThumbs, // Get swiper instance callback
//     style: {
//       width: "100px",
//     },
//   }
//   useEffect(() => {
//     if (swiper && swiperThumbs) {
//       swiper.controller.control = swiperThumbs
//       swiperThumbs.controller.control = swiper
//     }
//   }, [swiper, swiperThumbs])

//   return (
//     <div
//       style={{
//         background: "#F2F2F2",
//       }}
//       className="media d-flex flex-column gap-3 p-3 justify-content-center border rounded-max"
//     >
//       <img src={ImgOverlay} alt="..." />

//       <Swiper
//         {...params}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 2,
//           },
//           1000: {
//             slidesPerView: 3,
//           },
//         }}
//       >
//         {media?.map((slide) => (
//           <SwiperSlide className="" key={slide.id}>
//             <div className="rounded-max p-2 border d-flex justify-content-center align-items-center">
//               <img
//                 src="/logo192.png"
//                 alt="full_path"
//                 className="swiper-lazy"
//                 data-src={"/logo192.png"}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <Swiper {...thumbsParams}>
//         {media?.map((slide) => (
//           <SwiperSlide className="swiper-lazy" key={slide.id}>
//             <div className="rounded-max p-2 border d-flex justify-content-center align-items-center">
//               <img src={slide.full_path} alt="full_path" className="w-50" />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   )
// }

// export default PostDetailSlide
