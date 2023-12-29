import React from 'react'
import Sector from './components/Sector'
import Country from './components/Country'
import Subsector from './components/Subsector'
import Indigator from './components/Indigator'
import Year from './components/Year'
import Rank from './components/Rank'


export default function App() {


  return (
    <div className='bg-[#051124] h-screen'>
      <div className='container flex justify-between mx-auto'>
        <Country /> 
        <Year/>
        <Sector />
        <Subsector />
        <Indigator />
        <Rank/>
       
      </div>
    </div>
  )
}
