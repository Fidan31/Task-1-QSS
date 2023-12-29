import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";


const Indigator = () => {
    const [indigator, setIndigator] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(
            "https://searchartback-production-dc78.up.railway.app/api/indicators/?subsector=Productivity%20and%20Labor%20Market"
          );
          setIndigator(response.data);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, []);
  
    return (
      <div className="relative ">
        <h1 className="text-[#A7B4CA] my-2">Indicator</h1>
  
        <select
          className="select-none w-full p-2.5 text-[#A7B4CA] bg-[#293F64]
               border border-[#4A628A]  shadow-sm outline-none appearance-none rounded-[7px]"
        >
          {indigator.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
    ); 
}

export default Indigator
