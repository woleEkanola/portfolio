import React from 'react'
import Link from 'gatsby-link'
import logo from '../../assets/img/logo.png'
import './header.css'

const Header = () => (
  <div
    style={{
     
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        textAlign: 'center'
      }}
    >
      
        <a
          href="http://woleekanola.tk/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
        <img src={logo} 
        style={{
            width: '25%',
            height: 'auto',
            margin: 0,
            marginTop: '25px',
          }}
        />
        </a>

       <div className="navbar">
	<ul>
	<a href='http://woleekanola.tk/'>	<li  id='home'>Home</li> </a>
	<a href='http://woleekanola.tk/'>	<li id='about'>About me</li></a>
	<Link to='/'>	<li className= 'active' id='portfolio'>Portfolio</li></Link>
	<a href='http://woleekanola.tk/training'>	<li id='training'>Training</li></a>
	<a href='http://woleekanola.tk/blog'>	<li id='blog'>Blog</li></a>
	<a href='http://woleekanola.tk/contact'>	<li id='contact'>Contact</li></a>
	</ul>
</div>
   
    </div>
  </div>
)

export default Header
