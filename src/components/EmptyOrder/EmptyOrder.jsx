import React from 'react'
import styles from "./emptyorder.module.css"

const EmptyOrder = () => {
  return (
    <p className={styles.empty}>Your cart is empty.</p>
  )
}

export default EmptyOrder