import { useState } from 'react'
const MyFunctionComponent = () => {
    // setting the state hooks
    const [name, setname] = useState('skandar');
    const [age, setage] = useState(24)
    const [film, setfilm] = useState('star wars')
   const handleClick=()=>{
      setname ('sami')
      setage (30)
      setfilm('avengers')
    }
    return (
      <div>
        <p>hello my name is {name}, and i am {age} years old, i prefer {film}</p>
        <button onClick={handleClick}>change it</button>
      </div>
    );
   };
   export default MyFunctionComponent