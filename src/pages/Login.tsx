import { useForm, SubmitHandler } from 'react-hook-form';
import windowImage from '../assets/login/Login.png'; // Replace with actual paths to your images
// import { FaGoogle, FaApple } from 'react-icons/fa';
import Logo from '../assets/login/logo.png';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import { login } from '../api/auth/loginAndLogout';
import { useContext, useState } from 'react';
import { RiLoader2Fill } from 'react-icons/ri';
import UserContext from '../context/UserContext';

interface LoginFormInputs {
    email: string;
    password: string;
    rememberMe: boolean;
}

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
    const navigate = useNavigate();
    const [submit, setSubmit] = useState(false);

    const context = useContext(UserContext);

    // Ensure context is defined before accessing properties
    if (!context) {
        throw new Error('UserProfile must be used within a UserContextProvider');
    }

    const { setUser } = context;

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        console.log(data);
        setSubmit(true);
        try {
            const dataForSend = {
                email: data.email,
                password: data.password
            }
            const response = await login(dataForSend);

            if (response.status === 201) {
                setUser({
                    id: response.data._id,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                })
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setSubmit(false);
        }
    };

    return (
        <div className='min-h-screen w-full bg-[#F1F5F9] flex justify-between items-center'>
            <div className='flex  w-full'>
                {/* Left side images */}
                <div className='hidden md:flex w-1/2 bg-cover bg-center items-center'>
                    <img src={windowImage} alt="Nature" className='object-cover h-[640px] w-[680px]' />
                </div>
                {/* Right side form */}
                <div className='w-full md:w-1/2 p-8 px-32 justify-center'>
                    <div onClick={() => navigate("/")}>
                        <img src={Logo} alt="Nature" className='absolute right-9 object-cover h-36 w-36' />
                    </div>

                    <div className='my-10 gap-5 flex flex-col justify-center items-center'>
                        <div className='w-full text-left flex flex-col justify-start'>
                            <h1 className='text-4xl font-semibold'>Hello, <span className="text-green-600">Mikołaj!</span></h1>
                            <p className='text-gray-500 mt-2 text-xl '>Log in to 1worldnation to start creating magic.</p>
                        </div>

                        {/* Social login buttons */}
                        {/* <div className='mt-6 w-full flex flex-row gap-2'>
                            <button className='flex items-center justify-center bg-black border border-gray-300 rounded-md px-10 py-2 text-white mb-3'>
                                <FaGoogle className='mr-2' /> Sign in with Google
                            </button>
                            <button className='flex items-center justify-center bg-black border border-gray-300 rounded-md px-10 py-2 text-white mb-3'>
                                <FaApple className='mr-2' /> Sign in with Apple
                            </button>
                        </div>

                        <div className='flex items-center w-full flex-row justify-center mt-4'>
                            <div className='border-t w-1/3 border-gray-300'></div>
                            <span className='text-xs text-gray-500 mx-3'>or continue with e-mail</span>
                            <div className='border-t w-1/3 border-gray-300'></div>
                        </div> */}

                        {/* Login form */}
                        <div className='flex w-full'>
                            <form onSubmit={handleSubmit(onSubmit)} className='mt-6 w-full'>
                                <InputField
                                    id="email"
                                    label="Email"
                                    type="email"
                                    placeholder="mikolaj.niznik@gmail.com"
                                    error={errors.email?.message}
                                    {...register('email', { required: 'Email is required' })}
                                    inputStyle="pl-10"
                                />
                                <InputField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    placeholder="Password"
                                    error={errors.password?.message}
                                    {...register('password', { required: 'Password is required' })}
                                    inputStyle="pl-10"
                                />
                                <div className='flex justify-between items-center mb-4'>
                                    <div className='flex items-center'>
                                        <input
                                            type='checkbox'
                                            id='rememberMe'
                                            {...register('rememberMe')}
                                            className='mr-2'
                                        />
                                        <label htmlFor='rememberMe' className='text-sm'>Remember me</label>
                                    </div>
                                    <a href='#' className='text-sm text-blue-600'>Forgot Password?</a>
                                </div>

                                <button type="submit" className='bg-green-600 text-white p-3 rounded-md w-full mt-10'>
                                    {
                                        submit ?
                                            <div className='flex flex-row w-full items-center justify-center'>
                                                <RiLoader2Fill className="animate-spin mr-2" /> Logged in ...
                                            </div>
                                            : 'Log in'
                                    }
                                </button>
                            </form>
                        </div>

                        <div className='text-center mt-6 flex flex-row'>
                            <p className='text-sm text-gray-500'>
                                Don’t have an account?{" "}
                                <span onClick={() => navigate("/signup")} className='text-green-600 cursor-pointer'>
                                    Sign Up
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
