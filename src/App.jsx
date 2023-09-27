import { Suspense, lazy } from "react";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";

// import AppLayout from "./ui/header/AppLayout";
const AppLayout = lazy(() => import("./ui/header/AppLayout"))
const Error = lazy(() => import("./ui/Error"))
const IndexPage = lazy(() => import("./pages/IndexPage"))
const  RentPage = lazy(() => import("./pages/RentPage"))
const  RentDetails = lazy(() => import("./pages/RentDetails"))
const  LoginPage = lazy(() => import("./pages/LoginPage"))
const  SignUp= lazy(() => import("./features/Authtentication/SignUp"))
const  MyProperties= lazy(() => import("./pages/MyProperties"))
const  BookmarkedPage= lazy(() => import("./pages/BookmarkedPage"))
const  MessagePage= lazy(() => import("./pages/MessagePage"))
const  MessageContent= lazy(() => import("./features/messages/MessageContent"))
// import Error from "./ui/Error"
// import IndexPage from "./pages/IndexPage"
// import RentPage from "./pages/RentPage"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import RentDetails from "./pages/RentDetails";
// import LoginPage from "./pages/LoginPage";
// import SignUp from "./features/Authtentication/SignUp"
import ProtectedRoute from "./ui/ProtectedRoute";
import Spinner from "./ui/Spinner";
// import MyProperties from "./pages/MyProperties";
// import BookmarkedPage from "./pages/BookmarkedPage";
// import MessagePage from "./pages/MessagePage";
// import MessageContent from "./features/messages/MessageContent";



const router = createBrowserRouter([
  
  {
    element:<ProtectedRoute>  <Suspense fallback={<Spinner/>}><AppLayout/></Suspense>   </ProtectedRoute>,
    errorElement: <Error />,

    children:[
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
      {
        path:"/myProperties",
        element: <MyProperties/>
      },
      {
        path:"/bookmarks",
        element: <BookmarkedPage/>
      },
      {
        path:"/messages",
        element: <MessagePage/>
      },
      {
        path:"/messages/content/:senderID",
        element: <MessageContent/>
      },
    ]

  },

  {
    path:"/",
    element:<SignUp/>,
    index: true,
    
  },

  {
    path:"/signUp/login",
    element:<LoginPage/>,
    
  },



] )

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

    <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#c7d2fe",
              color: "#1e1b4b",
            },
          }}
        />
 </QueryClientProvider>
 

);
  
}

export default App;
