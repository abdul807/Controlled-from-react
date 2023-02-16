
import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");
console.log(password.value)
  const getIsFormValid = () => {
    // Implement this function
    return (
      firstName && lastName && validateEmail(email) && password.value.length >= 8 && role !== 'role'
    )
  };

  const clearForm = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword({
      value: "",
      isTouched:false
    })
    setRole('')
  };

  const handleSubmit = () => {
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
            
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name" />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" value={email} onChange={(e)=>{setEmail(e.target.value)}}  />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
             placeholder="Password" 
           /> 
           {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 
         </div> 
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}> 
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;














// import { useState } from 'react';
// import './App.css';
// import ToDo from './Todos';
// import UserInput from './user-input';
// // import { useState } from 'react';




// function App(){
//   const [Score,setScore] = useState('10')
//   const [Comment,setComment] = useState('');

// function handleSubmit(e){
//   e.preventDefault();
//   if (Number(Score) <=5 && Comment.length <= 10){
//     alert('Please explain better for best user experience');
//     return
//   }
//   console.log('Form Submitted')
//   setComment("")
//   setScore('10')

// }


//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <h2>Feedback From</h2>
//           <div className="Field">
//             <label htmlFor="Score">Score: {Score}</label> <br />
//             <input type="range" 
//             min='0' 
//             max='10'
//              value={Score}
//              onChange= {(e)=> setScore(e.target.value)} />
//           </div>
//           <div className="Field">
//             <label htmlFor="Comment">Comments</label> <br />
//             <textarea value={Comment} onChange={(e)=> setComment(e.target.value)} ></textarea>
//           </div>
//           <button type="submit">Submit</button>

          
//         </fieldset>
//       </form>
//     </div>
//   )
// }

// function App() {
//   const [Todos,setTodos] = useState([{
//     id:'todo1',
//     createdAt: '18:00'
//   },{
//     id:'todo2',
//     createdAt: '8:00'
//   }])
//   const [name,setName] = useState("")

//   function reverseOrder(){
//     return setTodos([...Todos].reverse())
//   }
//   return (
//     <div className="App">
//       <button value={name} onClick={reverseOrder} onChange={(e)=>setName(e.target.value)} disabled={!name} >Reverse</button>
//       <table>
//         <tbody>
//           {Todos.map(function(Todos){
//             return  <ToDo key={Todos.id} id={Todos.id} createdAt={Todos.createdAt}/>
//           })}
//         </tbody>
//       </table>
//      <UserInput />
//     </div>
//   );
// }

// export default App;
