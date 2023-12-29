import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Rank = ({ onFilterChange }) => {
  const [rank, setRank] = useState(1);

  const handleChange = (event) => {
    const newRank = parseInt(event.target.value, 10);
    setRank(newRank);
    onFilterChange(newRank);
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get(
  //         ""
  //       );
  //       setRank(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <div className="relative ">
      <h1 className="text-[#A7B4CA] my-2">Rank</h1>
      <div className="flex">
        <div className="flex-1">
          <button
            className="text-[#A7B4CA]
        bg-[#293F64] 
        font-semibold 
        py-2 px-4 border rounded border-[#4A628A]"
          >
            1
          </button>
        </div>

        <div className=" flex-1 my-4">
          <input
            class="range pr-6 accent-slate-400"
            type="range"
            min={1}
            max={10}
            step={1}
            value={rank}
            onChange={handleChange}
            className="slider appearance-none w-full h-4 rounded-full bg-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          />
          </div>

          <div className="flex-1">
            <button
              className="text-[#A7B4CA]
        bg-[#293F64] 
        font-semibold 
        py-2 px-4 border rounded border-[#4A628A]"
            >
              2
            </button>
          </div>

          {/* <span>Min Rank: 1</span>
        <span>Max Rank: 10</span> */}
        
      </div>
    </div>
  );
};

export default Rank;
