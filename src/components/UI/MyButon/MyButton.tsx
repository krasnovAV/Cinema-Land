import React, {ButtonHTMLAttributes, FC} from 'react';
import "./MyButton.scss"

interface MyButtonProps {
    children: React.ReactNode
}

export const MyButton: FC<MyButtonProps> = ({children, ...props}) => {
    return (
        <button className="myButton" {...props}>
            {children}
        </button>
    );
};

