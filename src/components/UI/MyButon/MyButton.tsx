import React, {ButtonHTMLAttributes, FC} from 'react';
import "./MyButton.scss"

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export const MyButton: FC<MyButtonProps> = ({children, ...props}) => {
    return (
        <button className="myButton" {...props}>
            {children}
        </button>
    );
};

