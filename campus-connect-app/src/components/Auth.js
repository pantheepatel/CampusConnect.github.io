// import {auth, provider} from './FirebaseConfig'; // fire base initailaization
// import {useEffect, useState} from 'react';
// import { signInWithPopup } from 'firebase/auth'; // google interface sign in with 
// import axios from 'axios' // npm install axios

// function Auth(){
//     const [user, setUser] = useState(null)
    

//     useEffect(() =>{
//       if(localStorage.getItem("user_config")){ // if local storage has data it remain as it is
//         setUser(JSON.parse(localStorage.getItem("user_config")))// so we set user info as 
//       }
//     }, [])// here [] present empty dependancy on page load 

//     const handleGoogleSignIn=()=>{
//         signInWithPopup(auth, provider).then((result)=>{
//           console.log("user data",result)

//           localStorage.setItem("user_config", JSON.stringify({ // store sign in data in local storage insted of fetch from google 
//             email: result.user.email,
//             name: result.user.displayName,
//             photo: result.user.photoURL
//           }))
          
//           setUser(JSON.parse(localStorage.getItem("user_config")))// to use details in react components
          
//           //sendin data to django to store in firestore
//           axios.get("http://127.0.0.1:8000/auth/", {
//             params:{
//               email: result.user.email,
//               name: result.user.displayName,
//               photo: result.user.photoURL
//             }})
//             .then(response => console.log(response.data))
//             .catch(error => console.log(error))

//         }).catch((err)=>{
//           // console.log(err);
//         })
//       }

//       const handleLogout=()=>{//when we click log out userdata remove 
//         // localStorage.clear()
//         setUser(null)
//         localStorage.setItem("user_config", null)// also delete from localstorage to
//       }
    
//     return (
//         <>
//             {
//                 user ? (<>
//                     <h1>{user.name}</h1>
//                     <h1>{user.email}</h1>
//                     <img src={user.photo} alt='none' referrerPolicy='no-referrer'/>
//                     <button onClick={handleLogout}>Log out</button>
//                 </>) : (<button onClick={handleGoogleSignIn}>Log in</button>)
//             }
//         </>
//     )
// }

// export default Auth
import React from 'react'

function Auth() {
  return (
    <div>we doesnt need this file</div>
  )
}

export default Auth