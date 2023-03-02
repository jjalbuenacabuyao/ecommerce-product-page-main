import React from 'react'
import { plusIcon, minusIcon, cartIcon } from '../../images'

const Description = () => {
  return (
    <div>
      <p>Sneaker Company</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

      <div>
        <div>
          <p>$125.00</p>
          <p>50%</p>
        </div>
        <p>$250.00</p>
      </div>

      <div>
        <div>
          <button>
            <img src={minusIcon} alt="" />
          </button>

          <p>0</p>

          <button>
            <img src={plusIcon} alt="" />
          </button>
        </div>

        <button>
          <img src={cartIcon} alt="" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  )
}

export default Description