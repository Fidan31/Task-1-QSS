import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const Year = () => {

    const [year, setYear] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                
                const response = await axios.get
                ('https://searchartback-production-dc78.up.railway.app/api/years/?countries=Afghanistan%3BAlbania%3BAlgeria%3BAndorra%3BAngola%3BAntigua%20and%20Barbuda%3BArgentina&indicator=Gross%20Domestic%20Product%20billions%20of%20U.S.%20dollars');
                setYear(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    console.log(year);


    return (
        <div className="relative  ">
            <h1 className='text-[#A7B4CA] my-2'>Year</h1>
            <select className="select-none w-full p-2.5 text-[#A7B4CA] 
            bg-[#293F64] border border-[#4A628A]  shadow-sm outline-none appearance-none  rounded-[7px]">
                {year.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}

            </select>
        </div>
    )
}

export default Year
