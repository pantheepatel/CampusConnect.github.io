import {auth, provider} from './FirebaseConfig'; // fire base initailaization
import {useEffect, useState} from 'react';
import { signInWithPopup } from 'firebase/auth'; // google interface sign in with 

function Auth(){
    const [user, setUser] = useState(null)

    useEffect(() =>{
      if(localStorage.getItem("user_config")){ // if local storage has data it remain as it is
        setUser(JSON.parse(localStorage.getItem("user_config")))// so we set user info as 
      }
    }, [])// here [] present empty dependancy on page load 

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth, provider).then((result)=>{

          localStorage.setItem("user_config", JSON.stringify({ // store sign in data in local storage insted of fetch from google 
            email: result.user.email,
            name: result.user.displayName,
            photo: result.user.photoURL
          }))
          
          setUser(JSON.parse(localStorage.getItem("user_config")))// to use details in react components

        }).catch((err)=>{
          console.log(err);
        })
      }

      const handleLogout=()=>{//when we click log out userdata remove 
        setUser(null)
        localStorage.setItem("user_config", null)// also delete from localstorage to
      }
    
    return (
        <>
            {
                user ? (<div className='p-10 bg-slate-300'>
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
                    <img src={user.photo} alt='none' referrerPolicy='no-referrer'/>
                    <button onClick={handleLogout}>Log out</button>
                </div>) : (<button onClick={handleGoogleSignIn}>Log in</button>)
            }
        </>
    )
}

export default Auth