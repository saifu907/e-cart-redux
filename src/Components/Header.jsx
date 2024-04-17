import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

function Header() {
  

  const wishlist=useSelector((state)=>state.wishlistReducer)
  const cart=useSelector((state)=>state.cartReducer)

  
  return (
    <>

  
    <Navbar expand="lg" className="bg-info top-0 position-fixed z-1 w-100">
      <Container>
        <Navbar.Brand >
          <Link to={'/'} style={{color:'white',fontSize:'30px',fontWeight:'bolder',textDecoration:'none'}}><i class="fa-solid fa-truck-fast"></i> E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link to={'/wishlist'} style={{color:'white',textDecoration:'none'}}>WishList <i class="fa-solid fa-heart text-danger"></i><Badge  className='rounded-5 bg-secondary ms-2'>{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link ><Link to={'/cart'} style={{color:'white',textDecoration:'none'}}>Cart <i class="fa-solid fa-cart-plus text-danger"></i><Badge  className='rounded-5 bg-secondary ms-2'>{cart.length}</Badge></Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header