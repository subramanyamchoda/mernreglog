// Login.js
import  { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Use navigate instead of Navigate

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/login', { 
            email: email,
            password: password
        })
        .then(result => {
            console.log(result);
            if(result.data === "success") {
                navigate('/home'); // Use navigate instead of Navigate
            } else {
                console.error('Login failed:', result.data);
            }
        })
        .catch(error => {
            console.error('Error logging in:', error);
        });
    };

    return (
        <div className="mt-5 mx-5">
            <div className="row justify-content-center">
                <div className="col-md-4 bg-white border">
                    <h2 className="text-center">Login form</h2><br />
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="email" 
                                className="form-control" 
                                name="email" 
                                placeholder="Email"
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control" 
                                name="password" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success btn-block">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
