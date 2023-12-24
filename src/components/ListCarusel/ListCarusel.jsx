import React, {useState} from 'react';
import CaruselItem from "../UI/caruselItem/CaruselItem";
import './ListCarusel.css'

const ListCarusel = ({items}) => {
    const [currentIndex, setCurrentIndex] = useState(2);

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="list-carousel">
            <div className="carousel-wrapper">

                <div className="carousel-container">
                    <div className="carousel-items">
                        {items.map((item, index) => {
                            const distance = Math.abs(index - currentIndex);
                            const isVisible = distance <= 4; // Змінено умову видимості
                            return (
                                <div
                                    key={index}
                                    className={`carousel-item ${isVisible ? 'active' : ''}`}
                                    style={{transform: `translateX(-${currentIndex * 50.33}%)`}}
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <button className="arrow left" onClick={prevItem}>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22.5" cy="22.5" r="22.5" transform="matrix(1 1.74846e-07 1.74846e-07 -1 0 45)"
                                fill="#DFB3FA"/>
                        <path
                            d="M27.0587 28.4414L21.6915 23.0625L27.0587 17.6836L25.4064 16.0313L18.3751 23.0625L25.4064 30.0938L27.0587 28.4414Z"
                            fill="#2C2C2C"/>
                    </svg>

                </button>
                <button className="arrow right" onClick={nextItem}>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22.5" cy="22.5" r="22.5" transform="matrix(-1 0 0 1 45 0)" fill="#DFB3FA"/>
                        <g clip-path="url(#clip0_10_925)">
                            <path
                                d="M17.9414 16.5586L23.3086 21.9375L17.9414 27.3164L19.5937 28.9688L26.625 21.9375L19.5937 14.9062L17.9414 16.5586Z"
                                fill="#2C2C2C"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_10_925">
                                <rect width="28.125" height="28.125" fill="white"
                                      transform="matrix(0 1 1 0 7.875 7.875)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ListCarusel;