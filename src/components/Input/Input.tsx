import classNames from "classnames";
//import { useState } from "react";
import "./Input.scss"

export type InputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'
> & {
    /** Значение поля */
    value: string;
    placeholder?: string;
    /** Callback, вызываемый при вводе данных в поле */
    onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({ value, onChange, className, disabled, placeholder = "text", ...props }) => {
    // let setValue: React.Dispatch<React.SetStateAction<string>>;
    //[value, setValue] = useState('');

    return (
        <input
            {...props}
            type="text"
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            className={classNames(className, "input", { input_disabled: disabled })}
            onChange={e => {
                onChange(e.target.value);
                //setValue(e.target.value);
            }}
        >
        </input>
    );
};

export default Input;