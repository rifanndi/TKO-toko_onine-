import {  } from 'react'
import Coba from './elements/Button/coba'
//import './App.css'

const Tombol = (props) => {
  const {cihildren="00000",variant = "bg-black"} = props
 return(
   <button className= {`h-10 px-7 font-semibold rounded-md ${variant} text-white`} type='submit'>
     {cihildren}
    </button>
 )
 }

const App = () => {
   

  return (
    
    
    <div className="flex justify-center min-h-screen items-center">
   <div className='w-full max-w-xs'>
   
<h1 className='text-blue-600'>
annas
</h1>
   

   </div>
   </div>
    
  )
}

export default App

/////

