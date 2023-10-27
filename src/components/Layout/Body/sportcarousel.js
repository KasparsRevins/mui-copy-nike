import { Box } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // You may need to import the CSS if it's not already done in your project
import { Link } from "react-router-dom";

const SportCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1540 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1540, min: 1040 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 1040, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <>
      <h3 style={{ marginLeft: "1em", marginRight: "1em" }}>Shop by Sport</h3>
      <Box sx={{ padding: "20px 0 20px 0", cursor: "pointer" }}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={true}
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
          <div>
            <Link
              to="/ComingSoon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/3aef76c8-46c5-4f2a-a18c-3e9bdc148433/nike-just-do-it.jpg"
                alt="NikeApparel"
                style={{ maxWidth: "300px" }}
              />
              <p>Running</p>
            </Link>
          </div>
          <div>
            <Link
              to="/ComingSoon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/5027a28c-3984-4287-94d1-ee6198238ce9/nike-just-do-it.jpg"
                alt="NikeApparel"
                style={{ maxWidth: "300px" }}
              />
              <p>Football</p>
            </Link>
          </div>
          <div>
            <Link
              to="/ComingSoon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/be13cfe4-b5a9-4c26-bee0-b716e98b099d/nike-just-do-it.jpg"
                alt="NikeApparel"
                style={{ maxWidth: "300px" }}
              />
              <p>Basketball</p>
            </Link>
          </div>
          <div>
            <Link
              to="/ComingSoon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/b4722f0f-c0e4-4a1b-8050-9f026ef947e9/nike-just-do-it.jpg"
                alt="NikeApparel"
                style={{ maxWidth: "300px" }}
              />
              <p>Training</p>
            </Link>
          </div>
          <div>
            <Link
              to="/ComingSoon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/5f432ab0-7ed1-48b9-b8c8-9eb3f5dcb63d/nike-just-do-it.jpg"
                alt="NikeApparel"
                style={{ maxWidth: "300px" }}
              />
              <p>Tennis</p>
            </Link>
          </div>
          <div>
            <Link
              to="/ComingSoon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/11550514-c82b-46b2-afd8-e5dd62698371/nike-just-do-it.jpg"
                alt="NikeApparel"
                style={{ maxWidth: "300px" }}
              />
              <p>Dance</p>
            </Link>
          </div>
          <div>
            <Link
              to="/ComingSoon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/ed6efa3d-bb62-4d41-89f1-49d01418fe49/nike-just-do-it.jpg"
                alt="NikeApparel"
                style={{ maxWidth: "300px" }}
              />
              <p>Yoga</p>
            </Link>
          </div>
          <div>
            <Link
              to="/ComingSoon"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/1d2fd0c4-a7dd-4159-84c0-a0364c0990e3/nike-just-do-it.jpg"
                alt="NikeApparel"
                style={{ maxWidth: "300px" }}
              />
              <p>Skateboarding</p>
            </Link>
          </div>
        </Carousel>
      </Box>
    </>
  );
};

export default SportCarousel;
