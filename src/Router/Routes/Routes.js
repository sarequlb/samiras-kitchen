import { createBrowserRouter } from "react-router-dom";
import Homes from "../../components/Pages/Homes/Homes";
import Main from "../../Layout/Main/Main";
import SignIn from "../../components/Pages/SignIn/SignIn";
import SignUp from "../../components/Pages/SignUp/SignUp";

const router =  createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Homes></Homes>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            }
        ]
    }
])

export default router;