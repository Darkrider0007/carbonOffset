import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputField from '../components/InputField';
import { RiLoader2Fill } from 'react-icons/ri';
import { Button } from './ui/button';

interface FormData {
    email: string;
}

interface ResetPasswordFormProps {
    submit: boolean;
    onSubmit: SubmitHandler<FormData>;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ submit, onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    return (
        <div className="my-10 gap-5 flex flex-col pt-20 items-center min-h-screen">
            <div className="w-full text-left flex flex-col justify-start items-center">
                <h1 className="text-3xl md:text-4xl font-semibold">Reset Password</h1>
                <p className="text-gray-500 mt-2 text-lg md:text-xl w-full md:w-1/2">
                    Enter your email to reset your password.
                </p>
            </div>

            {/* Reset Password form */}
            <div className="flex w-full md:w-1/2 ">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-6 w-full flex flex-col "
                >
                    <InputField
                        id="email"
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        error={errors.email?.message}
                        {...register('email', { required: 'Email is required' })}
                        inputStyle="pl-3 w-full "
                    />
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

export default ResetPasswordForm;
