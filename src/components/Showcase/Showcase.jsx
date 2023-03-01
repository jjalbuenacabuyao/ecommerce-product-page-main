import React, { useState } from "react";
import styles from "./showcase.module.css";
import product1 from "../../images/image-product-1.jpg";
import product2 from "../../images/image-product-2.jpg";
import product3 from "../../images/image-product-3.jpg";
import product4 from "../../images/image-product-4.jpg";
import next from "../../images/icon-next.svg";
import prev from "../../images/icon-previous.svg";

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

      <button className={styles.showcase__prev} onClick={() => setSlide(slide == 0 ? 0 : --slide)}>
        <img src={prev} alt="" />
      </button>

      <button
        className={styles.showcase__next}
        onClick={() => setSlide(slide == 3 ? 3 : (++slide))}
      >
        <img src={next} alt="" />
      </button>
    </div>
  );
};

export default Showcase;
