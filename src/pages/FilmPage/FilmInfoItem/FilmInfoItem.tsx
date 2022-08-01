import React, {FC} from 'react';
import "./FilmInfoItem.scss"

type propsType = {
    title: string,
    children: React.ReactNode
}

export const FilmInfoItem: FC<propsType> = ({title, children}) => {
    return (
        <h3 className="filmInfoItem">
            <div className="filmInfoItem__title"><span>{title}</span></div>
            <div className="filmInfoItem__body">
                {children}
            </div>
        </h3>
    )
}

