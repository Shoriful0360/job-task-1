import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";



const Home = () => {
const{data}=useContext(AuthContext)
console.log(data)
 
    return (
        <div>
           <h1>home</h1> 
        </div>
    );
};

export default Home;