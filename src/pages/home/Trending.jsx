import React from 'react';
import Slider from 'react-slick';
import '../../assets/styles/trending.css';
import { FaGlasses } from '@react-icons/all-files/fa/FaGlasses';
import { FaInfoCircle } from '@react-icons/all-files/fa/FaInfoCircle';
import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft';
import { FaAngleRight } from '@react-icons/all-files/fa/FaAngleRight';
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
const Trending = () => {
  var settingTrending = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    // initialSlide: 0,
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
    ],
  };
  return (
    <div id="manga-trending">
      <div className="container">
        <div className="block_area-header">
          <div className="bah-heading">
            <h2 className="trending-title">Trending</h2>
          </div>
        </div>
        <div className="trending-list">
          <Slider {...settingTrending}>
            {Array(8)
              .fill((index) => (
                <Link to="/detail-manga" className="trending-item" key={index}>
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
                        <Link to="/detail-manga">
                          <i className="far fa-file-alt mr-2"></i>
                          <strong>Chap 212 [EN]</strong>
                        </Link>
                      </p>

                      <p>
                        <a href="/read/blue-lock-225/en/volume-20">
                          <i className="far fa-file-alt mr-2"></i>
                          <strong>Vol 20 [EN]</strong>
                        </a>
                      </p>

                      <div className="mpd-buttons">
                        <a href="/read" className="btn btn-primary btn-sm btn-block">
                          <FaGlasses />
                          Read Now
                        </a>
                        <a href="/detail-manga" className="btn btn-light btn-sm btn-block">
                          <FaInfoCircle />
                          Info
                        </a>
                      </div>
                    </div>
                    <img
                      src="https://img.mreadercdn.com/_m/300x400/100/9e/b3/9eb352aed77fac4ab19cd3291a4ba58f/9eb352aed77fac4ab19cd3291a4ba58f.jpg"
                      className="manga-poster-img ls-is-cached lazyloaded"
                      alt="Blue Lock"
                    />
                  </div>

                  <div className="number">
                    <span>01</span>
                    <div className="anime-name">Blue Lock</div>
                  </div>
                </Link>
              ))
              .map((item, index) => item(index))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Trending;
