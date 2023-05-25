import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import UserMain from "../../pages/User/UserMain/UserMain";
import NotFound from "../../pages/ErrorPages/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element : <Main/>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/user',
                element : <UserMain/>
            },
            {
                path : '*',
                element : <NotFound/>
            }
        ],

       
    },
   
])