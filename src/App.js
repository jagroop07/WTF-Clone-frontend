// import Card from "./Components/Card";
import Detail from "./Components/Detail";
// import Jaggacounter from "./Components/Jaggacounter";
import Navbar from "./Components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Home from "./Components/Home";
import Allproducts from "./Components/Allproducts";
import Footer from "./Components/Footer";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import MyAccount from "./Components/MyAccount";
import ScrollToTop from "./Components/Scrolltotop";
import EditProfile from "./Components/EditProfile";
import ChangePass from "./Components/ChangePass";

function App() {
  return (
    <>
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/editProfile" element={<EditProfile/>}/>
        <Route path='/myaccount' element={<MyAccount/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product" element={<Allproducts/>}/>
        <Route path="/products/:id" element={<Detail/>}/>
        <Route path="/chngepss" element={<ChangePass/>}/>
        {/* <Route path="/counter" element={<Jaggacounter/>}/> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
