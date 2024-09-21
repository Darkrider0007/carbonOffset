import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OffsetNow from "./pages/OffsetNow";
import CarbonCalculator from "./pages/CarbonCalculator";
import OurProjects from "./pages/OurProjects";
import UserDashboard from "./pages/UserDashboard";
import UserTransactions from "./pages/UserTransactions";
import UserOffsetDetails from "./pages/UserOffsetDetails";
import Gallery from "./pages/Gallery";
import OurServices from "./pages/OurServices";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAllTransaction from "./pages/AdminAllTransaction";
import AdminFarmOnboarding from "./pages/AdminFarmOnboarding";
import AdminProjectDetails from "./pages/AdminProjectDetails";
import Success from "./pages/Success";
import FailurePage from "./pages/Failour";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import VerifyEmail from "./pages/VerifyEmail";
import UserContextProvider from "./context/UserContextProvider";
import { Toaster } from "./components/ui/toaster";
import ForgetPassword from "./pages/ForgetPassword";
import AdminLogin from "./pages/AdminLogin";
import Token from "./pages/Token";
import FarmOnboarding from "./pages/FarmOnboarding";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/offsetNow",
    element: <OffsetNow />,
  },
  {
    path: "/calculator",
    element: <CarbonCalculator />,
  },
  {
    path: "/services",
    element: <OurServices />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <OurProjects />,
  },
  {
    path: "/userDashboard",
    element: (

      <UserDashboard />
    ),
  },
  {
    path: "/userTransactions",
    element: (

      <UserTransactions />

    ),
  },
  {
    path: "/userOffsetDetails",
    element: (

      <UserOffsetDetails />

    ),
  },
  {
    path: "/allTransactions",
    element: (

      <AdminAllTransaction />

    ),
  },
  {
    path: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/adminDashboard`,
    element: (
      <PrivateRoute>
        <AdminDashboard />
      </PrivateRoute>
    ),
  },
  {
    path: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/farmOnboarding`,
    element: (
      <PrivateRoute>
        <AdminFarmOnboarding />
      </PrivateRoute>
    ),
  },
  {
    path: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/adminProjectDetails`,
    element: (
      <PrivateRoute>
        <AdminProjectDetails />
      </PrivateRoute>
    ),
  },
  {
    path: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/token`,
    element: (
      <PrivateRoute>
        <Token />
      </PrivateRoute>
    ),
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/failure",
    element: <FailurePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/farm-onboarding",
    element: (

      <FarmOnboarding />

    ),
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/verify-email/:id",
    element: <VerifyEmail />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: `admin/${import.meta.env.VITE_ADMIN_ROUTE}`,
    element: <AdminLogin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
      <Toaster />
    </UserContextProvider>
  </React.StrictMode>
);
