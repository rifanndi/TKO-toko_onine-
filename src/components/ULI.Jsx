import {} from "react";

const ULI = (props) => {
  const {cihildren = ".....",variant = "bg-black"} = props
 return(
   <button className= {`h-10 px-7 font-semibold rounded-md ${variant} text-white`} type='submit'>
     {cihildren}
    </button>
 )
};
export default ULI;
