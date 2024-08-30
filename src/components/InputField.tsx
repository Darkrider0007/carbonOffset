import { forwardRef } from 'react';

interface InputFieldProps {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    error?: string;
    inputStyle?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ id, label, inputStyle, type, placeholder, error, ...rest }, ref) => {
        return (
            <div className="mb-4">
                <label htmlFor={id} className="block mb-1 text-sm font-medium">
                    {label}
                </label>
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    ref={ref}
                    className={`p-3 border border-gray-300 rounded-md w-full focus:outline-none ${error ? 'border-red-500' : ''
                        } ${inputStyle}`}
                    {...rest}
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
        );
    }
);

InputField.displayName = 'InputField';

export default InputField;
