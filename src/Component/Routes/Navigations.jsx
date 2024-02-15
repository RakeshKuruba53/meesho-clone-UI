import React from 'react'
import Register from '../Public/Register'
import Login from '../Public/Login'
import VerifyOtp from '../Public/VerifyOtp'
import Search from '../Public/Search'
import Home from '../Public/Home'
import SellerDashBoard from '../Private/Seller/SellerDashBoard'
import Sellerorders from '../Private/Seller/Sellerorders'
import Cart from '../Private/Customer/Cart'
import Orders from '../Private/Customer/Orders'
import WishList from '../Private/Customer/WishList'
import EditProfile from '../Private/Common/EditProfile'
import Account from '../Private/Common/Account'

const navs = [
    {
        path:"seller/register",
        element:<Register role={"SELLER"}/>,
        requireAuth:false,
        isVisibleafterAuth:false,
        role:"ALL"
    },
    {
        path:"customer/register",
        element:<Register role={"CUSTOMER"}/>,
        requireAuth:false,
        isVisibleafterAuth:false,
        role:"ALL"
    },
    {
        path:"/Login",
        element:<Login/>,
        requireAuth:false,
        isVisibleafterAuth:false,
        role:"ALL"
    },
    {
        path:"/verifyotp",
        element:<VerifyOtp />,
        requireAuth:false,
        isVisibleafterAuth:false,
        role:"ALL"
    },
    {
        path:"/Search",
        element:<Search />,
        requireAuth:false,
        isVisibleafterAuth:false,
        role:"ALL"
    },
    {
        path:"/home",
        element:<Home/>,
        requireAuth:false,
        isVisibleafterAuth:false,
        role:"ALL"
    },
    {
        path:"/sellerdashboard",
        element:<SellerDashBoard/>,
        requireAuth:true,
        isVisibleafterAuth:true,
        role:"SELLER"
    },
    {
        path:"/sellerOrders",
        element:<Sellerorders/>,
        requireAuth:true,
        isVisibleafterAuth:true,
        role:"SELLER"
    },
    {
        path:"/cart",
        element:<Cart />,
        requireAuth:true,
        isVisibleafterAuth:true,
        role:"CUSTOMER"
    },
    {
        path:"/orders",
        element:<Orders />,
        requireAuth:true,
        isVisibleafterAuth:true,
        role:"CUSTOMER"
    },
    {
        path:"/wishlist",
        element:<WishList />,
        requireAuth:true,
        isVisibleafterAuth:true,
        role:"CUSTOMER"
    },
    {
        path:"/edit",
        element:<EditProfile  />,
        requireAuth:true,
        isVisibleafterAuth:true,
        role:"ALL"
    },
    {
        path:"/account",
        element:<Account />,
        requireAuth:true,
        isVisibleafterAuth:true,
        role:"ALL"
    }


]
  

export default navs
