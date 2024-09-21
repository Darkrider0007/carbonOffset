import React from "react";

interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  isAdmin?: boolean;
  // Add more fields as needed
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = React.createContext<UserContextType | undefined>(undefined);

export default UserContext;
