
import windowImage from '../assets/Signup/Signup.png'; // Replace with actual paths to your images
import { FaGoogle, FaApple } from 'react-icons/fa';
import Logo from '../assets/home/logo.png';

function SignUp() {
    return (
        <div className='min-h-screen w-full bg-[#F1F5F9] flex items-center justify-center'>
            <div className='flex w-full  '>
                {/* Left side - Logo and Form */}
                <div className='w-1/2 p-8'>
                    <img src={Logo} alt="Logo" className='object-cover h-40 w-40 mb-8' />
                    <div className='flex w-full items-center justify-center'>
                        <h1 className='text-4xl font-bold mb-6'>Join Us Today</h1>
                    </div>

                    {/* Social login buttons */}
                    <div className='flex gap-4 mb-8 items-center justify-center'>
                        <button className='flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md px-6 py-3 text-gray-600'>
                            <FaGoogle className='mr-2' /> Sign In with Google
                        </button>
                        <button className='flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md px-6 py-3 text-gray-600'>
                            <FaApple className='mr-2' /> Sign In with Apple
                        </button>
                    </div>

                    {/* Sign Up form */}
                    <form className='grid grid-cols-2 gap-4 mb-6'>
                        <input
                            type='text'
                            placeholder='First name'
                            className='col-span-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none'
                        />
                        <input
                            type='text'
                            placeholder='Last name'
                            className='col-span-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none'
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            className='col-span-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none'
                        />
                        <input
                            type='password'
                            placeholder='Repeat password'
                            className='col-span-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none'
                        />
                    </form>

                    <div className='flex items-center mb-6'>
                        <input type='checkbox' id='terms' className='mr-2' />
                        <label htmlFor='terms' className='text-sm'>
                            I agree with <a href='#' className='text-blue-600'>Terms and conditions</a>
                        </label>
                    </div>

                    <button className='bg-green-600 text-white p-3 rounded-md w-full'>
                        Create free account
                    </button>
                </div>

                {/* Right side - Images */}
                <div className='w-1/2 flex justify-end items-center'>
                    <img src={windowImage} alt="Nature" className='object-cover h-[640px] w-[680px] ' />
                </div>
            </div>
        </div>
    );
}

export default SignUp;
