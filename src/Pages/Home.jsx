import React from 'react'
import { Card ,Button,Col,Row} from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import {useDispatch} from 'react-redux'
import { addToWishlist } from '../slice/wishlist'
import { addToCart } from '../slice/cartSlice'





function Home() {
  const data= useFetch('https://dummyjson.com/products')


  const dispatch =useDispatch()
  return (
    <Row style={{marginTop:'100px'}}>
        {
          data?.length>0?data?.map((product,index)=>(
            


            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
         <Card className='shadow rounded-3 m-3' style={{ width: '18rem',height:'30rem' }}>
               <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
               <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>
            <p>{product?.description.slice(0,50)}...</p>
            <h5>{product?.price}</h5>
          </Card.Text>
          <div className='d-flex justify-content-between'>
            <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light'><i class="fa-solid fa-heart text-danger"></i></Button>
            <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light'><i class="fa-solid fa-cart-plus text-danger"></i></Button>
          </div>
          
               </Card.Body>
    </Card>
       </Col>

          )): <p>Nothing to display</p>
        }
       
    </Row>
  )
}

export default Home