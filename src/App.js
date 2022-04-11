import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Shop from "./components/Shop/Shop";
import Signup from "./components/Signup/Signup";
function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Shop></Shop>}></Route>
                <Route path="/shop" element={<Shop></Shop>}></Route>
                <Route path="/orders" element={<Shop></Shop>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<Signup></Signup>}></Route>
            </Routes>
        </div>
    );
}

export default App;
