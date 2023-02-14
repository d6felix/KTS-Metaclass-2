import classNames from "classnames";
import WithLoader from "../WithLoader";
import "./Button.scss"

export enum ButtonColor {
    primary = 'primary',
    secondary = 'secondary'
}

export type ButtonProps = React.PropsWithChildren<{
    loading?: boolean;
    color?: ButtonColor;
}> & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
    children,
    loading = false,
    color = ButtonColor.primary,
    className,
    disabled = false,
    ...props }) => {

    return (
        <button
            {...props}
            disabled={loading || disabled}
            className={classNames(className, { button_disabled: disabled || loading }, { button_loading: loading }, `button_color-${color}`)}
        >
            <WithLoader loading={loading} >
                {children}
            </WithLoader>
        </button>
    )
};

export default Button;