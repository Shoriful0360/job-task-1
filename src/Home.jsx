import { useEffect, useState } from "react";


const Home = () => {
const [data,setData]=useState([])
console.log(data)
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
    return (
        <div>
           <h1>home</h1> 
        </div>
    );
};

export default Home;