import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const SignUp = () => {
    const { user, createUser, updateUserProfile } = useContext(AuthContext);
    // useState for handle sign up errors
    const [error, setError] = useState('');

    const navigate = useNavigate();

    // handle event on the sign up form
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // handle email pass sign in
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                // update user displayName and photo
                updateUserProfile(fullName, photo)
                    .then(() => {
                        console.log(user.displayName)
                    })
                    .catch(err => console.error(err))
                setError('');
                form.reset();
                navigate('/')

            })
            .catch(err => {
                setError(err.message)
            })


    }


    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up Here</h1>
                        <hr className='mt-3' />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="your full name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo url here" className="input input-bordered" />
                            </div>
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
                                    Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link>
                                </label>
                            </div>
                            <p className='text-red-500'>{error}</p>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;