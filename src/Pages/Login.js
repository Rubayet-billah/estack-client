import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useState } from 'react';

const Login = () => {
    const { loginUser, googleLogin, githubLogin, user } = useContext(AuthContext);
    console.log(user)
    // useState for handle login errors
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // handle event on the login form
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // handle email pass sign in
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setError('')
                navigate(from, { replace: true })
            })
            .catch(err => {
                setError(err.message)
            })
    }

    // handle google log in
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }
    // handle github log in
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login</h1>
                        <hr className='mt-3' />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="text-xs mt-2">
                                    New to this site? <Link to='/signup' className='text-blue-600'>Signup Here</Link>
                                </label>
                            </div>
                            <p className='text-red-500'>{error}</p>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='mb-5'>
                            <hr className='mx-5' />
                            <p className='text-center my-2'>Or Continue With</p>
                            <div className='flex justify-center'>
                                <button onClick={handleGoogleLogin} className='bg-red-500 text-white px-2 py-1 rounded-sm mx-2'>
                                    <FaGoogle></FaGoogle>
                                </button>
                                <button onClick={handleGithubLogin} className='bg-gray-800 text-white px-2 py-1 rounded-sm mx-2'>
                                    <FaGithub></FaGithub>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;