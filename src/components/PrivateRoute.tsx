import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";


interface PrivateRouteProps {
    children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const context = useContext(UserContext);

    // Ensure context is defined before accessing properties
    if (!context) {
        throw new Error('UserProfile must be used within a UserContextProvider');
    }

    const { user } = context;

    const isAuthenticated = user?.isAdmin;
    const location = useLocation();

    if (!isAuthenticated) {
        // Redirect the user to the login page if they are not authenticated
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};

export default PrivateRoute;
