import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductAdd from './ProductAdd';
import ProductCard from './ProductCard';








const ProductContent = () => {
  const [product, setProduct] = useState([])


  useEffect(() => {
    const url = 'http://localhost/WD11_PHP/HC_db/hc_product_db.php'
    axios.get(url).then((res) => {
      setProduct(res.data)
    })


  }, [])
  return (
    <div>
      <ProductAdd />
      <div className="container mb-2">
        <div className="cards-">
          {
            product.map((data) => {
              return (
                <ProductCard key={data.recipe_id} productName={data.product_name} productDesc={data.product_description} productPrice={data.product_price} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProductContent