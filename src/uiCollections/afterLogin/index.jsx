import React, { useState } from 'react';
import { json, useLocation, useNavigate } from 'react-router-dom';
import '../../media/css/style.css';
import { useEffect } from 'react'; 
import NavbarIndex from '../navbar';
import axios from 'axios';



const AfterLogin = () => {
  const name = useLocation();
  const displayName = name.state.props;
  const navigate = useNavigate();

  const [toast, showToast] = useState(false);
  

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
    const jsdata = JSON.stringify(res.data);
    // const {id, name}= res.data.authData;  
    // console.log(id,name);

    if(res.data === 'user logged out'){
      // document.getElementById('displayData').innerText = `${res.data.message}`;
      console.log("eror")
      navigate("/");
    }else{
      // document.getElementById('displayData').innerText = `id: ${id}, name: ${name}`;
      document.getElementById('displayData').innerText = `${jsdata}`;
      // document.getElementById('displayData').innerText = "user exist yoo!!";
    }
  };

  


  return (
    <>

      <div className="afterloginContainer">
        <div className="messageBox">
          Hi My Name is {displayName}. I am currently SDE Intern at Investwell
        </div>
        <button className="switchButton" onClick={getData}>Check Session</button>
        <div id="displayData"></div>
      </div>

      
      <NavbarIndex/>
    
      {toast && <div className="toast">Login Successful</div>}
    </>
  );
};

export default AfterLogin;



