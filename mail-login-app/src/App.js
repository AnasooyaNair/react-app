
import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import MainHeader from './components/MainHeader';
import Timer from './components/Timer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  const loginHandler = (email,password) => {
    setIsLoggedIn(true);

  }
  const logoutHandler = () => {
    setIsLoggedIn(false);

  }
  
  return (
    <div>
  
    <MainHeader isAuthenticated = {isLoggedIn} onLogOut = {logoutHandler}/>
    <main>
      { !isLoggedIn && <Login onLogIn = {loginHandler} />}
      { isLoggedIn && <Home onLogOut = {logoutHandler} />}
      
    </main>
    
   <Timer />
    </div>
  );
}

export default App;
