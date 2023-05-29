import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home/Home";

import NotFound from "../../pages/ErrorPages/NotFound/NotFound";
import SubCategoryProductView, { loader } from "../../pages/SubCategoryProductView/SubCategoryProductView";
import SignIn from "../../pages/User/SignIn/SignIn";
import PreventLogin from "../PreventLogin/PreventLogin";
import SignUp from "../../pages/User/SignUp/SignUp";
import MobileSignUp from "../../pages/User/MobileSignUp/MobileSignUp";
import ForgotPassword from "../../pages/User/ForgotPassword/ForgotPassword";
import UserProfile from "../../pages/User/UserProfile/UserProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ProductDetail from "../../pages/ProductDetail/ProductDetail";


// loader 
import {loader as subcategoryLoader} from '../../pages/SubCategoryProductView/SubCategoryProductView'
import Orderhistory from "../../pages/OrderHistory/OrderHistory";
import ReviewCartsDiv from "../../pages/ReviewCart/ReviewCartsDiv";



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
                path : '/login',
                element : <PreventLogin><SignIn/></PreventLogin>
            },
            {
                path : '/sign-up',
                element : <PreventLogin><SignUp/></PreventLogin>
            },
            {
                path : '/auth-phone',
                element : <PreventLogin><MobileSignUp/></PreventLogin>
            },
            {
                path : '/forget-password',
                element : <PreventLogin><ForgotPassword/></PreventLogin>
            },
            {
                path : '/profile',
                element : <PrivateRoute><UserProfile/></PrivateRoute>
            },
            {
                path : '/cart',
                element : <PrivateRoute><ReviewCartsDiv/></PrivateRoute>
            },
            {
                path : '/proceed-to-pay',
                element : <PrivateRoute><ReviewCartsDiv/></PrivateRoute>
            },
            {
                path : '/orders',
                element : <PrivateRoute><Orderhistory/></PrivateRoute>
            },
            {
                path : '/subcategory',
                element : <SubCategoryProductView/>,
                loader: subcategoryLoader,
            },
            {
                path : '/product',
                element : <ProductDetail/>,                
            },
            {
                path : '*',
                element : <NotFound/>
            }
        ],

       
    },
   
])