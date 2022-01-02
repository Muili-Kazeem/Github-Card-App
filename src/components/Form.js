import React, { useState } from "react";
import axios from "axios";

import "./Form.css"



const Form = (props) => {
    const [username, setUsername] = useState("")

    const changeHandler = (event) => {
        setUsername(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${username}`);
        console.log(resp.data);
        props.onSubmit(resp.data);
        setUsername("")
    }
    
    return (
        <form action="" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Github username"
                value={username}
                onChange={changeHandler}
                required
            />
            <button>Add Card</button>
        </form>
    )
}

export default Form;