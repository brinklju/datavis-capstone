import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './auth-context'; 
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Root, ErrorPage, Resources } from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import Login from './pages/Login'
import './index.css'
import CreateTable from './pages/CreateTable'
import People from './pages/PeoplePage'

const queryClient = new QueryClient();


const router = createBrowserRouter([
    //configuration
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage />,
        children: [    
            {
                path: "people", 
                element: <People />,
                children: [
                ]
            },
            { 
                path: "/login", 
                element: <Login />,
                children: [
                ] 
            },
            {   
                path:"insert",
                element: <CreateTable />,
                children: [
                ]
            },
            {   
                path:"Resources",
                element: <Resources />,
                children: [
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client = {queryClient}>
                <Provider store = {store}>
                    <RouterProvider router={router} />
                </Provider>
            </QueryClientProvider>
        </AuthProvider>
    </React.StrictMode>
)