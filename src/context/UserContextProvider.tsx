import React, { useState, ReactNode } from 'react';
import UserContext from './UserContext';

interface UserContextProviderProps {
    children: ReactNode;
}

interface User {
    id?: string;
    name?: string;
    email: string;
    isAdmin?: boolean;
    // Add more fields as needed
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | any>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
