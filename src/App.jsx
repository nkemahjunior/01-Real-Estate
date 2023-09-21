import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./ui/header/AppLayout";
import Error from "./ui/Error"
import IndexPage from "./pages/IndexPage"
import RentPage from "./pages/RentPage"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RentDetails from "./pages/RentDetails";
import LoginPage from "./pages/LoginPage";
import SignUp from "./features/Authtentication/SignUp"
import ProtectedRoute from "./ui/ProtectedRoute";

const router = createBrowserRouter([
  {
    element:<ProtectedRoute><AppLayout/></ProtectedRoute>,
    errorElement: <Error />,

    children:[
      {
        index:<Navigate to = "signUp"/>
        
      },

      {
        path:"/home",
        element:<IndexPage/>,
        
      },
      {
        path: '/home/rent',
        element: <RentPage/>
      },
      {
        path: '/home/rent/details/:propertyID',
        element: <RentDetails/>
      },
    ]

  },
  {
    path:"signUp",
    element:<SignUp/>,
    
  },
  {
    path:"/signUp/login",
    element:<LoginPage/>,
    
  },



])

const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      staleTime:60*1000
    },
  }
});

function App() {

return(
 <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen ={false}/>
    <RouterProvider router ={router}/>
 </QueryClientProvider>
 

);
  
}

export default App;
