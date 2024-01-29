import React, { useState } from 'react'
import "./slider.css";
// import FirstBook from './images/book1.png';
import FirstBook from '../../images/book1.png';
// import SecondBook from './images/book2.png';
import SecondBook from '../../images/book2.png';
// import ThirdBook from './images/book3.png';
import ThirdBook from '../../images/book3.png';

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
            // if (slideIndex <= 0) {setSlideIndex(2)}
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
            // if (slideIndex >= 2) {setSlideIndex(0)}
        }
    }

  return (
    <div className='slider-container'>
        <i onClick={()=> handleClick("left")} className="bi bi-chevron-double-left arrow-left"></i>
        <div style={{transform: `translateX(${slideIndex * -100}vw)`}} className="slider-wrapper">
            <div className="slider first-slider">
                <div className="slider-img-wrapper">
                    <img src={FirstBook} alt="" />
                </div>
                <div className="slider-info-wrapper">
                    <h1 className="slider-info-title">Book Stoer</h1>
                    <p className="slider-info-desc">
                        It's not just reading. it's living the adventure.
                    </p>
                </div>
            </div>
            <div className="slider second-slider">
                <div className="slider-img-wrapper">
                    <img src={SecondBook} alt="" />
                </div>
                <div className="slider-info-wrapper">
                    <h1 className="slider-info-title">The Books For Everyone</h1>
                    <p className="slider-info-desc">
                        You can read at home or at the bookstore.
                    </p>
                </div>
            </div>
            <div className="slider third-slider">
                <div className="slider-img-wrapper">
                    <img src={ThirdBook} alt="" />
                </div>
                <div className="slider-info-wrapper">
                    <h1 className="slider-info-title">Check Out The New Titles</h1>
                    <p className="slider-info-desc">
                        We send you the book you want at home.
                    </p>
                </div>
            </div>
        </div>
        <i onClick={()=> handleClick("right")} className="bi bi-chevron-double-right arrow-right"></i>
    </div>
  )
}
