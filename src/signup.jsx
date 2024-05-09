import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();

       // Inside your Signup component or wherever you are making the request
        axios.post('http://127.0.0.1:3001/register', { // Make sure to pass data as an object
        name: name,
        email: email,
        password: password
        })
        .then(result => {console.log(result)
        Navigate('/login')})
        .catch(err => console.log(err));


    };

    return (
        <div className="mt-5 mx-5">
            <div className="row justify-content-center">
                <div className="col-md-4 bg-white border">
                    <h2 className="text-center">Registration form</h2><br />
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Name" 
                            value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="Email"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Password" 
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </div><br/>                        
                        <div className="form-group">
                            <Link to="/login" className="btn btn-success btn-block">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
