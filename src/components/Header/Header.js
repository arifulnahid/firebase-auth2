import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/ContextAPI';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    return (
        <div data-theme="cupcake">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Firebase Auth</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        {
                            user?.uid ?
                                <>
                                    <li><button onClick={logOut}>Logout</button></li>
                                    <li><p>{user.displayName}</p></li>
                                </>
                                :
                                <>
                                    <li><Link to='login'>Login</Link></li>
                                    <li><Link to='signup'>SignUp</Link></li>
                                    <li><Link to='profile'>Profile</Link></li>
                                </>

                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;