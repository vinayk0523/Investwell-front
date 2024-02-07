import React from 'react'
import { useLocation } from 'react-router-dom'
import '../../media/css/style.css';
import { useState, useEffect } from 'react';


const AfterLogin = () => {
  const name = useLocation()
  const displayName = name.state.props

  const [toast, showToast] = useState(false);

  useEffect(() => {
  
    showToast(true)
    setTimeout(() => {
        showToast(false);
    }, 3000);
}, []);


    return (
      <>
      <div className="afterloginContainer">
      <div className="messageBox"> Hi My Name is {displayName}. I am currently SDE Intern at Investwell </div>
      </div>
      {toast && <div className='toast'> Login Successful </div>}
      </>
    )
  }
  
  export default AfterLogin
  


