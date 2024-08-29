
import windowImage from '../assets/login/Login.png'; // Replace with actual paths to your images
import { FaGoogle, FaApple, FaEnvelope, FaLock } from 'react-icons/fa';
import Logo from '../assets/home/logo.png';

function Login() {
    return (
        <div className='min-h-screen w-full bg-[#F1F5F9] flex justify-between items-center'>
            <div className='flex  w-full'>
                {/* Left side images */}
                <div className='hidden md:flex w-1/2 bg-cover bg-center'>
                    <img src={windowImage} alt="Nature" className='object-cover h-[640px] w-[680px]' />
                </div>
                {/* Right side form */}
                <div className='w-1/3 md:w-1/2 p-8'>
                    <div className='flex flex-row justify-between'>
                        <div className='text-left'>
                            <h1 className='text-2xl font-semibold'>Hello, <span className="text-green-600">Mikołaj!</span></h1>
                            <p className='text-gray-500 mt-2'>Log in to 1worldnation to start creating magic.</p>
                        </div>
                        <img src={Logo} alt="Nature" className='object-cover h-30 w-30' />
                    </div>

                    {/* Social login buttons */}
                    <div className='mt-6 flex flex-row gap-2'>
                        <button className='flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md px-10 py-2 text-gray-600 mb-3'>
                            <FaGoogle className='mr-2' /> Sign in with Google
                        </button>
                        <button className='flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md px-10 py-2 text-gray-600 mb-3'>
                            <FaApple className='mr-2' /> Sign in with Apple
                        </button>

                    </div>

                    <div className='flex items-center justify-start mt-4'>
                        <div className='border-t w-1/5 border-gray-300'></div>
                        <span className='text-xs text-gray-500 mx-3'>or continue with e-mail</span>
                        <div className='border-t w-1/5 border-gray-300'></div>
                    </div>

                    {/* Login form */}
                    <form className='mt-6 w-2/3'>
                        <div className='flex flex-col mb-4'>
                            <label className='text-sm mb-1'>Email</label>
                            <div className='relative'>
                                <FaEnvelope className='absolute left-3 top-3 text-gray-400' />
                                <input
                                    type='email'
                                    placeholder='mikolaj.niznik@gmail.com'
                                    className='pl-10 p-3 border border-gray-300 rounded-md w-full focus:outline-none'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-sm mb-1'>Password</label>
                            <div className='relative'>
                                <FaLock className='absolute left-3 top-3 text-gray-400' />
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='pl-10 p-3 border border-gray-300 rounded-md w-full focus:outline-none'
                                />
                            </div>
                        </div>

                        <div className='flex justify-between items-center mb-4'>
                            <div className='flex items-center'>
                                <input type='checkbox' id='rememberMe' className='mr-2' />
                                <label htmlFor='rememberMe' className='text-sm'>Remember me</label>
                            </div>
                            <a href='#' className='text-sm text-blue-600'>Forgot Password?</a>
                        </div>

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                // Add your login logic here
                            }}
                            className='bg-green-600 text-white p-3 rounded-md w-full'>Log in</button>
                    </form>

                    <div className='text-center mt-6'>
                        <p className='text-sm text-gray-500'>Don’t have an account? <a href='#' className='text-green-600'>Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
