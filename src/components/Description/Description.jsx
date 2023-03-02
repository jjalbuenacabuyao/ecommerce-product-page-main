import React, { useState } from 'react'
import styles from "./description.module.css"
import { plusIcon, minusIcon, cartIconWhite } from '../../images'

const Description = () => {
  let [orderCount, setOrderCount] = useState(0);

  return (
    <div className={styles.description}>
      <p className={styles.company}>Sneaker Company</p>
      <h1 className={styles.heading}>Fall Limited Edition Sneakers</h1>
      <p className={styles.text__content}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

      <div className={styles.price}>
        <div>
          <p className={styles.discounted__price}>$125.00</p>
          <p className={styles.discount}>50%</p>
        </div>
        <p className={styles.original__price}>$250.00</p>
      </div>

      <div className={styles.order}>
        <div className={styles.button__group}>
          <button onClick={() => setOrderCount(orderCount == 0 ? 0 : --orderCount)}>
            <img src={minusIcon} alt="Minus icon" />
          </button>

          <p>{orderCount}</p>

          <button onClick={() => setOrderCount(orderCount + 1)}>
            <img src={plusIcon} alt="Plus icon" />
          </button>
        </div>

        <button className={styles.add__to__cart}>
          <img src={cartIconWhite} alt="Cart Icon" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  )
}

export default Description