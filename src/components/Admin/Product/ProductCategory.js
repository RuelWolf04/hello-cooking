import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs'

import './Product.css'

const ProductCategory = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [category, setCategory] = useState([])
  const [addCategory, setAddCategory] = useState('')

  const handleAddCategory = () => {
    setIsOpen((current) => !current)
  }


  useEffect(() => {
    const url = 'http://localhost/WD11_php/HC_db/category_tbl.php'
    axios.get(url).then((res) => {
      setCategory(res.data)
    })

  }, [])


  const handleAdding = () => {

    let formData = new FormData();
    formData.append('addCategory', addCategory)

    axios({
      method: 'POST',
      url: 'http://localhost/WD11_php/HC_db/category_tbl.php',
      data: formData,
      // config: { headers: { 'Content - Type': 'multipart/form-data' } }
    })
  }



  return (
    <>
      <div className='container'>
        <div className="heading">
          <h3>Categories</h3>
          <button className='add' onClick={handleAddCategory}><span><BsPlus /></span>ADD</button>
        </div>
        <table>
          <tbody>
            {
              category.map((data) => {
                return (
                  <tr key={data.category_id}>
                    <td>{data.category_name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className={isOpen ? 'overlay active' : 'overlay'}>
        <div className="category-add-modal">
          <h4>Add Category</h4>
          <form action="">
            <input type="text" name='productCategory' id='productCategory' value={addCategory} onChange={e => setAddCategory(e.target.value)} />
            <button onClick={handleAdding}>Add</button>
            <button onClick={handleAddCategory}>Cancel</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProductCategory