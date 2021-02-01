import React, { useEffect, useState } from 'react'
import axios from "axios"


const initialFormValues = {
    username: "",
    password: ""
}

function Login(props) {

    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault();
        axios.post("https://secret-family-recipes-be.herokuapp.com/api/auth/login", formValues)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            props.history.push("/protected")
            console.log("success", res.data)
        })
        .catch(err => {
            console.log("Login error", err)
        })
    }
    return (
        <div>
            <form onSubmit = {login}>
                <label> Username:
                <input
                    type = "text"
                    name = "username" 
                    values = {formValues.username}
                    onChange = {handleChange}/>
                </label>
                <label>Password:
                <input
                    type = "password"
                    name = "password"
                    values = {formValues.password}
                    onChange = {handleChange}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login
