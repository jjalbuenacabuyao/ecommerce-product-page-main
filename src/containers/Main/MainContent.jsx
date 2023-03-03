import React, { useState } from "react";
import { Showcase, Description } from "../../components";

import Header from "../Header/Header";

const MainContent = () => {
  const [orderCount, setOrderCount] = useState(0);
  const [order, setOrder] = useState({})
  const price = 125.00;
  let product = {
    name: "Fall Limited Edition Sneakers",
    discountedPrice: price,
    computedPrice: price * orderCount,
    quantity: orderCount,
  };

  return (
    <>
      <Header order={order} />
      <main>
        <Showcase />
        <Description 
          orderCount={orderCount}
          setOrderCount={setOrderCount}
          setOrder={setOrder}
          product={product}
          price={price}
        />
      </main>
    </>
  );
};

export default MainContent;
