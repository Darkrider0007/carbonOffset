import { Loader2 } from 'lucide-react';
import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { adminLogin } from '../api/auth/loginAndLogout';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

type LoginFormInputs = {
    email: string;
    password: string;
};

const AdminLogin: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

    const context = useContext(UserContext);

    // Ensure context is defined before accessing properties
    if (!context) {
        throw new Error('UserProfile must be used within a UserContextProvider');
    }

    const { setUser } = context;

    const navigate = useNavigate();

    // Function to handle form submission
    const onSubmit: SubmitHandler<LoginFormInputs> = async data => {
        setLoading(true);
        try {
            const res = await adminLogin(data);
            if (res.status === 200) {
                setUser(
                    {
                        email: data.email,
                        isAdmin: true
                    }
                )
                navigate(`/admin/${import.meta.env.VITE_ADMIN_ROUTE}/adminDashboard`)
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">Admin Login</h2>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                            placeholder="admin@example.com"
                            {...register('email', {
                                required: 'Email is required', pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Please enter a valid email address'
                                }
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                            placeholder="********"
                            {...register('password', {
                                required: 'Password is required', minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters'
                                }
                            })}
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        {
                            loading ?
                                <div className='flex flex-row w-full items-center justify-center'>
                                    <Loader2 className="animate-spin mr-2" /> Logged in ...
                                </div>
                                : 'Log in'
                        }
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
