import React, { useContext, useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";
import { verifyAdmin } from "../api/auth/verifyAdmin";

interface PrivateRouteProps
{
    children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) =>
{
    const context = useContext(UserContext);

    // Ensure context is defined before accessing properties
    if (!context)
    {
        throw new Error('UserProfile must be used within a UserContextProvider');
    }

    const { user } = context;
    const [isVerifiedByToken, setIsVerifiedByToken] = useState(false);
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    useEffect(() =>
    {
        const verifyAdminByToken = async () =>
        {
            try
            {
                const res = await verifyAdmin();
                if (res.status === 200)
                {
                    setIsVerifiedByToken(true);
                }
            } catch (error)
            {
                console.error("Failed to verify admin by token", error);
            } finally
            {
                setLoading(false);
            }
        };

        verifyAdminByToken();
    }, []);

    const isAuthenticated = user?.isAdmin || isVerifiedByToken;

    if (loading)
    {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated)
    {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};

export default PrivateRoute;
