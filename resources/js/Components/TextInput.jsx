import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const TextInput = forwardRef(
    (
        {
            type = 'text',
            name,
            className = '',
            value,
            defaultValue,
            variant = 'primary',
            autoComplete,
            required,
            isFocused = false,
            placeholder,
            handleChange,
            isError,
            ...props
        },
        ref
    ) => {
        const inputRef = ref || useRef();

        useEffect(() => {
            if (isFocused) {
                inputRef.current.focus();
            }
        }, [isFocused]);

        return (
            <input
                {...props}
                type={type}
                name={name}
                value={value}
                defaultValue={defaultValue}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                    isError ? 'input-error' : ''
                } input-${variant} ${className}`}
                placeholder={placeholder}
                ref={inputRef}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        );
    }
);

TextInput.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password', 'file']),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'error', 'primary-outline']),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool
};

export default TextInput;
