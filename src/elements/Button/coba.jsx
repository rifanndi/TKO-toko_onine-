import {} from 'react';


const Coba = (props) =>{ 
        const {cihildren="00000",variant = "bg-black"} = props
        return(
          <button className= {`h-10 px-7 font-semibold rounded-md ${variant} text-white`} type='submit'>
            {cihildren}
           </button>
        )
}

export default Coba