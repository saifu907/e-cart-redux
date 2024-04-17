import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'


import { Button} from 'react-bootstrap'
import { emptyCart, removeFromCart } from '../slice/cartSlice'



function Cart() {
  const cartArray=useSelector((state)=>state.cartReducer)
  const dispatch  =useDispatch()
  const navigate= useNavigate()

  const [total,setTotal]=useState(0)

  const getCartTotal=()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2,))
    }else{
      setTotal(0)
    }

  }
  useEffect(()=>{
    getCartTotal()
  },[cartArray])

  const handleCart=()=>{
    dispatch(emptyCart())
    alert('Cart ordeer Placed')
    navigate('/')
  }

  return (
    <div style={{marginTop:'150px',marginLeft:'100px'}}>
    {
    cartArray.length>0?
    <div className='row mt-5'>
      <div className="col-lg-8">

      <table className='table shadow border '>
        <thead>
        <tr>
        <th>#</th>
        <th>Product</th>
        <th>producct image</th>
        <th>price</th>
        <th>action</th>
        </tr>
        </thead>
        <tbody>
        {
          cartArray.map((product,index)=>(
            <tr key={index}>

              <td>{index+1}</td>
              <td>{product.title}</td>
              <td><img height={'100px'} width={'100px'} src={product.thumbnail} alt="" /></td>
              <td>{product.price}</td>
              <td><Button onClick={()=>dispatch(removeFromCart(product.id))} className='btn btn-light'><i class="fa-solid fa-trash text-danger"></i></Button></td>

            </tr>
          ))
        }
        </tbody>
        
      </table>
         
      </div>

      <div className="col-lg-4">

        <div className="border mb-3 shadow rounded-2 p3 w-100">
          <h1 className="text-primary">Cart Summary</h1>
          <h4>Total Products:<span className='text-success'>{cartArray.length}</span></h4>
          <h4>Total Price: <span className='text-success'>{'$'+total}</span> </h4>
          <div className="d-grid">
            <button onClick={handleCart} className='btn btn-primary mt-5 rounded'>Check Out</button>

          </div>
        </div>
      </div>





    </div>: <div className="w-100 d-flex flex-column justify-content center align-items-center">
    <img src="https://i.pinimg.com/564x/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.jpg" alt="" />
    <Link to={'/'}className='btn btn-warning rounded'>Back to Home</Link>
  </div>

}
</div>

  )
}

export default Cart