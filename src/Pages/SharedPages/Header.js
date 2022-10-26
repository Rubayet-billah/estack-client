import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);
    console.log(user)

    // handle log out user
    const handleLogout = () => {
        logoutUser()
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="navbar bg-base-300">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>

                {
                    <p>{user ? <>{user.displayName}</> : <></>}</p>
                }

                <div className='ml-auto'>
                    <Link className='mx-2' to='/'>Home</Link>
                    <Link className='mx-2' to='/courses'>Courses</Link>

                    {
                        user && user.uid ? <button onClick={handleLogout} className='btn btn-sm btn-warning'>Sign Out</button> :
                            <><Link className='mx-2' to='/login'>Login</Link>
                                <Link className='mx-2' to='/signup'>Sign Up</Link></>
                    }

                    <div>
                        {
                            false ? <></> : <FaUserAlt />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;