import React, { useState } from "react";
// import { axiosWithAuth } from "../utilities/Utilities";
import axios from 'axios';

function Login (props){

    const [ credentials, setCredentials] = useState({
        username: "",
        password: ""
    });


    const handleChange = e => {
            setCredentials({
                ...credentials,
                [e.target.name]: e.target.value,
            })
        }

    const login = e => {
        e.preventDefault();

        axios
        .post('http://localhost:5000/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload) // returns token to local storage.
            props.history.push('/friendslist');

        })
        .catch(err => console.log(err));
    };

   
        return (
            <div>
          <h1>Sign In</h1>
        <form onSubmit={login}>
         Username: <input 
          type='text'
          name='username'
          value={credentials.username}
          onChange={handleChange}

          />
         Password:  <input 
          type='text'
          name='password'
          value={credentials.password}
          onChange={handleChange}
          />
          <button>Log In</button>
        </form>
      </div>
        )
    }


export default Login;