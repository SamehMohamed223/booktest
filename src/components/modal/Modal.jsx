import React from 'react'
import './modal.css';
import BookSliderRating from '../book-slider/BookSliderRating';
import { Link } from 'react-router-dom';

export default function Modal({bookData, setOpenModal}) {

    const {image, title, inStock, rating, reviews, author, price, id} = bookData;

  return (
    <div onClick={()=> setOpenModal(false)} className="modal-container">
        <div onClick={(event) => event.stopPropagation()} className="model-content">
            <i onClick={()=> setOpenModal(false)} className="bi bi-x-circle-fill modal-icon"></i>
            
            <div className="model-content-img">
                <img src={`/books/${image}`} alt={title} />
            </div>
            <div className="model-content-info">
                <h5 className="model-content-info-title">{title}</h5>
                <div className="model-content-info-stock">
                    <b>Status: </b> {inStock ? "in stock" : "not in stock"}
                </div>
                <BookSliderRating rating={rating} reviews={reviews} />
                <div className="model-content-info-author">
                    <b>Author: </b> {author}
                </div>
                <div className="model-content-info-price">
                    <b>Price: </b> ${price}
                </div>
                <div className="modal-add-to-cart">
                    <input type="number" min="1" max="100" />
                    <button className='modal-add-to-cart-btn'>
                        <i className="bi bi-cart-plus"></i>
                        Add To Cart 
                    </button>
                </div>
                <Link to={`/book/${id}`} className="model-content-info-link">
                    See More Details
                </Link>
            </div>
        </div>
    </div>
  )
}
