import React from 'react';
import '../../assets/styles/sliderInHome.css';
import { FaGlasses } from '@react-icons/all-files/fa/FaGlasses';
import { FaInfoCircle } from '@react-icons/all-files/fa/FaInfoCircle';
import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft';
import { FaAngleRight } from '@react-icons/all-files/fa/FaAngleRight';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="swiper-button-next" onClick={onClick}>
      <FaAngleRight className="swiper-button-icon" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="swiper-button-prev" onClick={onClick}>
      <FaAngleLeft className="swiper-button-icon" />
    </div>
  );
}

const SliderInHome = ({ title }) => {
  var settingSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };
  return (
    <div id="manga-slider">
      <div className="container">
        <h2 className="sih-title">{title}</h2>
        <div className="sih-list">
          <Slider {...settingSlider}>
            {Array(9)
              .fill((index) => (
                <div className="sih-item" key={index}>
                  <span className="tick tick-item tick-lang">EN/JA</span>
                  <div className="manga-poster">
                    <div className="mp-desc">
                      <p className="alias-name mb-2">
                        <strong>Blue Lock</strong>
                      </p>
                      <p>
                        <i className="fas fa-star mr-2"></i>8.42
                      </p>
                      <p>
                        <i className="fas fa-globe mr-2"></i>EN/FR/JA
                      </p>

                      <p>
                        <a href="/read/blue-lock-225/en/chapter-212">
                          <i className="far fa-file-alt mr-2"></i>
                          <strong>Chap 212 [EN]</strong>
                        </a>
                      </p>

                      <p>
                        <a href="/read/blue-lock-225/en/volume-20">
                          <i className="far fa-file-alt mr-2"></i>
                          <strong>Vol 20 [EN]</strong>
                        </a>
                      </p>

                      <div className="mpd-buttons">
                        <Link to="/read" className="btn btn-primary btn-sm btn-block">
                          <FaGlasses />
                          Read Now
                        </Link>
                        <Link to="/detail-manga" className="btn btn-light btn-sm btn-block">
                          <FaInfoCircle />
                          Info
                        </Link>
                      </div>
                    </div>
                    <img
                      src="https://img.mreadercdn.com/_m/300x400/100/67/53/6753c637aa088797e014e6e93d9abe62/6753c637aa088797e014e6e93d9abe62.jpg"
                      className="manga-poster-img ls-is-cached lazyloaded"
                      alt="Blue Lock"
                    />
                  </div>

                  <div className="manga-detail">
                    <h3 className="manga-name">
                      <Link to="#" title="Doraemon (Colored Edition)">
                        Doraemon (Colored Edition)
                      </Link>
                    </h3>
                    <div className="fd-infor">
                      <a href="#">Comedy</a>, <a href="#">Kids</a>
                    </div>
                  </div>
                </div>
              ))
              .map((item, index) => item(index))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderInHome;
