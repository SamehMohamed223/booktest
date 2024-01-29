import React from 'react'
import { useParams } from 'react-router-dom';
import { books } from '../data/books';
import BookSliderRating from '../components/book-slider/BookSliderRating';
import {} from './book.css';

export default function Book() {

  const {id} = useParams();

  const book = books.find(b => b.id === parseInt(id)); // (parseInt(id) = +id) => int

  return (
    <div className="book">
      <div className="book-content">
        <img src={`/books/${book.image}`} alt={book.title} />
        <div className="book-content-info">
          <h1>{book.title}</h1>
          <div className="book-author">
            by <span>{book.author} </span> (Author)
          </div>
          <BookSliderRating rating={book.rating} reviews={book.reviews} />
          <div className="book-add-to-cart">
            <input type="number" min="1" max="100" />
            <button className='book-add-to-cart-btn'>
              <i className="bi bi-cart-plus"></i>
              Add To Cart 
            </button>
            </div>
        </div>
      </div>
      <p className="book-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Laudantium accusamus molestias deleniti asperiores, 
        ad rem quibusdam unde assumenda sint corporis quasi vel molestiae dolorem 
        rerum deserunt placeat modi corrupti. Perferendis?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Illum doloribus voluptates quam libero qui molestias doloremque cum, 
        in excepturi. Maiores ad reprehenderit praesentium animi quo suscipit 
        optio deleniti dignissimos eos.
      </p>
      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <i className="bi bi-file-earmark-break"></i>
          <b>{book.printLength}pages</b>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <i className="bi bi-globe"></i>
          <b>{book.language}</b>
        </div>
        <div className="book-icon">
          <small>Publication date</small>
          <i className="bi bi-calendar3"></i>
          <b>{book.PublicationDate}</b>
        </div>
      </div>
    </div>
  )
}
