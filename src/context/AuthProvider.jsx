import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
     const [userData, setUserData] = useState(null)
     
     // Function to update both localStorage and state
     const updateEmployees = (updatedEmployees) => {
       localStorage.setItem('employees', JSON.stringify(updatedEmployees));
       setUserData(prevData => ({
         ...prevData,
         employees: updatedEmployees
       }));
     };

     useEffect(() => {
       setLocalStorage(); // Initialize local storage on first load
       const {employees, admin} = getLocalStorage()
       setUserData({employees, admin})

       // Add event listener for storage changes from other windows
       const handleStorageChange = () => {
         const {employees, admin} = getLocalStorage()
         setUserData({employees, admin})
       }

       window.addEventListener('storage', handleStorageChange)

       return () => {
         window.removeEventListener('storage', handleStorageChange)
       }
     }, [])
     

  return (
    <AuthContext.Provider value={{...userData, updateEmployees}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider