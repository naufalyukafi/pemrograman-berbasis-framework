import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap';
import { CardProduct} from '../components';
import { URL } from '../utils'

const ShopingCart = () => {
    const [products, setproducts] = useState([]);

    const getProduct = () => {
        fetch(`${URL}/products?cart=true`)
        .then((response) => response.json())
        .then((result) =>{
          setproducts(result)
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getProduct()
    },[]);

    const onHandleCart = (product) => {
        const addToCart = {...product, cart: false}
        fetch(`${URL}/products/${product.id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(addToCart),
        })
        .then(response => response.json())
        .then(() => {
            alert(`Anda menghapus ${product.title} dari keranjang!`)
            getProduct()
        })
        .catch((error) => {
            console.error('Error:', error);
        });    
    }

    return (
        <Row xs={1} md={2} lg={3} className='mt-5 justify-content-center rounded pt-3 pb-4'>
        {
            products && products.length != 0 ?  products.map((product) => (
            <CardProduct 
                key={product.id}
                title={product.title} 
                desc={product.description} 
                label={product.label} 
                harga={product.harga} 
                image={product.url}
                titleButton="Hapus dari Keranjang"
                onCart={() => onHandleCart(product)} 
            />
            )) : (
                <Col style={{minHeight: '50vh'}}>
                    <h4 className='text-center fw-bold' style={{color: '#FF6565'}}>Mohon Maaf Keranjang Belum Terisi!</h4>
                    <p className='text-center'>Tambahkan product terlebih dahulu</p>
                </Col>
            ) 
        }
        </Row>
    )
}

export default ShopingCart