import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <>
    <nav>
    <input type="text" placeholder='Search For Product..' />

    <div><Link to="featured">Featured</Link>
    <Link to="new">New</Link></div>

    
    </nav>
    <Outlet/>
    
    </>
  )
}

export default Product