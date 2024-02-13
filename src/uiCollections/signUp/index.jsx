import React from 'react'
import SignUpPage from './SignUpPage'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function SignIndex() {


  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/userr/signup', {
        name: name,
        email: email,
        password: password,
      });

      console.log(response);

      console.log('SignUp successful', response.data);

      if(response.data.success){
        console.log("testing")
        alert("signup successful yo!");
        navigate("/");
      }
      else if(response.data.message ==="enter name, email or password"){
        alert("enter name, email or password");
      }

      else if(response.data.message ==="Invalid Password"){
        alert("Invalid Password");
      }

      else if(response.data.message ==="Invalid email format"){
        alert("Invalid email format");
      }

      else if(response.data.message ==="Name should contain only letters (upper or lower case)"){
        alert("Name should contain only letters (upper or lower case)");
      }

      else if(response.data.message ==="Error in Signup controller"){
        alert("Some internal error");
      }

      else if(response.data.message ==="User already exists!"){
        alert("User already exists!");
      }



      
    } catch (error) {
      
      console.error('SignUp failed', error.response ? error.response.data : error.message);
    }
  };



  return (
    <div><SignUpPage name={name} email={email} password={password} setName={setName} setEmail={setEmail} setPassword={setPassword} handleSignUp={handleSignUp}/></div>
  )
}
