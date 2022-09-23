import React from "react"
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo} alt='logo' className="logo-footer" />
          </div>
          <p>© 2022. All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer