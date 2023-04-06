import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/HomePage/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {
          (localStorage.getItem("users")==undefined ||  localStorage.getItem("users")== null)?
          <LoginPage/> : <Home/>
      }


       
      </header>
    </div>
  );
}

export default App;
