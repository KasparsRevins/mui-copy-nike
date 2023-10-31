import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import NikeNavbar from "../../Header/navbar";
import CarouselAds from "../../Header/carousel";
import Footer from "../../Footer/footer";

const images = [
  {
    original: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e87becc6-39ec-4696-b6d3-3345fd332088/jordan-true-flight-younger-shoes-jjVD9L.png",
    thumbnail: "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/01b76518-46d8-4cc0-877f-a569679b293c/jordan-true-flight-younger-shoes-jjVD9L.png",
  },
  {
    original: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/868a71f5-8f8c-4aa3-aa00-e6cc74b57083/jordan-true-flight-younger-shoes-jjVD9L.png",
    thumbnail: "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4fc35e3a-f247-4ce0-8824-2d99cfc70ca2/jordan-true-flight-younger-shoes-jjVD9L.png",
  },
  {
    original: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5e60be74-ddb5-4460-9236-1a87cb80f15c/jordan-true-flight-younger-shoes-jjVD9L.png",
    thumbnail: "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0a64954f-2b96-4c96-84b0-2b3d739f1ab1/jordan-true-flight-younger-shoes-jjVD9L.png",
  },
  {
    original: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1324c833-0b91-41e3-a964-e68142c92655/jordan-true-flight-younger-shoes-jjVD9L.png",
    thumbnail: "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ffe4ba4d-a090-4a44-83bc-a088659dd312/jordan-true-flight-younger-shoes-jjVD9L.png",
  },
  {
    original: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5bd4911b-7a65-4bd7-a207-67fbe191ea22/jordan-true-flight-younger-shoes-jjVD9L.png",
    thumbnail: "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f03a2722-c557-4fa1-8f0a-89a7c6a96177/jordan-true-flight-younger-shoes-jjVD9L.png",
  },
  {
    original: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ba5b9d7a-32ec-4642-8400-6b01e92fa111/jordan-true-flight-younger-shoes-jjVD9L.png",
    thumbnail: "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a4eb868c-4f69-4b33-910d-a4c590c565a2/jordan-true-flight-younger-shoes-jjVD9L.png",
  },
  {
    original: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e0398a23-8fee-45f1-bfaa-3db160d6dfc7/jordan-true-flight-younger-shoes-jjVD9L.png",
    thumbnail: "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c422ea00-5c77-46c8-865e-0d12edb1fa5c/jordan-true-flight-younger-shoes-jjVD9L.png",
  },
  {
    original: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/748758bb-ce09-4749-969d-07235d9421fb/jordan-true-flight-younger-shoes-jjVD9L.png",
    thumbnail: "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b8247b60-2a42-480b-b30e-bf7618d80268/jordan-true-flight-younger-shoes-jjVD9L.png",
  },
];

class MyGallery extends Component {
  render() {
    return (
      <div>
        <NikeNavbar />
        <CarouselAds />
        <div className="gallery-container" style={{padding: "1em"}}>
          <h2>Shoe Gallery</h2>
          <ImageGallery
            items={images}
            thumbnailPosition="left"
            useBrowserFullscreen={false}
            showPlayButton={false}
            showIndex={false}
            showFullscreenButton={false}
            slideDuration={0}
            height="500px"
          />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default MyGallery;