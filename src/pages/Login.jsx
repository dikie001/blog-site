import React from 'react'
import { SiGoogle } from 'react-icons/si'
import { auth, provider } from '../firebase/config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'


const Login = ({setIsAuth}) => {
    const navigate = useNavigate()
   
    const SignIn = (e)=>{
        

        const logToast = toast.loading("Logging you in...")
        signInWithPopup(auth, provider).then((result)=>{
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
            navigate('/')
            toast.success(`Welcome ${auth.currentUser.displayName}`, {id:logToast})
            

        })

    }
  return (
<div className='flex flex-col items-center justify-center w-full'>
    <div className="bg-white max-md:w-[90%] md:w-[70%] m-10 lg:w-[50%]  mt-10  flex flex-col items-center p-6 rounded-lg shadow-md shadow-purple-800 text-center">
  <p className="text-black text-lg mb-4">Sign in with Google to continue...</p>
  <button onClick={SignIn} className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition">
    <SiGoogle className="text-purple-500" /> Login with Google
  </button>
</div>
</div>

  )
}

export default Login