import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './Pages/Main/Main';
import Category from './Pages/Home/Category/Category';
import NewsPages from './Pages/Shared/NewsPage/NewsPages';
import News from './Pages/Shared/NewsPage/News';
import AuthProvider from './firebase/Provider/AuthProvider';
import Login from './Pages/LayOut/Login/Login';
import Register from './Pages/LayOut/Register/Register';
import LoginPage from './Pages/LayOut/LoginPage/LoginPage';
import PrivateRoute from './Pages/LayOut/PrivateRoute/PrivateRoute';
import Terms from './Pages/Parts/Terms/Terms';




const router = createBrowserRouter([
  {
    path: "category",
    element: <Main></Main>,
    children:[
      // {
      //   path:'/',
      //   element:<Category></Category>,
      //   loader:() => fetch(`http://localhost:5000/news`)
      // },
      {
        path:':id',
        element:<Category></Category>,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
      },
     
    ]
  },
  {
    path:'news',
    element:<NewsPages></NewsPages>,
    children:[
      {
        path:':id',
        element:<PrivateRoute><News></News></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  },
  {
    path:'/',
    element:<LoginPage></LoginPage>,
    children:[
      {
        path:'/',
        element:<Navigate to='/category/0'></Navigate>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'terms',
        element:<Terms></Terms>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
