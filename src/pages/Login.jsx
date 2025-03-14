import React from 'react'
import { SiGoogle } from 'react-icons/si'
import { auth, provider } from '../firebase/config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'


const Login = ({setIsAuth}) => {
    const navigate = useNavigate()
   
    const SignIn = ()=>{
        const logToast = toast.loading("Logging you in...")
        signInWithPopup(auth, provider).then((result)=>{
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
            navigate('/')
            toast.success(`Welcome ${auth.currentUser.displayName}`, {id:logToast})
            

        })

    }
  return (
    <div className="bg-white flex flex-col items-center p-6 rounded-lg shadow-md text-center">
  <p className="text-black text-lg mb-4">Sign in with Google to continue...</p>
  <button onClick={SignIn} className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition">
    <SiGoogle className="text-purple-500" /> Login with Google
  </button>
</div>

  )
}

export default Login