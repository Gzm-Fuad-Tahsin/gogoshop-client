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
import {loader as HomePageAllDataLoader} from '../../Layout/Main/Main'
import { loader as subcategoryLoader } from '../../pages/SubCategoryProductView/SubCategoryProductView';
import { loader as productDetailLoader } from '../../pages/ProductDetail/ProductDetail';
import { loader as CurrentRunningOrdersLoader } from "../../pages/CurrentOrders/CurrentOrder/CurrentOrder";    
import {loader as orderStatusLoader} from '../../pages/CurrentOrders/OrderStatus/OrderStatus'
import {loader as CompletedOrdersLoader} from '../../pages/PreviousOrdersHandle/PreviousOrder/PreviousOrder'         
import {loader as PreviousOrderStatementLoader} from '../../pages/PreviousOrdersHandle/PreviousOrderStatement/PreviousOrderStatement'

import ReviewCartsDiv from "../../pages/ReviewCart/ReviewCartsDiv";
import CurrentOrder from "../../pages/CurrentOrders/CurrentOrder/CurrentOrder";
import OrderStatus from "../../pages/CurrentOrders/OrderStatus/OrderStatus";
import PreviousOrder from "../../pages/PreviousOrdersHandle/PreviousOrder/PreviousOrder";
import UserEditProfile from "../../pages/User/UserEditProfile/UserEditProfile";
import PreviousOrderStatement from "../../pages/PreviousOrdersHandle/PreviousOrderStatement/PreviousOrderStatement";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        loader : HomePageAllDataLoader,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                path : '/update-profile',
                element : <PrivateRoute><UserEditProfile/></PrivateRoute>
            },
            {
                path: '/cart',
                element: <PrivateRoute><>dfjkjfjkd</></PrivateRoute>
            },
            {
                path: '/proceed-to-pay',
                element: <PrivateRoute><ReviewCartsDiv /></PrivateRoute>
            },
            {
                path : 'sub-category/:path_Subcat_Uname',
                element: <SubCategoryProductView />,
                loader: subcategoryLoader,
            },
            {
                path: '/product/:product_slug_name',
                element: <ProductDetail />,
                loader: productDetailLoader,
            },
            {
                path: '/orders',
                element: <PrivateRoute><CurrentOrder /></PrivateRoute>,
                loader: CurrentRunningOrdersLoader,
            },
            {
                path: '/orders/:orderId',
                element : <PrivateRoute><OrderStatus/></PrivateRoute>,
                loader: orderStatusLoader
            },
            {
                path: '/order-history',
                element: <PrivateRoute><PreviousOrder /></PrivateRoute>,
                loader: CompletedOrdersLoader,
            },
            {
                path: '/order-history/:orderId',
                element : <PrivateRoute><PreviousOrderStatement/></PrivateRoute>,
                loader : PreviousOrderStatementLoader
            },
            {
                path: '*',
                element: <NotFound />
            }
        ],


    },

])