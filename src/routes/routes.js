import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main/Main';
import Home from '../layout/Home/Home';
import Login from '../layout/Login/Login';
import Signup from '../layout/Signup/Signup';
import Profile from "../layout/Profile/Profile";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>Error</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            }
        ]
    }
]);