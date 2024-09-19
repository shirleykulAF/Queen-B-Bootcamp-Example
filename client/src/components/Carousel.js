import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

// Dynamically require images from the Images directory
const importAll = (r) => {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
};

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const Carousel = () => {
    const settings = {
        dots: false, // Remove dots
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1, // Change to 1 for smooth transition
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false, // Remove arrows
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {Object.keys(images).map((key, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={images[key]} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
