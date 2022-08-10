import React, {ButtonHTMLAttributes, FC, InputHTMLAttributes} from 'react';
import "./MyCheckBox.scss"

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string
    id:string
}

export const MyCheckBox:FC<IProps> = ({label,  id, ...props}) => {
    return (
        <>
            <input type="checkbox" className="custom-checkbox" id={id} {...props}/>
                <label htmlFor={id}>{label}</label>
        </>
    );
};

