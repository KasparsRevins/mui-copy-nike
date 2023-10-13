import { Box } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // You may need to import the CSS if it's not already done in your project

const MyCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <Box sx={{ padding: "20px 0 20px 0", cursor: "pointer" }}>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {/* Add your carousel items here */}
        <div>
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/26688ed0-7fa0-4a0b-915f-25b31d0152b0/nike-just-do-it.jpg" />
          1
        </div>
        <div>
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/5555c8b6-8872-4bcc-aac5-e15a9497f781/nike-just-do-it.jpg" />
          2
        </div>
        <div>
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/ed96d4de-ea50-4e0e-98a6-5134aaf352c9/nike-just-do-it.jpg" />
          3
        </div>
        <div>
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/9b13e501-3ffe-455b-a586-daa6efb859de/nike-just-do-it.jpg" />
          4
        </div>
        <div>
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/9ee65605-240c-4023-867b-5f3a40f73b7c/nike-just-do-it.jpg" />
          5
        </div>
        <div>
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/bf7333fb-8ecb-4394-bb0f-05b8a7cbb946/nike-just-do-it.jpg" />
          6
        </div>
        {/* Add more items as needed */}
      </Carousel>
    </Box>
  );
};

export default MyCarousel;