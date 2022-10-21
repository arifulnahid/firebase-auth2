import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../ContextAPI/ContextAPI';

const Signup = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate()

    const googleSignInHandle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate("/");
            }).catch(error => console.log(error))
    }

    return (
        <div className='mx-auto w-96 mt-10 border border-gray-500 rounded py-10 px-5'>
            <h1 className='text-xl'>Create a New Account</h1>
            <form className="form-control items-center">
                <label className="label">
                    <span className="label-text"></span>
                </label>
                <label className="input-group input-group-vertical">
                    <span>Email</span>
                    <input type="text" placeholder="info@site.com" className="input input-bordered" />
                </label>
                <label className="label">
                    <span className="label-text"></span>
                </label>
                <label className="input-group input-group-vertical">
                    <span>Password</span>
                    <input type="text" placeholder="info@site.com" className="input input-bordered" />
                </label>
                <label className="label">
                    <span className="label-text"></span>
                </label>
                <label className="input-group input-group-vertical">
                    <span>Confirm Password</span>
                    <input type="password" placeholder="info@site.com" className="input input-bordered" />
                </label>
                <button className="btn btn-wide mt-5" type='submit'>Sign Up</button>
            </form>
            <div className='mt-5'>Already Have an Account? <Link to="/login" className='text-blue-900'>Login here</Link></div>
            <div className=' bg-slate-300 px-3 py-2 rounded'><button onClick={googleSignInHandle}><FaGoogle className='inline mr-2 text-red-500' />SignIn With Google</button></div>
        </div>
    );
};

export default Signup;