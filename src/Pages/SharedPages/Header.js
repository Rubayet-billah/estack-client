import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaUserAlt, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user, logoutUser, dark, setDark } = useContext(AuthContext);
    console.log(user)

    const navigate = useNavigate();

    // handle log out user
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="navbar bg-base-300">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>



                <div className='mx-auto'>
                    <Link className='mx-2' to='/'>Home</Link>
                    <Link className='mx-2' to='/courses'>Courses</Link>

                </div>
                <button onClick={() => setDark(!dark)} className='flex items-center'>
                    <span className='mx-1'>Dark</span> {dark ? <FaToggleOff /> : <FaToggleOn />}
                </button>

                <div>
                    {
                        <p className='mx-2'>{user ? <>{user.displayName}</> : <></>}</p>
                    }
                    {
                        user?.photoURL ? <img className='h-8 w-8 rounded-full' src={user?.photoURL} alt="" /> : <FaUserAlt />
                    }
                </div>
                <div>
                    {
                        user && user.uid ? <button onClick={handleLogout} className='btn btn-sm btn-warning rounded-2xl mx-2'>Sign Out</button> :
                            <><Link className='mx-2' to='/login'>Login</Link>
                                <Link className='mx-2' to='/signup'>Sign Up</Link></>
                    }
                </div>



            </div>
        </div>
    );
};

export default Header;