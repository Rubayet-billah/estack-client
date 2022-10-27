import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Profile = () => {
    const { user, updateUserProfile, updateUserPassword } = useContext(AuthContext);



    // update profile
    const handleSubmit = (event) => {

        // get form values
        event.preventDefault();
        const form = event.target;
        const fullName = form.name.value;
        const password = form.password.value;
        updateUserProfile(fullName)
            .then(() => {

            })
            .catch(err => console.error(err));

        updateUserPassword(password)
            .then(() => {

            })
            .catch(err => console.error(err))


    }
    return (
        <div>
            <h1 className='text-3xl md:text-6xl text-center md:my-5'>Edit Profile</h1>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" readOnly defaultValue={user.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Change Password</span>
                        </label>
                        <input type="text" name='password' placeholder="new password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Save Changes</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Profile;