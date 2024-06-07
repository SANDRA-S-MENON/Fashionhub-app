import React from 'react'
import NavBar from './NavBar'

const DeleteProduct = () => {
  return (
    <div>
        <NavBar/>
        <h1><center>DELETE PRODUCT</center></h1>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Product Name</label>
            <input type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-danger">Delete Product</button>
        </div>
    </div>
</div>
</div>
                    
  )
}

export default DeleteProduct