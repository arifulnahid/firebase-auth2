import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div data-theme="cupcake">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Firebase Auth</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='login'>Login</Link></li>
                        <li><Link to='signup'>SignUp</Link></li>
                        <li><Link to='profile'>Profile</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;