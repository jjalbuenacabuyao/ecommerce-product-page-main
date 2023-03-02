import React, { useState } from "react";
import styles from "./showcase.module.css";
import {
  product1,
  product2,
  product3,
  product4,
  next,
  prev,
} from "../../images";

const Showcase = () => {
  let [slide, setSlide] = useState(0);
  const images = [product1, product2, product3, product4];
  return (
    <div className={styles.showcase}>
      {images.map((image, index) => (
        <img
          key={index}
          className={styles.showcase__img}
          src={image}
          data-active-slide={index === slide ? true : false}
        />
      ))}

      <button
        className={styles.showcase__prev}
        onClick={() => setSlide(slide == 0 ? 0 : --slide)}
        disabled={slide == 0 ? true : false}
      >
        <img src={prev} alt="" />
      </button>

      <button
        className={styles.showcase__next}
        onClick={() => setSlide(slide == 3 ? 3 : ++slide)}
        disabled={slide == 3 ? true : false}
      >
        <img src={next} alt="" />
      </button>
    </div>
  );
};

export default Showcase;
