import React from 'react'
import {Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText, Badge, Button} from 'reactstrap'
const CardProduct = ({title, desc, label,harga,image, onCart, titleButton="Simpan ke Keranjang"}) => {
  return (
    <Card className='m-2 p-3 border-3' style={{maxWidth: 320}}>
        <CardImg
            alt="Card image cap"
            src={image}
            top
            width="100%"
            height='280px'
            className="card-img"
        />
        <CardBody>
            <Badge color="light" className='mb-2' style={{color: '#FF6565'}}>
            {label}
        </Badge>
        <CardTitle tag="h5">
            {title}
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            Rp. {harga}
        </CardSubtitle>
        <CardText>
            {desc}
        </CardText>
        <Button 
            style={{backgroundColor: '#FF6565'}}
            className='border-0 w-100'
            onClick={onCart} 
        >{titleButton}</Button>
        </CardBody>
    </Card>
  )
}

export default CardProduct