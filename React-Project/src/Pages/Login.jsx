// import React, { useState } from 'react';
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css'; // Importing the CSS file for styles

// const Login = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     emailTouched: false,
//     passwordTouched: false
//   });
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//   const handleBlur = (field) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [`${field}Touched`]: true
//     }));
//   };

//   const handleChange = (field, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [field]: value
//     }));
//   };

//   const getBorderColor = (field) => {
//     if (!formData[`${field}Touched`]) return '';
//     return formData[field] ? 'is-valid' : 'is-invalid';
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('https://reqres.in/api/login', formData, {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then(response => {
//         const data = response.data;
//         localStorage.setItem('token', data.token);
//         setShowSuccessMessage(true);
//         setIsSubmitted(true);
//         setTimeout(() => {
//           setShowSuccessMessage(false);
//         }, 1000); // Hide the success message after 3 seconds
//       })
//       .catch(error => {
//         console.error('There was an error logging in!', error);
//         alert("Login Failed!");
//       });
//     setFormData({
//       email: '',
//       password: '',
//       emailTouched: false,
//       passwordTouched: false
//     });
//   };

//   const toggleSubmit = () => {
//     setIsSubmitted(!isSubmitted);
//     localStorage.removeItem("token");
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card p-4">
//         <h3 className="card-title text-center">User Information</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email address</label>
//             <input
//               type="email"
//               className={`form-control ${getBorderColor('email')}`}
//               id="email"
//               placeholder="Enter User-Email@*"
//               value={formData.email}
//               onChange={(e) => handleChange('email', e.target.value)}
//               onBlur={() => handleBlur('email')}
//             />
//             {formData.emailTouched && !formData.email && <div className="invalid-feedback">Email is required.</div>}
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               className={`form-control ${getBorderColor('password')}`}
//               id="password"
//               placeholder="Enter Password*"
//               value={formData.password}
//               onChange={(e) => handleChange('password', e.target.value)}
//               onBlur={() => handleBlur('password')}
//             />
//             {formData.passwordTouched && !formData.password && <div className="invalid-feedback">Password is required.</div>}
//           </div>
//           <div className="text-center">
//             <button
//               type="submit"
//               className={`btn ${isSubmitted ? 'btn-danger' : 'btn-success'} px-4 ${isSubmitted ? 'submitted' : ''}`}
//               onClick={toggleSubmit}
//             >
//               {isSubmitted ? "Unsubmit" : "Submit"}
//             </button>
//           </div>
//         </form>
//         <div className={`success-message ${showSuccessMessage ? 'show' : ''}`}>
//           Login Successfully 👍
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import React, { useState } from "react";
// // import { auth, provider } from "../services/firebase";
// // import GoogleButton from 'react-google-button';
// import {GoogleButton} from 'react-google-button'
// function Login() {
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");

 
//   const [createemail, setcreateemail] = useState("");
//   const [createpassword, setcreatepassword] = useState("");

//   const handlesubmitclick = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((res) => {
//         alert("login succesfully...");
//         console.log(res);
//       })
//       .catch((err) => console.log(err));
//   };


//   const handlecreatesubmit = (e) => {
//     e.preventDefault()
//     createUserWithEmailAndPassword(auth, createemail, createpassword)
//     .then((res) => console.log(res))
//     .catch((err)=>console.log(err))
//   }

//   const handleclick = () => {
//     signInWithPopup(auth, provider)
//       .then((res) => {
//         alert("login sucessfully......")
//         console.log(res)
//       })
//       .catch((err) => console.log(err));
//   };
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6">
//           <h2>Login</h2>
//           <p>If you have an account, please sign in with your email address.</p>
//           <form onSubmit={handlesubmitclick}>
//             <div className="form-group">
//               <label htmlFor="loginEmail">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="loginEmail"
//                 placeholder="Enter email"
//                 onChange={(e) => setemail(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="loginPassword">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="loginPassword"
//                 placeholder="Password"
//                 onChange={(e) => setpassword(e.target.value)}
//               />
//             </div>
//             <button type="submit" className="btn btn-success mt-3">
//               Sign In
//             </button>
//             <div className="mt-3">
//               <a href=" ">Forgot your password?</a>
//             </div>
//           </form>
//           <div style={{marginTop:"15px"}}>
//             <GoogleButton onClick={handleclick} />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <h2>Create Customer</h2>
//           <p>
//             Creating an account has many benefits: check out faster, keep more
//             than one address, track orders and more.
//           </p>
//           {/* create from */}
//           <form>
//             <div className="form-group">
//               <label htmlFor="firstName">First Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="firstName"
//                 placeholder="Enter first name"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="lastName">Last Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="lastName"
//                 placeholder="Enter last name"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="registerEmail">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="registerEmail"
//                 placeholder="Enter email"
//                 onChange={(e) => setcreateemail(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="registerPassword">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="registerPassword"
//                 placeholder="Password"
//                 onChange={(e) => setcreatepassword(e.target.value)}
//               />
//             </div>
//             <div className="form-check">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 id="newsletter"
//               />
//               <label className="form-check-label" htmlFor="newsletter">
//                 Subscribe to our newsletter
//               </label>
//             </div>
//             <button
//               onClick={handlecreatesubmit}
//               type="submit"
//               className="btn btn-primary mt-3"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;




import React, { useState } from "react";
// import { auth, provider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "../services/firebase"; // Adjust the import path based on your Firebase setup
import { GoogleButton } from 'react-google-button';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");

  const handleSubmitClick = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert("Login successful");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, createEmail, createPassword)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        alert("Google login successful");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Login</h2>
          <p>If you have an account, please sign in with your email address.</p>
          <form onSubmit={handleSubmitClick}>
            <div className="form-group">
              <label htmlFor="loginEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="loginPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success mt-3">
              Sign In
            </button>
            <div className="mt-3">
              <a href=" ">Forgot your password?</a>
            </div>
          </form>
          <div style={{ marginTop: "15px" }}>
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </div>
        <div className="col-md-6">
          <h2>Create Account</h2>
          <p>
            Creating an account has many benefits: check out faster, keep more
            than one address, track orders and more.
          </p>
          {/* Create form */}
          <form onSubmit={handleCreateSubmit}>
            <div className="form-group">
              <label htmlFor="createEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="createEmail"
                placeholder="Enter email"
                value={createEmail}
                onChange={(e) => setCreateEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="createPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="createPassword"
                placeholder="Password"
                value={createPassword}
                onChange={(e) => setCreatePassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
