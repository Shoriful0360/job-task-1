import { Route, Routes } from "react-router";
import Home from "../Home";


const Layout = () => {
    return (
        <div>
           <Routes>
            <Route index element={<Home/>}></Route>
            </Routes> 
        </div>
    );
};

export default Layout;