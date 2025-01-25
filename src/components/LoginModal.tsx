import React, { useContext } from "react";
import { toast } from "../hooks/use-toast";
import UserContext from "../context/UserContext";
import { login } from "../api/auth/loginAndLogout";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [loginData, setLoginData] = React.useState({ email: "", password: "" });
  const [loader, setLoader] = React.useState(false);

  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserProfile must be used within a UserContextProvider");
  }

  const { setUser } = context;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoader(true);

    try {
      const dataForSend = {
        email: loginData.email,
        password: loginData.password,
      };
      const response = await login(dataForSend);

      if (response?.status === 201) {
        const { _id, firstName, lastName, email } = response.data;

        setUser({
          id: _id,
          firstName,
          lastName,
          email,
        });

        toast({
          title: "Logged in successfully",
          description: "Welcome back!",
          duration: 5000,
        });

        setLoginData({ email: "", password: "" });
        onClose(); // Close the modal after a successful login
      } else {
        throw new Error("Login failed. Please check your credentials.");
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.";
      toast({
        title: "Login Error",
        description: errorMessage,
        duration: 5000,
        variant: "destructive",
      });
      console.error("Login error:", error);
    } finally {
      setLoader(false);
    }
  };

  if (!isOpen) return null; // Avoid rendering unnecessary DOM elements when modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-lg font-bold text-gray-700 mb-4">Login</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Email ID</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={handleSubmit}
            disabled={loader}
            className={`${loader ? "bg-green-300" : "bg-green-500 hover:bg-green-700"
              } text-white font-bold py-2 px-4 rounded-lg`}
          >
            {loader ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-6 h-6 animate-spin" />
                <p>Logging in...</p>
              </div>
            ) : (
              "Login"
            )}
          </button>
          <button
            onClick={onClose}
            disabled={loader}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-lg"
          >
            Cancel
          </button>
        </div>
        <div className="flex flex-col justify-center items-center mt-4 text-gray-700 font-medium">
          Don't have an account?
          <Link to="/signup" className="mt-4 text-green-500">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
