import './styles.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Gallery = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section id="gallery-images" className="gallery-images">
      <div className="gallery-images__slider">
        <figure className="gallery-images__figure">
          <img className="gallery-images__image" src={images[currentIndex]} alt="" />
        </figure>
        <div className="gallery-images__buttons">
          {currentIndex > 0
            ? (
              <button
                type="button"
                className="gallery-images__button-prev"
                onClick={
                () => setCurrentIndex(currentIndex - 1)
                }
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            )
            : null}
          {currentIndex < images.length - 1
            ? (
              <button
                type="button"
                className="gallery-images__button-next"
                onClick={
                () => setCurrentIndex(currentIndex + 1)
                }
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            )
            : null}

        </div>
      </div>
    </section>
  );
};
export default Gallery;
