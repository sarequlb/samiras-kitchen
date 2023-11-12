import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import SignIn from "../../components/Pages/SignIn/SignIn";
import SignUp from "../../components/Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AddFoods from "../../components/Pages/AddFoods/AddFoods";
import MyReviews from "../../components/Pages/MyReviews/MyReviews";
import Homes from "../../components/Pages/Homes/Homes";
import AllFoods from "../../components/Pages/AllFoods/AllFoods";
import FoodDetails from "../../components/Pages/Fooddetails/FoodDetails";
import UpdateReview from "../../components/Pages/UpdateReview/UpdateReview";
import AllReviews from "../../components/Pages/AllReviews/AllReviews";
const router =  createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader:() =>fetch('http://localhost:5000/limitFoods'),
                element:<Homes></Homes>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/addFoods',
                element:<PrivateRoutes><AddFoods></AddFoods></PrivateRoutes>
            },
            {
                path:'/reviews',
                element:<PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path:'/allFoods',
                loader:() =>fetch('http://localhost:5000/foods'),
                element:<PrivateRoutes><AllFoods></AllFoods></PrivateRoutes>
            },
            {
                path:'/food/:id',
                loader: ({params}) =>  fetch(`http://localhost:5000/foods/${params.id}`),
                element:<PrivateRoutes><FoodDetails></FoodDetails></PrivateRoutes>
            },
            {
                path:'/reviews/:id',
                loader: ({params}) =>  fetch(`http://localhost:5000/reviews/${params.id}`),
                element:<PrivateRoutes><UpdateReview></UpdateReview></PrivateRoutes>
            },
            {
                path:'/allReviews',
                loader: () =>  fetch('http://localhost:5000/reviews'),
                element:<PrivateRoutes><AllReviews></AllReviews></PrivateRoutes>
            }
        ]
    }
])

export default router;