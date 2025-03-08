import { useState } from "react";
import '../styles/Dropdown.scss';
import Vector from '../assets/Vector.png'


function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`dropdown ${isOpen ? "dropdown--open" : ""}`}>
            <div className="dropdown__header">
                <h1 className="dropdown__title">{title}</h1>
                <img src={Vector} className="dropdown__arrow" onClick={() => setIsOpen(!isOpen)} />
            </div>
            <p className="dropdown__content">{content}</p>
        </div>
    )
}

export default Dropdown