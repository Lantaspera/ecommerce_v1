import React from 'react'
import data from './data'

function Card() {
  return (
    <div>
        <h1>Featured Products</h1>
        <div className='products'>
        {data.product.map((product)=>(
          <div className='product' key={product.slug}>
            <a href={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name}/>
            </a>
            <div className='product-info'>
            <a href={`/product/${product.slug}`}>
              <p>{product.name}</p>
            </a>
            <h3>₹{product.price}</h3>
            <button>Add to Cart</button>
            </div> 
          </div>
        ))}
        </div> 
    </div>
  )
}

export default Card