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
import AdminUsers from "./pages/AdminUsers";
import CalculationMethods from "./pages/CalculationMethods";
import PageNotFound from "./pages/PageNotFound";
import AdminAllTransactions from "./pages/AdminAllTransactions";
import AdminNewsletter from "./pages/AdminNewsletter";
import Project from "./pages/Project";
import ScrollToTop from "./components/ScrollToTop";
import Awards from "./pages/Awards";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <ScrollToTop />
        <About />
      </>
    ),
  },
  {
    path: "/gallery",
    element: (
      <>
        <ScrollToTop />
        <Gallery />
      </>
    ),
  },
  {
    path: "/offsetNow",
    element: (
      <>
        <ScrollToTop />
        <OffsetNow />
      </>
    ),
  },
  {
    path: "/calculator",
    element: (
      <>
        <ScrollToTop />
        <CarbonCalculator />
      </>
    ),
  },
  {
    path: "/calculator/calculationMethods",
    element: (
      <>
        <ScrollToTop />
        <CalculationMethods />
      </>
    ),
  },
  {
    path: "/services",
    element: (
      <>
        <ScrollToTop />
        <OurServices />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <ScrollToTop />
        <Contact />
      </>
    ),
  },
  {
    path: "/awards",
    element: (
      <>
        <ScrollToTop />
        <Awards />
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
        <ScrollToTop />
        <OurProjects />
      </>
    ),
  },
  {
    path: "/projects/:id",
    element: (
      <>
        <ScrollToTop />
        <Project />
      </>
    ),
  },
  {
    path: "/userDashboard",
    element: (
      <>
        <ScrollToTop />
        <UserDashboard />
      </>
    ),
  },
  {
    path: "/userTransactions",
    element: (
      <>
        <ScrollToTop />
        <UserTransactions />
      </>
    ),
  },
  {
    path: "/userOffsetDetails",
    element: (
      <>
        <ScrollToTop />
        <UserOffsetDetails />
      </>
    ),
  },
  {
    path: "/allTransactions",
    element: (
      <>
        <ScrollToTop />
        <AdminAllTransaction />
      </>
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
    path: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/adminUsers`,
    element: (
      <PrivateRoute>
        <AdminUsers />
      </PrivateRoute>
    ),
  },
  {
    path: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/admin-newsletters`,
    element: (
      <PrivateRoute>
        <AdminNewsletter />
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
    path: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/adminAllTransactions`,
    element: (
      <PrivateRoute>
        <AdminAllTransactions />
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
      <>
        <ScrollToTop />
        <FarmOnboarding />
      </>
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
  {
    path: "*",
    element: <PageNotFound />,
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
