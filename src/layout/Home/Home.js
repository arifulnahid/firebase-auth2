import React, { useContext } from 'react';
import { AuthContext } from '../../ContextAPI/ContextAPI';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>This is home page</h1>
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
            <img src={user?.photoURL} alt="phto" style={{ width: '200px', margin: "auto" }}></img>
        </div>
    );
};

export default Home;