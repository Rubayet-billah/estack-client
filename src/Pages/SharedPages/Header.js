import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-base-300">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>


                <div className='ml-auto'>
                    <Link className='mx-2' to='/'>Home</Link>
                    <Link className='mx-2' to='/login'>Login</Link>
                    <Link className='mx-2' to='/signup'> Sign Up</Link>
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