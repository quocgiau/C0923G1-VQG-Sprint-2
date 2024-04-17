import './App.css';
import {Routes, Route, BrowserRouter,} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Cart from "./components/Card/Cart";
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
