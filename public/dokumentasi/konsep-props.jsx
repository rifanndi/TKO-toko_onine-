import {  } from 'react'

//import './App.css'

const Tombol = (props) => {
  const {cihildren = ".....",variant = "bg-black"} = props
 return(
   <button className= {`h-10 px-7 font-semibold rounded-md ${variant} text-white`} type='submit'>
     {cihildren}
    </button>
 )
 }

const Konsep_props = () => {
   

  return (
    
    
    <div className="flex justify-center  bg-blue-900 min-h-screen items-center">
   <div className='flex gap-x-6'>
    <Tombol variant="bg-red-700" cihildren= "Buy Now"/>
    <Tombol variant="bg-slate-700" cihildren="pay Later"/>
    <Tombol />
   

   </div>
   </div>
    
  )
}

export default Konsep_prop

/////!
//?apa itu pros adalah untuk merubah isi roperti 
//!contoh siatas adalah jika varian untuk merubah warna dan cilden untuk text

