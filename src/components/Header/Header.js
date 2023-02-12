import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";


const Header = () => {
  const date = new Date();
  const hour = date.getHours();
const history = useNavigate();
  const userlogout = ()=>{
    localStorage.removeItem("user_login")
    history("/");
}
const [logindata, setLoginData] = useState([]);
const getData = () =>{
  const getuser = localStorage.getItem("usergunjan");
  if (getuser && getuser.length) {
    const user = JSON.parse(getuser);
    setLoginData(user);
}
}
useEffect(()=> {
getData();
},[])
  return (
    <>
    <div>
        <Navbar collapseOnSelect expand="lg"  variant="dark" className='py-0' style={{backgroundColor:'#480d2f'}}>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} style={{width:"40px"}}/></Navbar.Brand>
        <p className='welcome'>
          Welcome,
         {logindata.length > 0 && logindata[0].name}
          {hour>=12 ? hour>=16 ? <span>,Good Evening!</span> : <span>,Good Afternoon!</span> : <span>,Good Morning!</span>}
          </p>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{height:"40px"}} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/home" className='item'>Home</NavLink>
            <NavLink to="/profile" className='item'>Profile</NavLink>
            <NavLink to="/contactus" className='item'>ContactUs</NavLink>
            <Nav.Link href="#logout" className='item' onClick={userlogout}>Logout</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}

export default Header
