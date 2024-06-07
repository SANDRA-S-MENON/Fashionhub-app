import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data,changeData]=useState(
        [
            {"name":"fashion wear","productcode":101,"price":299},
            {"name":"foot wear","productcode":102,"price":299},
            {"name":"fashion wear","productcode":121,"price":499},
            {"name":"Accesories","productcode":103,"price":299},
            {"name":"Make up","productcode":122,"price":399},
        ]
    )
    return (
        <div>
            <NavBar/>
            <h1><center>VIEW PRODUCTS</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-xl-4 col-xxl-4">
                                    <div class="card">
                                        <img src="https://im.idiva.com/content/2023/Aug/5-15_64cc9838416e6.jpg" height="280px" class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.name}</h5>
                                                <p class="card-text">Product Code{value.productcode}</p>
                                                <p class="card-text">Price{value.price}</p>
                                                <a href="#" class="btn btn-primary">Buy now</a>
                                            </div>
                                    </div>
                                </div>
                              
                                }
                            )}
                            
                           
                            
                            
                            
                           
                           
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll