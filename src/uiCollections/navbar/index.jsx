import React from 'react'
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import icon from '/home/vinay/Desktop/vinayProject1/frontend/my-react-app/src/media/images/icon.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function NavbarIndex() {

    const [showDialog, setShowDialog] = useState(false); 
  
    const redirect = useNavigate();

    const handleImageClick = () => {
      
        // setShowDialog(true);
          setShowDialog(prevState => !prevState);
        
      };



        const policy = async (e) => {
          e.preventDefault();
          const response = await axios.get('http://localhost:5000/userr/getPolicyData')
          console.log(response.data.policyData);
          redirect('/policy', {state : {props : response.data.policyData}})
      }

      
    
      
      const DialogBox = () => {
        return (
          <div className="dialogBox">
            <ul className='uList'>
              <li className='lItem' >Home</li>
    
              <li className='lItem' >Profile Section</li>
      
            
              <li className='lItem'  onClick={policy}>Policy Docs</li>
              <li className='lItem' >Attendance</li>
    
            </ul>
          </div>
        );
      };


  return (
    <div>


     <img
    //   src="https://e7.pngegg.com/pngimages/124/176/png-clipart-hamburger-button-computer-icons-menu-minimalist-menu-angle-text.png" 
    src= {icon}    
    alt="Logo"
        className="logoImage"
        onClick={handleImageClick} 
      />

      {showDialog && <DialogBox />}

    </div>
  )
}
