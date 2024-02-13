import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../media/css/style.css';
import { useEffect } from 'react'; 
import NavbarIndex from '../navbar';
import axios from 'axios';
// import { Link } from 'react-router-dom';


const AfterLogin = () => {
  const name = useLocation();
  const displayName = name.state.props;
  const navigate = useNavigate();

  const [toast, showToast] = useState(false);
  // const [showDialog, setShowDialog] = useState(false); 

  useEffect(() => {
    showToast(true);
    setTimeout(() => {
      showToast(false);
    }, 3000);
  }, []);

  const getData= async()=>{
    console.log("inside getdata()");
    const res= await axios.get('http://localhost:5000/userr/getdata' ,{withCredentials: true });
    console.log("tesing---", res);
    console.log("after getting response");
    const {id, name}= res.data.authData;  
    console.log(id,name);

    if(res.data.message === "session expired"){
      document.getElementById('displayData').innerText = `${res.data.message}`;
      navigate("/");
    }else{
      document.getElementById('displayData').innerText = `id: ${id}, name: ${name}`;
    }
  };

  
  // const handleImageClick = () => {
  //   // setShowDialog(true);
  //     setShowDialog(prevState => !prevState);
    
  // };

  
  // const DialogBox = () => {
  //   return (
  //     <div className="dialogBox">
  //       <ul className='uList'>
  //         <li className='lItem' >Home</li>

  //         <li className='lItem' >Profile Section</li>
  
        
  //         <li className='lItem' ><Link to='/policy' className='linkTo'>Policy Docs</Link></li>
  //         <li className='lItem' >Attendance</li>

  //       </ul>
  //     </div>
  //   );
  // };

  return (
    <>
    
      {/* <img
        src="https://e7.pngegg.com/pngimages/124/176/png-clipart-hamburger-button-computer-icons-menu-minimalist-menu-angle-text.png"   
        alt="Logo"
        className="logoImage"
        onClick={handleImageClick} 
      />

      {showDialog && <DialogBox />} */}

      <div className="afterloginContainer">
        <div className="messageBox">
          Hi My Name is {displayName}. I am currently SDE Intern at Investwell
        </div>
        <button className="switchButton" onClick={getData}>Check Session</button>
      </div>
      <NavbarIndex/>
    
      {toast && <div className="toast">Login Successful</div>}
    </>
  );
};

export default AfterLogin;



