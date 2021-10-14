import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop'
    console.log('came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }
    /*  .then(result => {
            console.log(result.user);
            setUser(result.user)
        }) */
    return (
        <div className="login-from">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New to ema-john website<Link to="/register">Create Account</Link></p>
                <div>----------OR---------</div>
                <button
                    className="btn-regular"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;