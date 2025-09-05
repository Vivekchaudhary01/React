import React, {useState} from 'react';

const ControlledFroms2 = () => {
    const [signupUser, setSignupUser]=useState({
        username: "",
        email:"",
        password:"",
    });

    const handleChange=(e)=>{
        let {name , value}=e.target;
        setSignupUser({...signupUser,[name]:value});  // we use [] on name bcz without it name is passed as key not the destructured variable.
        // ...setSignupUser using spread(...) operator we can store previous value as well as the current value.
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(signupUser);  
    };

  return (
    <div>
        <h1>Controlled Forms 2</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Username' id='username' name='username' value={signupUser.username} onChange={handleChange}/>
            <br /><br />
            <input type="text" placeholder='Email' id='email' name='email' value={signupUser.email} onChange={handleChange}/>
            <br /><br />
            <input type="text" placeholder='Password' id='password' name='password' value={signupUser.password} onChange={handleChange}/>
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ControlledFroms2

// let x="Fullname";
// let obj={
//     [x]: "John Doe",
// };
// console.log(obj);   // {Fullname: John Doe}

