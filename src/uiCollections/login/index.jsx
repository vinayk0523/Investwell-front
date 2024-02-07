import React from 'react'
import LoginPage from './LoginPage'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirect = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/userr/login', {
        email: email,
        password: password,
      });

      if(response && response.data.success){
        redirect('/afterlogin', {state : {props: response.data.loginOutput[0].name}})
      }

      else if(response.data.message === "enter email or password" ){
        alert("enter email or password")    
      }

      else if(response.data.message === "wrong password" ){
        alert("wrong password")    
      }

      else if(  response.data.message === "Error"     ){
        alert(" Error")
      }

      else {       
         alert('invalid user') 
      }

      console.log('Login successful', response.data);
    } catch (error) {
      
      console.error('Login failed', error.response ? error.response.data : error.message);
    }
  };


  return (
    <> <LoginPage email={email} password ={password} setEmail={setEmail} setPassword={setPassword} handleLogin={handleLogin}/></>
  )
}
