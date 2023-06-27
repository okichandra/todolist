import React from 'react'
import ReactDOM from 'react-dom/client'
import ActivityPage from './assets/component/pages/Activity/ActivityPage.jsx'
import FinancePage from './assets/component/pages/Finance/FinancePage.jsx'
import App from './App.jsx'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
