import React, { useContext } from "react";
import { product1, deleteIcon } from "../../images";

const Order = ({order}) => {
  return (
    <>
      <div>
        <img src={product1} alt="" />

        <div>
          <p>{order.name}</p>
          <p>
            ${order.discountedPrice}.00 x {order.quantity} ${order.computedPrice}.00
          </p>
        </div>

        <button>
          <img src={deleteIcon} alt="" />
        </button>
      </div>

      <button>Checkout</button>
    </>
  );
};

export default Order;
