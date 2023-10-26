import React from "react";
import NikeNavbar from "../../Header/navbar";
import CarouselAds from "../../Header/carousel";

function NewFeaturedDetails() {
    const products = [
        {
          id: 1,
          name: 'Running Shoes',
          price: 99.99,
          imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/329f1771-196d-40a2-83be-c045974bf685/jordan-true-flight-older-shoes-QtbhRW.png',
        },
        {
          id: 2,
          name: 'Running Clothing',
          price: 49.99,
          imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b81dc45-116d-42ce-9d49-5a7c5c9bfa16/dunk-low-shoes-15mQNw.png',
        },
        // Add more products as needed
      ];
  return (
    <div>
      <NikeNavbar />
      <CarouselAds />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "1em" }}>
        <div>
          <h2>New Trainers & Gear</h2>
        </div>
        <div style={{display: "flex", flexDirection: "row"}}>
          <p>Show Filters</p>
          <p>Sort By</p>
        </div>
      </div>
      <div>
        <section>
        <div style={{  display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "1em" }}>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.imageSrc} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
        </section>
      </div>
    </div>
  );
}

export default NewFeaturedDetails;
