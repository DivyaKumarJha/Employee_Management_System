import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import GivenTasks from './components/pages/GivenTasks';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setuser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser && authData) {
      setuser(storedUser);
      if (storedUser.role === 'employee') {
        const employee = authData.employees?.find(e => e.email === storedUser.email);
        if (employee) {
          setloggedInUserData(employee);
        }
      }
    }
    setIsLoading(false);
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setuser({ role: 'admin' });
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setuser({ role: 'employee', email: employee.email });
        setloggedInUserData(employee);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', email: employee.email })
        );
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setuser(null);
    setloggedInUserData(null);
    localStorage.removeItem('loggedInUser');
  };

  if (isLoading) {
    return null; // or a loading spinner
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={!user ? <Login handleLogin={handleLogin} /> : <Navigate to="/" replace />} 
        />
        <Route 
          path="/given-tasks" 
          element={
            !user ? (
              <Navigate to="/login" replace />
            ) : user.role === 'admin' ? (
              <GivenTasks />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
        <Route
          path="/"
          element={
            !user ? (
              <Navigate to="/login" replace />
            ) : user.role === 'admin' ? (
              <AdminDashboard handleLogout={handleLogout} />
            ) : user.role === 'employee' ? (
              <EmployeeDashboard data={loggedInUserData} handleLogout={handleLogout} />
            ) : null
          }
        />
      </Routes>
    </Router>
  );
};

export default App;