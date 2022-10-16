import axios from 'axios';
import React, { useState } from 'react'





const ProductAdd = () => {
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productDirection, setProductDirection] = useState('')
  const [productPhoto, setProductPhoto] = useState('')

  const handleSubmitForm = () => {
    // e.preventDefault();

    let formData = new FormData();
    formData.append('productName', productName)
    formData.append('productPrice', productPrice)
    formData.append('productDescription', productDescription)
    formData.append('productDirection', productDirection)
    formData.append('productPhoto', productPhoto)
    formData.append('function', 'insert')

    axios({
      method: 'POST',
      url: 'http://localhost/WD11_PHP/HC_db/hc_product_db.php',
      data: formData,
      config: { headers: { 'Content - Type': 'multipart/form-data' } }
    }).then(function (res) {
      console.log(res)
    }).catch(function (response) {
      console.log(response)
    })
  }




  return (
    <div className='container'>
      <div className="upper">
        <h4>Product</h4>
      </div>

      <form action="">
        <div className="inputs">
          <label htmlFor="productDescription">Product Name:</label>
          <input type="text" name="productName" id="productName" value={productName} onChange={e => setProductName(e.target.value)} />
        </div>
        <div className="inputs">
          <label htmlFor="productPrice">Product Price:</label>
          <input type="text" name="productPrice" id="productPrice" value={productPrice} onChange={e => setProductPrice(e.target.value)} />
        </div>
        <div className="inputs">
          <label htmlFor="productDescription">Product Desctiption:</label>
          <textarea name="productDescription" id="productDescription" cols="30" rows="10" value={productDescription} onChange={e => setProductDescription(e.target.value)}></textarea>
        </div>
        <div className="inputs">
          <label htmlFor="productDirection">Cooking Directions:</label>
          <textarea name="productDirection" id="productDirection" cols="30" rows="10" value={productDirection} onChange={e => setProductDirection(e.target.value)}></textarea>
        </div>
        <input type="file" name="productPhoto" id="productPhoto" value={productPhoto} onChange={e => setProductPhoto(e.target.value)} />
        <input type="button" value="Submit" name="submit" onClick={handleSubmitForm} />
      </form>

    </div>
  )
}

export default ProductAdd