import { useState } from 'react';
import './App.css';
import LoginPage from './Pages/loginPage';
import MainPage from './Pages/mainPage';

const App = () => {
  const [jwt, setJwt] = useState(localStorage.getItem('jwt'));

  const handleLogin = (token) => {
    localStorage.setItem('jwt', token);
    setJwt(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setJwt(null);
  };

  if (!jwt) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return <MainPage onLogout={handleLogout} token={jwt} />;
}

export default App;
