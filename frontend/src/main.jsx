import React from 'react'
import ReactDOM from 'react-dom/client'
import ActivityPage from './assets/component/pages/Activity/ActivityPage.jsx'
import FinancePage from './assets/component/pages/Finance/FinancePage.jsx'
import App from './App.jsx'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from './assets/component/pages/SignPage/Login.jsx'
import Register from './assets/component/pages/SignPage/Register.jsx'
import SignLayout from './assets/component/layout/SignLayout.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignLayout />,
    },
    {
        path: "home",
        element: <App />,
    },
    {
        path: "activity",
        element: <ActivityPage />,
    },
    {
        path: "finance",
        element: <FinancePage />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
