import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <div>Home element</div>,
        errorElement: <div>Error</div>,
        children: [
            {
                path: '/',
                element: <div>children element</div>
            }
        ]
    }
]);