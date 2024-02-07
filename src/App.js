import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIndex from './uiCollections/signUp/index';
import Index from './uiCollections/login/index';
import AfterLogin from './uiCollections/afterLogin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/signup' element={<SignIndex/>}></Route>
        <Route path='/afterlogin' element={<AfterLogin/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;




// import React, { useState } from 'react';
// import SignUpPage from './uiCollections/signUp/SignUpPage';
// import LoginPage from './uiCollections/login/LoginPage';

// const App = () => {
//   const [isSignUp, setIsSignUp] = useState(true);

//   const switchPage = () => {
//     setIsSignUp(!isSignUp);
//   };

//   return (
//     <div className="container">
//       {isSignUp ? <SignUpPage /> : <LoginPage />}
//       <button className="switchButton" onClick={switchPage}>
//         {isSignUp ? 'Button for logIN' : 'Button for sign up'}
//       </button>
//     </div>
//   );
// };



// export default App;

