import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function emailOnChange(event){
        setEmail(event.target.value)
    }

    function passwordOnChange(event){
        setPassword(event.target.value)
    }

    return ( 
        <div>
            <h3>Signup</h3>
            <input type="text" placeholder="Signup email" value = {email} onChange = {(e) => emailOnChange(e)}/>
            <input type="text" placeholder="Signup password" value = {password} onChange = {(e) => passwordOnChange(e)}/>
        </div>
     );
}
 
export default Signup;