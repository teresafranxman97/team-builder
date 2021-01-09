import React, { useState } from 'react'
import './App';

function UserForm(props) {

    const [ form, setForm] = useState({ name: props.name, email: props.email, role: props.role });
    const handleChange = (event) => {
        // console.log("handled change!", event.target.value);
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const submitForm = (event) => {
        event.preventDefault();
        props.addNewUser(form);
        setForm({ name: "", email: "", role: "" });
    };

    const newStateObj = {...form}
    console.log('newStateObj', newStateObj);

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name"> Name </label>
            <input 
                id="name" 
                type="text" 
                placeholder="Enter Text"
                name="name" 
                onChange={handleChange}
                value={form.name}
            />
            <label htmlFor="email"> Email </label>
            <input 
                id="email" 
                type="text" 
                placeholder="Enter Text" 
                name="email"
                onChange={handleChange}
                value={form.email}
            />

            <label htmlFor="role"> Role </label>
            <input 
                id="role" 
                type="text" 
                placeholder="Enter Text" 
                name="role"
                onChange={handleChange}
                value={form.role}
            />
            <button type="submit">Submit</button>
        </form>
    )
} 


export default UserForm;