import React, { useState } from 'react'
import { Showcase, Description } from '../../components'

const MainContent = () => {
  const [orderCount, setOrderCount] = useState(0);
  const [order, setOrder] = useState({})
  return (
    <main>
      <Showcase />
      <Description orderCount={orderCount} setOrderCount={setOrderCount} setOrder={setOrder}/>
    </main>
  )
}

export default MainContent