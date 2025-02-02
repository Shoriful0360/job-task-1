import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
        setData(data)
          return data;
        } catch (error) {
          console.error("Error fetching data:", error);
          return [];
        }
      };
    const authInfo={
        data
    }
    return (
        <div>
          <AuthContext.Provider value={authInfo}>
            {children}
          </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;