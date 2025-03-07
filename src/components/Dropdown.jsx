import { useState } from "react";
import '../styles/Dropdown.scss';
import Vector from '../assets/Vector.png'
import ReverseVector from '../assets/Reverse-Vector.png'


function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`dropdown ${isOpen ? "dropdown--open" : ""}`}>
            <div className="dropdown__header">
                <h1 className="dropdown__title">{title}</h1>
                <span className="dropdown__arrow" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <img src={ReverseVector} /> : <img src={Vector} />}</span>
            </div>
            {isOpen && <p className="dropdown__content">{content}</p>}
        </div>
    )
}

export default Dropdown