import React, { useContext, useEffect, useState } from 'react'
import './index.css';
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  
  // useEffect(() => {
  //   // setLocalStorage();
  //   getLocalStorage();
  
  // },)
  const [user, setuser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)

  const authData = useContext(AuthContext)

  useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (storedUser && authData) {
    setuser(storedUser);
    if (storedUser.role === 'employee') {
      // Load employee data as well
      const employee = authData.employees?.find(e => e.email === storedUser.email);
      if (employee) {
        setloggedInUserData(employee);
      }
    }
  }
}, [authData]);

  
  


  const handleLogin = (email,password)=>{
    if(email=='admin@me.com' && password == '123'){
    setuser({role: 'admin'})
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(authData ){
      const employee = authData.employees.find((e)=>e.email==email && e.password==password);
      if (employee) {
        setuser({ role: 'employee', email: employee.email });
        setloggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', email: employee.email }));
      }
      
      
    }
    else{
      alert('invalid credentials')
    }
  }
  const handleLogout = () => {
    setuser(null);
    setloggedInUserData(null);
    localStorage.removeItem('loggedInUser');
  };

  
// handleLogin('admin@me.com',123)
return (
  <>
    {!user ? (
      <Login handleLogin={handleLogin} />
    ) : user.role === 'admin' ? (
      <AdminDashboard handleLogout={handleLogout} />
    ) : user.role === 'employee' ? (
      <EmployeeDashboard data={loggedInUserData} handleLogout={handleLogout} />
    ) : null}
  </>
);
}

export default App