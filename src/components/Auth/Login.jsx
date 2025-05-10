import React from 'react'
import { useState } from 'react';

const Login = ({handleLogin}) => {

     const [email, setemail] = useState('')
     const [password, setpassword] = useState('')

     const submitHandler=(e)=>{
          e.preventDefault();
          handleLogin(email, password)
          setemail("")
          setpassword("")
     }
     return (
       <div className="h-screen w-screen bg-gradient-to-br from-gray-900 to-black flex flex-col">
         <div className="flex flex-1 items-center justify-center">
           <div className="p-8 rounded-lg bg-gray-800 max-w-sm w-full">
             <form 
             onSubmit={submitHandler}
             className="flex flex-col space-y-4 text-white">
               <h2 className="text-2xl font-semibold mb-4 text-center">Log in</h2>
               <input
               value={email}
               onChange={(e)=>{
                    setemail(e.target.value)
               }}
                 type="email"
                 placeholder="Enter your email"
                 className="p-3 w-full rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
               />
               <input
               value={password}
               onChange={(e)=>{
                    setpassword(e.target.value)
               }}
                 type="password"
                 placeholder="Enter your password"
                 className="p-3 w-full rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
               />
               <button className="p-3 w-full bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
                 LOGIN NOW
               </button>
             </form>
           </div>
         </div>
       </div>
     );
   };
   
   
export default Login