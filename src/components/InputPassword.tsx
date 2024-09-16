import { Eye, EyeOff } from 'lucide-react';
import { forwardRef, useState } from 'react';

interface InputFieldProps {
    id: string;
    label: string;
    placeholder: string;
    error?: string;
    inputStyle?: string;
}

const InputPassword = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ id, label, inputStyle, placeholder, error, ...rest }, ref) => {
        const [clicked, setClicked] = useState(false);
        return (
            <div className="mb-4">
                <label htmlFor={id} className="block mb-1 text-sm font-medium">
                    {label}
                </label>
                <div className={`border bg-white border-gray-300 rounded-md w-full flex flex-row items-center focus:outline-none ${error ? 'border-red-500' : ''} ${inputStyle}`}>
                    <input
                        id={id}
                        type={clicked ? 'text' : 'password'}
                        placeholder={placeholder}
                        ref={ref}
                        className='py-3 w-full focus:ring-0 focus:outline-none' // Set pl-0 to remove left padding
                        {...rest}
                    />
                    <div className='px-2'>
                        {clicked ? (
                            <Eye className="text-gray-500" onClick={() => setClicked(!clicked)} />
                        ) : (
                            <EyeOff className="text-gray-500" onClick={() => setClicked(!clicked)} />
                        )}
                    </div>
                </div>


                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
        );
    }
);

InputPassword.displayName = 'InputPassword';

export default InputPassword;


