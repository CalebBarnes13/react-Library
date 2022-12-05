import React, { useEffect, useState } from "react";
import Ratings from "../ui/Ratings";
import Price from "../ui/Price";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
        setImg(image);
      }, 300);
    };
  });

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={img.src} alt="" className="book__img" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book_title--link">
              {book.title}
            </Link>
          </div>
          <Ratings rating={book.rating} />
          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          />
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;
