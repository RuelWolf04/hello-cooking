import React from 'react'

const ProductCard = (props) => {
  return (
    <div className="card-">
      <div className="prod-img-container">

      </div>
      <div className="prod-info-container">
        <h3>{props.productName}</h3>
        <p>{props.productDesc}</p>
        <span>₱{props.productPrice}</span>
      </div>

    </div>

  )
}

export default ProductCard