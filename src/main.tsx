import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About/About";
import OffsetNow from "./pages/OffsetNow";
import CarbonCalculator from "./pages/Calculator/CarbonCalculator";
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
import FarmOnboarding from "./pages/JoinUs/FarmOnboarding";
import PrivateRoute from "./components/PrivateRoute";
import AdminUsers from "./pages/AdminUsers";
import CalculationMethods from "./pages/CalculationMethods";
import PageNotFound from "./pages/PageNotFound";
import AdminAllTransactions from "./pages/AdminAllTransactions";
import AdminNewsletter from "./pages/AdminNewsletter";
import Project from "./pages/Project";
import ScrollToTop from "./components/ScrollToTop";
import Awards from "./pages/Awards";
import Uny from "./pages/Products/Uny";
import Bamboohut from "./pages/Products/Bamboohut";
import Divinehealer from "./pages/Products/Divinehealer";
import Cmrbitplast from "./pages/Products/Cmrbitplast";
import Books from "./pages/Products/Books";
import Sfuo from "./pages/About/Sfuo";
import AffiliateOrganization from "./pages/About/AffiliateOrganization";
import FutureCity from "./pages/About/FutureCity";
import Membership from "./pages/JoinUs/Membership";
import SubmitYourProposal from "./pages/JoinUs/SubmitYourProposal";
import IndividualCalculator from "./pages/Calculator/IndividualCalculator";
import BusinessCalculator from "./pages/Calculator/BusinessCalculator";
import { Provider } from "react-redux";
import store from "./store/store";
import MembershipForm from "./pages/JoinUs/MembershipForm";
import CollaborativeParticipationPlatform from "./pages/JoinUs/CollaborativeParticipationPlatform";
import VolunteerRegistrationForm from "./pages/JoinUs/VolunteerRegistrationForm";
import AdminVolunteerRegistration from "./pages/AdminVolunteerRegistration";
import AdminProposal from "./pages/AdminProposal";
import AdminMembership from "./pages/AdminMembership";
import AdminCollaborativePlatform from "./pages/AdmincollaborativePlatforms";
import AdminAllBusinessDetails from "./pages/AdminAllBusinessDetails";

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
    path: "/products/uny",
    element: (
      <>
        <ScrollToTop />
        <Uny />
      </>
    ),
  },
  {
    path: "/products/bamboohut",
    element: (
      <>
        <ScrollToTop />
        <Bamboohut />
      </>
    ),
  },
  {
    path: "/products/divinehealer",
    element: (
      <>
        <ScrollToTop />
        <Divinehealer />
      </>
    ),
  },
  {
    path: "/products/cmrbitplast",
    element: (
      <>
        <ScrollToTop />
        <Cmrbitplast />
      </>
    ),
  },
  {
    path: "/products/books",
    element: (
      <>
        <ScrollToTop />
        <Books />
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
    path: "/about/sfuo",
    element: (
      <>
        <ScrollToTop />
        <Sfuo />
      </>
    ),
  },
  {
    path: "/about/affiliateOrganization",
    element: (
      <>
        <ScrollToTop />
        <AffiliateOrganization />
      </>
    ),
  },
  {
    path: "/about/future-city",
    element: (
      <>
        <ScrollToTop />
        <FutureCity />
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
        <CarbonCalculator />
      </>
    ),
  },
  {
    path: "/calculator/individual",
    element: (
      <>
        <IndividualCalculator />
      </>
    ),
  },
  {
    path: "/calculator/business",
    element: (
      <>
        <BusinessCalculator />
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
    path: "/joinUs/membership",
    element: (
      <>
        <ScrollToTop />
        <Membership />
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
    path: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/adminAllBusinessDetails`,
    element: (
      <PrivateRoute>
        <AdminAllBusinessDetails />
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
    path: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/collaborativePlatform`,
    element: (
      <PrivateRoute>
        <AdminCollaborativePlatform />
      </PrivateRoute>
    ),
  },
  {
    path: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/membershipForm`,
    element: (
      <PrivateRoute>
        <AdminMembership />
      </PrivateRoute>
    ),
  },
  {
    path: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/proposal`,
    element: (
      <PrivateRoute>
        <AdminProposal />
      </PrivateRoute>
    ),
  },
  {
    path: `/admin/${import.meta.env.VITE_ADMIN_ROUTE}/volunteerRegistration`,
    element: (
      <PrivateRoute>
        <AdminVolunteerRegistration />
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
    path: "/joinUs/farmOnboardApplication",
    element: (
      <>
        <ScrollToTop />
        <FarmOnboarding />
      </>
    ),
  },
  {
    path: "/joinUs/submitYourProposal",
    element: (
      <>
        <ScrollToTop />
        <SubmitYourProposal />
      </>
    ),
  },
  {
    path: "/joinUs/memberShipForm",
    element: (
      <>
        <ScrollToTop />
        <MembershipForm />
      </>
    ),
  },
  {
    path: "/joinUs/collaborativeParticipationPlatform",
    element: (
      <>
        <ScrollToTop />
        <CollaborativeParticipationPlatform />
      </>
    ),
  },
  {
    path: "/joinUs/volunteerRegistrationForm",
    element: (
      <>
        <ScrollToTop />
        <VolunteerRegistrationForm />
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
    <Provider store={store}>
      <UserContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </UserContextProvider>
    </Provider>
  </React.StrictMode>
);
