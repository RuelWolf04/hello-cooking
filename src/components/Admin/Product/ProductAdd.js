import axios from 'axios';
import React, { useEffect, useState } from 'react'





const ProductAdd = () => {
  const [category, setCategory] = useState([])
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productDirection, setProductDirection] = useState('')
  const [productPhoto, setProductPhoto] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleSubmitForm = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('productName', productName)
    formData.append('productPrice', productPrice)
    formData.append('productDescription', productDescription)
    formData.append('productDirection', productDirection)
    formData.append('productPhoto', productPhoto)
    formData.append('productCategory', selectedCategory)
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


  useEffect(() => {
    const url = 'http://localhost/WD11_php/HC_db/category_tbl.php';
    axios.get(url).then((res) => {
      setCategory(res.data)
    })

  }, [])




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
        <div>
          <select name="selectCategory" id="selectCategory" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="" selected>Category</option>
            {
              category.map((data) => {
                return <option value={data.category_id}>{data.category_name}</option>
              })
            }
          </select>
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