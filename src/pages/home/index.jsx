import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft';
import { FaAngleRight } from '@react-icons/all-files/fa/FaAngleRight';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaPlus } from '@react-icons/all-files/fa/FaPlus';
import { FaRedditAlien } from '@react-icons/all-files/fa/FaRedditAlien';
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import '../../assets/styles/home.css';
import '../../assets/styles/views.css';
import LayoutFull from '../../components/Layout';
import ListComment from './ListComment';
import ListManga from './ListManga/ListManga';
import SliderInHome from './SliderInHome';
import Trending from './Trending';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="swiper-button-next" onClick={onClick}>
      <FaAngleRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="swiper-button-prev" onClick={onClick}>
      <FaAngleLeft />
    </div>
  );
}
const Home = () => {
  const settings = {
    dots: false,
    speed: 2000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <LayoutFull isLogoFooter={true} isSearch={true} backgroundColor="default">
      <div className="deslide-wrap">
        <div className="container">
          <Slider {...settings}>
            <div className="slider-top">
              <Link to="/detail-manga" className="deslide-cover">
                <img
                  className="manga-poster-img"
                  src="https://img.mreadercdn.com/_m/500x800/100/03/ea/03ea374d8b1f3a447b45d7e03464e234/03ea374d8b1f3a447b45d7e03464e234.jpg"
                  alt="Blue Period"
                />
              </Link>
              <div className="deslide-item-content">
                <div className="desi-sub-text">Chapter: 58 [EN]</div>

                <div className="desi-head-title">
                  <Link title="Blue Period" to="/detail-manga">
                    Blue Period12121
                  </Link>
                </div>
                <div className="sc-detail">
                  <div className="scd-item mb-3">
                    Second-year high school student Yatora Yaguchi is bored with his normal life. He
                    studies well and plays around with his friends, but in truth, he does not enjoy
                    either of those activities. Bound by...
                  </div>
                  <div className="scd-item scd-genres">
                    <span>Drama</span>

                    <span>School</span>

                    <span>Seinen</span>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="desi-buttons">
                  <Link to="/read" className="btn btn-slide-read mr-2">
                    Read Now
                  </Link>
                  <a href="/detail-manga" className="btn btn-slide-info">
                    View Info
                  </a>
                </div>
              </div>
              <div className="slider-top-img">
                <Link to="/detail-manga">
                  <img
                    src="https://img.mreadercdn.com/_m/500x800/100/90/38/9038fb5829a746f7e01293ee88a2955b/9038fb5829a746f7e01293ee88a2955b.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="slider-top">
              <Link to="/detail-manga" className="deslide-cover">
                <img
                  className="manga-poster-img"
                  src="https://img.mreadercdn.com/_m/500x800/100/0e/0f/0e0f9051160921c67cb76ac8e4f8a013/0e0f9051160921c67cb76ac8e4f8a013.jpg"
                  alt="Blue Period"
                />
              </Link>
              <div className="deslide-item-content">
                <div className="desi-sub-text">Chapter: 58 [EN]</div>

                <div className="desi-head-title">
                  <Link title="Blue Period" to="/detail-manga">
                    Bad Girl-Exorcist Reina
                  </Link>
                </div>
                <div className="sc-detail">
                  <div className="scd-item mb-3">
                    Reina Suzuno, a transfer student with a Sukujan, blonde hair and loose socks
                    looks totally like a criminal. Is she a stalker? It turns out that Reina is not
                    a stalker, she is actually an exorcist, an...
                  </div>
                  <div className="scd-item scd-genres">
                    <span>Drama</span>

                    <span>School</span>

                    <span>Seinen</span>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="desi-buttons">
                  <Link to="/read" className="btn btn-slide-read mr-2">
                    Read Now
                  </Link>
                  <a href="/detail-manga" className="btn btn-slide-info">
                    View Info
                  </a>
                </div>
              </div>
              <div className="slider-top-img">
                <Link to="/detail-manga">
                  <img
                    src="https://img.mreadercdn.com/_m/500x800/100/0e/0f/0e0f9051160921c67cb76ac8e4f8a013/0e0f9051160921c67cb76ac8e4f8a013.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div id="text-home">
        <div className="container">
          {/* <!--Begin: text home--> */}
          <div className="text-home">
            <div className="text-home-main">
              MangaReader is a Free website to download and read manga online. We have a big library
              of over 600,000 manga chapters in all genres that are available to read or download
              for FREE without registration. The manga is updated daily to make sure no one will
              ever miss the latest chapter on their favorite manga. If you like the website, please
              bookmark it and help us to spread the words. Thank you!
            </div>
            <div className="social-home-block">
              <div className="social-home-block-infor">
                <div className="shb-icon"></div>
                <div className="shb-left">
                  <strong>Share Mangareader</strong> to your friends
                </div>
              </div>
              <div className="at-share-btn-elements">
                <div className="at-share-btn" style={{ backgroundColor: 'rgb(59, 89, 152)' }}>
                  <FaFacebookF style={{ color: '#fff', fontSize: '15px' }} />
                  <span>Facebook</span>
                </div>
                <div className="at-share-btn" style={{ backgroundColor: 'rgb(29, 161, 242)' }}>
                  <FaTwitter style={{ color: '#fff', fontSize: '15px' }} />
                  <span>Twitter</span>
                </div>
                <div className="at-share-btn" style={{ backgroundColor: 'rgb(255, 87, 0)' }}>
                  <FaRedditAlien style={{ color: '#fff', fontSize: '15px' }} />
                  <span>Reddit</span>
                </div>
                <div className="at-share-btn" style={{ backgroundColor: 'rgb(0, 136, 204)' }}>
                  <FaTelegramPlane style={{ color: '#fff', fontSize: '15px' }} />
                  <span>Telegram</span>
                </div>
                <div className="at-share-btn" style={{ backgroundColor: 'rgb(255, 101, 80)' }}>
                  <FaPlus style={{ color: '#fff', fontSize: '15px' }} />
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/End: text home--> */}
        </div>
      </div>
      <Trending />
      <ListComment />
      <div className="category_block-home">
        <div className="container">
          <div className="c_b-list">
            <div className="item item-focus focus-01">
              <i className="mr-1">⚡</i>
              Latest Updated
            </div>
            <div className="item item-focus focus-02">
              <i className="mr-1">✌</i> New Release
            </div>
            <div className="item item-focus focus-04">
              <i className="mr-1">🔥</i>
              Most Viewed
            </div>
            <div className="item item-focus focus-05">
              <i className="mr-1">✅</i>
              Completed
            </div>
            <div className="item">Action</div>

            <div className="item">Adventure</div>

            <div className="item">Cars</div>

            <div className="item">Comedy</div>

            <div className="item">Dementia</div>

            <div className="item">Demons</div>

            <div className="item">Doujinshi</div>

            <div className="item">Drama</div>

            <div className="item">Ecchi</div>

            <div className="item">Fantasy</div>

            <div className="item">Game</div>

            <div className="item">Gender Bender</div>

            <div className="item">Harem</div>

            <div className="item">Hentai</div>

            <div className="item">Historical</div>

            <div className="item">Horror</div>

            <div className="item">Josei</div>

            <div className="item">Kids</div>

            <div className="item">Magic</div>

            <div className="item">Martial Arts</div>

            <div className="item">Mecha</div>

            <div className="item">Military</div>

            <div className="item">Music</div>

            <div className="item">Mystery</div>

            <div className="item">Parody</div>

            <div className="item">Police</div>

            <div className="item">Psychological</div>

            <div className="item">Romance</div>

            <div className="item">Samurai</div>

            <div className="item">School</div>

            <div className="item">Sci-Fi</div>

            <div className="item">Seinen</div>

            <div className="item">Shoujo</div>

            <div className="item">Shoujo Ai</div>

            <div className="item">Shounen</div>

            <div className="item">Shounen Ai</div>

            <div className="item">Slice of Life</div>

            <div className="item">Space</div>

            <div className="item">Sports</div>

            <div className="item">Super Power</div>

            <div className="item">Supernatural</div>

            <div className="item">Thriller</div>

            <div className="item">Vampire</div>

            <div className="item">Yaoi</div>

            <div className="item">Yuri</div>

            <div className="item item-more">+ More</div>
          </div>
        </div>
      </div>
      <SliderInHome title="Recommended" />
      <ListManga />
      <SliderInHome title="Completed" />
    </LayoutFull>
  );
};

export default Home;
