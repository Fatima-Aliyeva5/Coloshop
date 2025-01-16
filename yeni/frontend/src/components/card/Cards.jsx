import React from 'react'
import "./Cards.scss"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = ({product}) => {

  console.log(product);

  
  return (
    <div>
         <Card style={{ width: '15rem' }} className='my-5 border-0 cart-container'>
      <Card.Img variant="top" src={product?.image}/>
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
       <p>${product?.price}</p>
        <Button className="btn btn-outline-danger shop-btn text-white" style={{backgroundColor: "#FE4C50"}}>Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards