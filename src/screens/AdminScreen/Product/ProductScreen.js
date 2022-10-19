import React from 'react'
import ProductContent from '../../../components/Admin/Product/ProductContent'
import Header from '../../../components/Admin/AdminLayout/Header'
import Sidebar from '../../../components/Admin/AdminLayout/Sidebar'

const ProductScreen = () => {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <Sidebar />
        <div className="content">
          <ProductContent />
        </div>
      </div>


    </>
  )
}

export default ProductScreen