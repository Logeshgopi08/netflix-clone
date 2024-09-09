import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Brower from "./Browser";

const Body = ()=>{
   const appRouter =createBrowserRouter([
    {
        path:'/',
        element :<Login/>
    },
    {
        path:'/browser',
        element :<Brower/>
    }
   ]) 

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
}

export default Body;