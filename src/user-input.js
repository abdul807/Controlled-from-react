
import { useState } from 'react';
function UserInput(){
    const [value, setValue] = useState(""); 

    const handleChange = (e) => { 
      setValue(e.target.value) 
    } 
   
    return ( 
      <form> 
        <input 
          value={value} 
          onChange={handleChange} 
          type="text" 
        /> 
        <p>{value}</p>
      </form> 
    ); 
}




export default UserInput;