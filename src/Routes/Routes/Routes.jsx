import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import UserMain from "../../pages/User/UserMain/UserMain";
import NotFound from "../../pages/ErrorPages/NotFound/NotFound";
import SubCategoryProductView from "../../pages/SubCategoryProductView/SubCategoryProductView";



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
                path : '/category/:subcategory',
                element : <SubCategoryProductView/>
            },
            {
                path : '*',
                element : <NotFound/>
            }
        ],

       
    },
   
])