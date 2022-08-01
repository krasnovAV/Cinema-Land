import React, {FC} from 'react';
import "./Modal.scss"

interface IModalProps {
    active: boolean;
    setActive: (active: boolean) => void;
    children: React.ReactNode;
    handleSubmit: () => void;
}

export const Modal: FC<IModalProps> = ({active, setActive, handleSubmit, children}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>


        </div>
    );
};

