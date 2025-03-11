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
            <div className="dropdown__content">
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((item, index) => (
                            <li className="dropdown__content--list" key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    )
}

export default Dropdown