import React, { useState } from 'react';
import "./DevelopmentModal.css";

import dead from "../../assets/img/deadline.gif";

const DevelopmentModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="development-container">
            <div className="development-info">
                <h2>Portfolio en Desarrollo</h2>
                <h3><strong>Esta página aún se encuentra en desarrollo. </strong> </h3>
                <p> Puedes volver más tarde o navegar por ella, pero ten en cuenta que sigue en construcción.</p>
                <p>¡Gracias por tu comprensión!</p>
                <img src={dead} alt="" />
                <button
                    onClick={closeModal}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default DevelopmentModal;