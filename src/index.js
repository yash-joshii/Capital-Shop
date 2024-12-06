import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Landpage from "./startsite/Landpage";
import Men from "./Men/Men";
import Women from "./Women/Women";
import BabyCollection from "./BabyCollection/BabyCollection";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import Signup from "./Login/Signup";

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element: <Landpage/>
//       },
//       {
//         path:'Men',
//         element:<Men/>
//       },

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Landpage />} />
        <Route path="Men" element={<Men />} />
        <Route path="Women" element={<Women />} />
        <Route path="Babycollection" element={<BabyCollection />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Cart" element={<Cart />} />
      </Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
