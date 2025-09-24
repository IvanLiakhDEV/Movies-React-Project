import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from './components/pages/Home';
import { Favorites } from './components/pages/Favorites';
import { Watched } from './components/pages/Watched';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/favorites',
        element: <Favorites />,
    },
    {
        path: '/watched',
        element: <Watched />,
    },
]);
const App = () => {
    return <RouterProvider router={router} />;
};
export default App;
