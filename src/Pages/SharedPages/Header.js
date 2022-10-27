import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaUserAlt, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user, logoutUser, dark, setDark } = useContext(AuthContext);

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
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='mx-2' to='/'>Home</Link></li>
                        <li><Link className='mx-2' to='/courses'>Courses</Link></li>
                        <li><Link className='mx-2' to='/blogs'>Blogs</Link></li>
                        <li><Link className='mx-2' to='/faq'>FAQ</Link></li>
                        <div>
                            {
                                user && user.uid ? <>
                                    <li><Link className='mx-2' to='/profile'>Profile</Link></li>
                                    <button onClick={handleLogout} className='btn btn-sm btn-warning rounded-2xl mx-2'>Sign Out</button>
                                </> :
                                    <><li><Link className='mx-2' to='/login'>Login</Link></li>
                                        <li><Link className='mx-2' to='/signup'>Sign Up</Link></li></>
                            }
                        </div>
                    </ul>
                </div>
                <Link className="normal-case text-2xl md:text-4xl font-bold lg:ml-16">
                    <span className='text-secondary'>E</span>
                    <span className='text-primary ml-1'>Stack</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className='mx-2' to='/'>Home</Link></li>
                    <li><Link className='mx-2' to='/courses'>Courses</Link></li>
                    <li><Link className='mx-2' to='/blogs'>Blogs</Link></li>
                    <li><Link className='mx-2' to='/faq'>FAQ</Link></li>


                    {
                        user && user.uid ? <>
                            <li><Link className='mx-2' to='/profile'>Profile</Link></li>
                            <button onClick={handleLogout} className='btn btn-sm btn-warning rounded-2xl my-auto'>Sign Out</button>
                        </> :
                            <>
                                <li><Link className='mx-2' to='/login'>Login</Link></li>
                                <li><Link className='mx-2' to='/signup'>Sign Up</Link></li>
                            </>
                    }

                </ul>
            </div>
            <div className="navbar-end mr-4 md:mr-8">
                <div className='flex items-center'>
                    <button onClick={() => setDark(!dark)} className='flex items-center mx-3'>
                        <span className='mx-1 text-sm hidden md:inline'>Theme</span> {dark ? <FaToggleOff /> : <FaToggleOn />}
                    </button>

                    <div title={user?.displayName || 'No Author'}>
                        {
                            user?.photoURL ? <Link to='/profile'><img className='h-8 w-8 rounded-full' src={user?.photoURL} alt="" /></Link> : <FaUserAlt />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;