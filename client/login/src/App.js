import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { MainContextProvider } from './Helper/mainContext';


function App() {
  return (
    <MainContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </MainContextProvider>
  );
}

export default App;
