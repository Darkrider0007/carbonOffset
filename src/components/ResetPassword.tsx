import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputField from './InputField';
import { RiLoader2Fill } from 'react-icons/ri';
import { Button } from './ui/button';
import InputPassword from './InputPassword';

interface FormData {
    otp: string;
    password: string;
    conformPassword: string;
}

interface ResetPasswordFormProps {
    submit: boolean;
    onSubmit: SubmitHandler<FormData>;
}

const ResetPassword: React.FC<ResetPasswordFormProps> = ({ submit, onSubmit }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();

    return (
        <div className="my-10 gap-5 flex flex-col pt-20 items-center min-h-screen">
            <div className="w-full text-left flex flex-col justify-start items-center">
                <h1 className="text-3xl md:text-4xl font-semibold">Reset Password</h1>
                <p className="text-gray-500 mt-2 text-lg md:text-xl w-full md:w-1/2">
                    Please enter the OTP, your new password, and confirm the password.
                </p>
            </div>

            {/* Reset Password form */}
            <div className="flex w-full md:w-1/2 ">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-6 w-full flex flex-col "
                >
                    {/* OTP Input Field */}
                    <InputField
                        id="otp"
                        label="OTP"
                        type="text"
                        placeholder="Enter the OTP"
                        error={errors.otp?.message}
                        {...register('otp', { required: 'OTP is required' })}
                        inputStyle="pl-3 w-full "
                    />

                    {/* New Password Input Field */}
                    <InputPassword
                        id="password"
                        label="New Password"
                        placeholder="Enter your new password"
                        error={errors.password?.message}
                        {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' } })}
                        inputStyle="pl-3 w-full "
                    />

                    {/* Confirm Password Input Field */}
                    <InputPassword
                        id="conformPassword"
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        error={errors.conformPassword?.message}
                        {...register('conformPassword', {
                            required: 'Please confirm your password',
                            validate: (value) =>
                                value === watch('password') || 'Passwords do not match'
                        })}
                        inputStyle="pl-3 w-full "
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-md mt-5 w-1/3"
                    >
                        {submit ? (
                            <div className="flex flex-row w-full items-center justify-center">
                                <RiLoader2Fill className="animate-spin mr-2" /> Submitting...
                            </div>
                        ) : (
                            'Submit'
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
