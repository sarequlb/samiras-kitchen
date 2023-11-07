import { createBrowserRouter } from "react-router-dom";
import Homes from "../../components/Pages/Homes/Homes";
import Main from "../../Layout/Main/Main";

const router =  createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Homes></Homes>
            }
        ]
    }
])

export default router;