import React from 'react'
import { Card ,Button,Col,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { removeFromWishlist } from '../slice/wishlist'
import { addToCart } from '../slice/cartSlice'



function Wishlist() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  const dispatch=useDispatch()
  const handleWishlistCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
    

    <Row style={{marginTop:'100px'}}>
        {
          wishlistArray?.length>0?wishlistArray?.map((product,index)=>(
            


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
            <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn btn-light'><i class="fa-solid fa-trash text-danger"></i></Button>
            <Button onClick={()=>handleWishlistCart(product)} className='btn btn-light'><i class="fa-solid fa-cart-plus text-danger"></i></Button>
          </div>
          
               </Card.Body>
    </Card>
       </Col>

          )): <div className="w-100 d-flex flex-column justify-content center align-items-center">
            <img src="https://i.pinimg.com/564x/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.jpg" alt="" />
            <Link to={'/'}className='btn btn-warning rounded'>Back to Home</Link>
          </div>
        }
       
    </Row>
  )
}

export default Wishlist