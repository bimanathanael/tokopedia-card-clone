import React, { useState, useEffect } from 'react';
import {Card} from '../components/Card'

export const Home = () =>{

  const [products, setProducts] = useState([])

  useEffect( () => {
    fetch('http://localhost:3000/products', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
      setProducts(result)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="mt-5 mb-5"> <b style={{color: 'green'}}>Tokopedia</b> Clone Card </h1>
        <div className="row ml-5">
          { products && 
          products.map(product => (
            <Card key={product.id} product={product}/>
            ))}
        </div>
      </div>
    </>
  )
} 