import React, { useState } from 'react'
import './book-slider.css';
import BookSliderRating from './BookSliderRating';
import Modal from '../modal/Modal';

export default function BookSlider({data}) {

    const [slideIndex, setSlideIndex] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [bookData, setBookData] = useState(null);

    // Handle modal
    const handleModal = (book)=> {
        setOpenModal(true);
        setBookData(book);
        // console.log(book)
    }

    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex - 1 );
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 6);
            // if (slideIndex <= 0) {setSlideIndex(2)}
        } else {
            setSlideIndex( slideIndex + 1 );
            setSlideIndex(slideIndex <= data.length -2 ? slideIndex + 1 : 0);
            // if (slideIndex >= 2) {setSlideIndex(0)}
        }
    }

  return (
    <div className='book-slider-container'>
        {slideIndex > 0 && 
            <i onClick={()=> handleClick("left")} className="bi bi-chevron-left book-slider-arrow-left"></i>
        }
        <div style={{transform: `translateX(${slideIndex * -340}px)`}} className="book-slider-wrapper"> 
            {data.map(item => 
            <div key={item.id} className='book-slider-item'>
                <img src={`/books/${item.image}`} alt={item.title} className='book-slider-item-img' />
                <h2 className="book-slider-item-title">{item.title}</h2>
                <BookSliderRating rating={item.rating} reviews={item.reviews}/>
                {/* <div className="rating">
                    { item.rating >= 1 ? <i className="bi bi-star-fill"></i>
                        : item.rating >= 0.5 ? <i className="bi bi-star-half"></i>
                        : <i className="bi bi-star"></i>
                    }
                    { item.rating >= 2 ? <i className="bi bi-star-fill"></i>
                        : item.rating >= 1.5 ? <i className="bi bi-star-half"></i>
                        : <i className="bi bi-star"></i>
                    }
                    { item.rating >= 3 ? <i className="bi bi-star-fill"></i>
                        : item.rating >= 2.5 ? <i className="bi bi-star-half"></i>
                        : <i className="bi bi-star"></i>
                    }
                    { item.rating >= 4 ? <i className="bi bi-star-fill"></i>
                        : item.rating >= 3.5 ? <i className="bi bi-star-half"></i>
                        : <i className="bi bi-star"></i>
                    }
                    { item.rating >= 5 ? <i className="bi bi-star-fill"></i>
                        : item.rating >= 4.5 ? <i className="bi bi-star-half"></i>
                        : <i className="bi bi-star"></i>
                    }
                </div> */}
                <div className="book-slider-item-price">${item.price}</div>
                <div className="book-slider-icons-wrapper">
                    <i onClick={()=> handleModal(item)} className="bi bi-eye-fill"></i>
                    <i className="bi bi-cart-plus"></i>
                </div>

            </div>
            )}
        </div>
        {slideIndex <= data.length -2 && 
            <i onClick={()=> handleClick("right")} className="bi bi-chevron-right book-slider-arrow-right"></i>
        }
        {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
    </div>
  )
}
