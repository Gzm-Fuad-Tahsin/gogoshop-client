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
import { loader as HomePageAllDataLoader } from '../../Layout/Main/Main'
import { loader as subcategoryLoader } from '../../pages/SubCategoryProductView/SubCategoryProductView';
import { loader as productDetailLoader } from '../../pages/ProductDetail/ProductDetail';
import { loader as CurrentRunningOrdersLoader } from "../../pages/OrdersMangement/CurrentOrders/CurrentOrder/CurrentOrder";
import { loader as orderStatusLoader } from '../../pages/OrdersMangement/CurrentOrders/OrderStatus/OrderStatus'
import { loader as CompletedOrdersLoader } from '../../pages/OrdersMangement/PreviousOrdersHandle/PreviousOrder/PreviousOrder'
import { loader as PreviousOrderStatementLoader } from '../../pages/OrdersMangement/PreviousOrdersHandle/PreviousOrderStatement/PreviousOrderStatement';
import { loader as orderItemLoader } from "../../pages/CartManagement/PlaceOrder/ReviewCartsDiv";

// admin 
import { loader as admin_DashboardLoader } from '../../pages_Admin/Dashboard/Dashboard';
import { loader as admin_TopBannerLoader } from '../../pages_Admin/BuyerSite_manipulation/Upload_Topbanner/Upload_Topbanner';
import { loader as admin_BottomBannerLoader } from '../../pages_Admin/BuyerSite_manipulation/Upload_BottomBanner/Upload_BottomBanner';
import { loader as admin_footerDataLoader } from '../../pages_Admin/BuyerSite_manipulation/Upload_footerData/Upload_footerData';
import { loader as admin_allcategoriesLoader } from '../../pages_Admin/Category/Category';
import { loader as admin_allsubCategoriesLoader } from '../../pages_Admin/SubCategory/SubCategory';
import { loader as admin_allProductsLoader } from '../../pages_Admin/ProductList/ProductList';
import { loader as admin_stocksDataLoader } from '../../pages_Admin/Stock/StockList';
import { loader as admin_customOrderLoader } from '../../pages_Admin/HandleOrders/Admin_CustomOrder/Admin_CustomOrder';
import { loader as admin_allOrdersLoader } from '../../pages_Admin/HandleOrders/AllOrders/AllOrders';
import { loader as admin_orderDetailViewLoader } from '../../pages_Admin/HandleOrders/Admin_OrderDetailView/Admin_OrderDetailView';

import ReviewCartsDiv from "../../pages/CartManagement/PlaceOrder/ReviewCartsDiv";
import CurrentOrder from "../../pages/OrdersMangement/CurrentOrders/CurrentOrder/CurrentOrder";
import OrderStatus from "../../pages/OrdersMangement/CurrentOrders/OrderStatus/OrderStatus";
import PreviousOrder from "../../pages/OrdersMangement/PreviousOrdersHandle/PreviousOrder/PreviousOrder";
import UserEditProfile from "../../pages/User/UserEditProfile/UserEditProfile";
import PreviousOrderStatement from "../../pages/OrdersMangement/PreviousOrdersHandle/PreviousOrderStatement/PreviousOrderStatement";
import ViewCart from "../../pages/CartManagement/ViewCart/ViewCart";
import Admin from "../../Layout/Admin/Admin";
import Dashboard from "../../pages_Admin/Dashboard/Dashboard";
import AdminLogin from "../../pages_Admin/Admin/AdminLogin/AdminLogin";
import Category from "../../pages_Admin/Category/Category";
import SubCategory from "../../pages_Admin/SubCategory/SubCategory";
import ProductList from "../../pages_Admin/ProductList/ProductList";
import StockList from "../../pages_Admin/Stock/StockList";
import AllOrders from "../../pages_Admin/HandleOrders/AllOrders/AllOrders";
import Admin_OrderDetailView from "../../pages_Admin/HandleOrders/Admin_OrderDetailView/Admin_OrderDetailView";
import Admin_CustomOrder from "../../pages_Admin/HandleOrders/Admin_CustomOrder/Admin_CustomOrder";
import Upload_Topbanner from "../../pages_Admin/BuyerSite_manipulation/Upload_Topbanner/Upload_Topbanner";
import Upload_BottomBanner from "../../pages_Admin/BuyerSite_manipulation/Upload_BottomBanner/Upload_BottomBanner";
import Upload_footerData from "../../pages_Admin/BuyerSite_manipulation/Upload_footerData/Upload_footerData";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        loader: HomePageAllDataLoader,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: 'login',
                element: <PreventLogin><SignIn /></PreventLogin>
            },
            {
                path: 'sign-up',
                element: <PreventLogin><SignUp /></PreventLogin>
            },
            {
                path: 'auth-phone',
                element: <PreventLogin><MobileSignUp /></PreventLogin>
            },
            {
                path: 'forget-password',
                element: <PreventLogin><ForgotPassword /></PreventLogin>
            },
            {
                path: 'profile',
                element: <PrivateRoute><UserProfile /></PrivateRoute>
            },
            {
                path: 'update-profile',
                element: <PrivateRoute><UserEditProfile /></PrivateRoute>
            },
            {
                path: 'cart',
                element: <PrivateRoute><ViewCart /></PrivateRoute>,

            },
            {
                path: 'proceed-to-pay',
                element: <PrivateRoute><ReviewCartsDiv /></PrivateRoute>,
                loader: orderItemLoader
            },
            {
                path: 'sub-category/:subcategory_slug',
                element: <SubCategoryProductView />,
                loader: subcategoryLoader,
            },
            {
                path: 'product/:product_slug_name',
                element: <ProductDetail />,
                loader: productDetailLoader,
            },
            {
                path: 'orders',
                element: <PrivateRoute><CurrentOrder /></PrivateRoute>,
                loader: CurrentRunningOrdersLoader,
            },
            {
                path: 'orders/:orderId',
                element: <PrivateRoute><OrderStatus /></PrivateRoute>,
                loader: orderStatusLoader
            },
            {
                path: 'order-history',
                element: <PrivateRoute><PreviousOrder /></PrivateRoute>,
                loader: CompletedOrdersLoader,
            },
            {
                path: 'order-history/:orderId',
                element: <PrivateRoute><PreviousOrderStatement /></PrivateRoute>,
                loader: PreviousOrderStatementLoader
            }
        ],


    },
    {
        path: 'admin',
        element: <Admin />,
        children: [
            {
                path: 'admin',
                element: <AdminLogin />,

            },
            {
                path: 'dashboard',
                element: <Dashboard />,
                loader: admin_DashboardLoader
            },
            {
                path: 'category-list',
                element: <Category />,
                loader: admin_allcategoriesLoader
            },
            {
                path: 'subcategory-list',
                element: <SubCategory />,
                loader: admin_allsubCategoriesLoader
            },
            {
                path: 'products-list',
                element: <ProductList />,
                loader: admin_allProductsLoader
            },
            {
                path: 'inventroy',
                element: <StockList />,
                loader: admin_stocksDataLoader
            },
            {
                path: 'orders-list',
                element: <AllOrders />,
                loader: admin_allOrdersLoader
            },
            {
                path: 'orders-list/:orderID',
                element: <Admin_OrderDetailView />,
                loader: admin_orderDetailViewLoader
            },
            {
                path: 'place-order',
                element: <Admin_CustomOrder />,
                loader: admin_customOrderLoader
            },
            {
                path: 'uplaod-top-banner',
                element: <Upload_Topbanner />,
                loader: admin_TopBannerLoader
            },
            {
                path: 'uplaod-bottom-banner',
                element: <Upload_BottomBanner />,
                loader: admin_BottomBannerLoader
            },
            {
                path: 'upload-footer-data',
                element: <Upload_footerData />,
                loader: admin_footerDataLoader
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }

])