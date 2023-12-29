import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const Country = () => {

    const [country, setCountry] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                
                const response = await axios.get('https://searchartback-production-dc78.up.railway.app/api/country/?indicator=Gross%20Domestic%20Product%20billions%20of%20U.S.%20dollars');
                setCountry(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    console.log(country);


    return (
        <div className="relative  ">
            <h1 className='text-[#A7B4CA] my-2'>All</h1>
            <select className="select-none w-full p-2.5 text-[#A7B4CA] bg-[#293F64] border border-[#4A628A]  shadow-sm outline-none appearance-none  rounded-[7px]">
                {country.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}

            </select>
        </div>
    )
}

export default Country
