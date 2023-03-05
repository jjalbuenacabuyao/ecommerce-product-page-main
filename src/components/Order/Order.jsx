import React from "react";
import { product1, deleteIcon } from "../../images";
import styles from "./order.module.css";

const Order = ({order}) => {
  return (
    <>
      <div className={styles.order}>
        <img src={product1} className={styles.order__img} alt="" />

        <div>
          <p className={styles.order__name}>{order.name}</p>
          <p>
            ${order.discountedPrice}.00 x {order.quantity} <span className={styles.order__price}>${order.computedPrice}.00</span>
          </p>
        </div>

        <button className={styles.checkout}>
          <img src={deleteIcon} alt="" />
        </button>
      </div>

      <button>Checkout</button>
    </>
  );
};

export default Order;
