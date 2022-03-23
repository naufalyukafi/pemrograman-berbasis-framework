import React, { useEffect, useState } from 'react'
import { Row } from 'reactstrap';
import { CardProduct } from '../components';
import { URL } from '../utils'
const ListProduct = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch(`${URL}/products`)
      .then((response) => response.json())
      .then((result) =>{
        console.log(result)
        setproducts(result)
      })
      .catch((err) => console.log(err))
  },[]);

  const onHandleCart = (product) => {
    const addToCart = {...product, cart: true}
    fetch(`${URL}/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addToCart),
    })
    .then(response => response.json())
    .then(() => {
      alert(`Anda menambahkan ${product.title} ke keranjang!`)
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }

  return (
    <Row xs={1} md={2} lg={3} className='mt-5 justify-content-center rounded pt-3 pb-4'>
      {
        products && products.map((product) => (
          <CardProduct 
            key={product.id}
            title={product.title} 
            desc={product.description} 
            label={product.label} 
            harga={product.harga} 
            image={product.url}
            onCart={() => onHandleCart(product)} 
          />
        )) 
      }
    </Row>
  )
}

export default ListProduct;
