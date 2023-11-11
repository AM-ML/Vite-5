import { Routes, Route, useNavigate } from 'react-router-dom';
import { MainLayout } from './pages/MainLayout'
import { Home } from './pages/Home'
import './App.css'
import { NotFound } from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { useEffect, useState } from 'react';

import { auth } from './config/firebase';
import 'firebase/auth';
import { Logout } from './pages/Logout';

function App() {
  const nav = useNavigate();
  
  const [loadedDB, setLoadedDB] = useState(false);
  
  window.loadedDB = loadedDB;
  window.setLoadedDB = setLoadedDB;


  const func = () => {

    setLoadedDB(true);
    window.loadedDB = loadedDB;
  }
  
  useEffect(() => {
    window.func = func;

    func();

  }, []);
  useEffect(() => {
    window.stop = false;
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) 
        nav("/login");
    });

    return () => {
      unsubscribe();
    };

  }, [nav]);

  return (
    <>
      
      <hr />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}/>
          <Route path="home" element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="signup" element={<Signup />}/>
          <Route path="logout" element={<Logout />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
