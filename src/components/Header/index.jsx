import React, { useContext, useState } from 'react';
import '../../assets/styles/header.css';
import { FaGlasses } from '@react-icons/all-files/fa/FaGlasses';
import { FaPlayCircle } from '@react-icons/all-files/fa/FaPlayCircle';
import { FaRedditAlien } from '@react-icons/all-files/fa/FaRedditAlien';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaSun } from '@react-icons/all-files/fa/FaSun';
import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord';
import { FaMoon } from '@react-icons/all-files/fa/FaMoon';
import { FaAngleDown } from '@react-icons/all-files/fa/FaAngleDown';
import { FaUserCircle } from '@react-icons/all-files/fa/FaUserCircle';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import ModalSingIn from '../modalSingin';
import Sidebar from '../sidebar';
import { ThemeContext } from '../../context/ThemeContext';

const Header = ({ isSearch = true, background = null }) => {
  const { theme, handleChangeThemeDarkMode } = useContext(ThemeContext);
  console.log({ theme });
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };
  const renderTheme = () => {
    if (theme == 'light')
      return (
        <div className="h-right__item" onClick={() => handleChangeThemeDarkMode('dark')}>
          <FaMoon />
          <span>Dark Mode</span>
        </div>
      );

    return (
      <div className="h-right__item" onClick={() => handleChangeThemeDarkMode('light')}>
        <FaSun />
        <span>Light Mode</span>
      </div>
    );
  };
  return (
    <>
      <div id="sub-header" className="home-sub-header">
        <div className="container">
          <div className="h-left">
            <div className="h-left__item">
              <FaGlasses />
              <span>Read Random</span>
            </div>
            <div className="spacing"></div>
            <div className="h-left__item">
              <FaPlayCircle />
              <span>Anime Online</span>
            </div>
          </div>
          <div className="h-right">
            <span>Follow us:</span>
            <div className="h-right__item">
              <FaRedditAlien />
              <span>Reddit</span>
            </div>
            <div className="h-right__item">
              <FaTwitter />
              <span>Twitter</span>
            </div>
            <div className="h-right__item">
              <FaDiscord />
              <span>Discord</span>
            </div>
            <div className="spacing"></div>
            {renderTheme()}
          </div>
        </div>
      </div>
      <div id="header" className={`home-header  ${background == 'default' && 'default-header'}`}>
        <div className="container">
          <div className="header_left">
            <div className="mobile_menu" onClick={showDrawer}>
              <FaBars style={{ color: '#fff', fontSize: '20px', marginRight: '20px' }} />
            </div>
            <Link to="/" id="logo">
              <img src={logo} alt="logo" />
            </Link>
            <div id="header_menu">
              <ul className="nav header_menu-list">
                <li className="nav-item">
                  <a href="#" title="Completed">
                    Completed
                  </a>
                </li>
                <li className="nav-item header_menu-parent">
                  <span>
                    Types
                    <FaAngleDown />
                  </span>
                  <div className="header_menu-sub">
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Manga</a>
                      </li>

                      <li>
                        <a href="#">One-shot</a>
                      </li>

                      <li>
                        <a href="#">Doujinshi</a>
                      </li>

                      <li>
                        <a href="#">Light Novel</a>
                      </li>

                      <li>
                        <a href="#">Manhwa</a>
                      </li>

                      <li>
                        <a href="#">Manhua</a>
                      </li>

                      <li>
                        <a href="#">Comic</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/az-list" title="A-Z List">
                    A-Z List
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#" target="_blank" title="News">
                    News
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="header_right">
            {isSearch && (
              <div className="header_filter">
                <div className="header_filterTitle">FILTER</div>
                <input type="text" placeholder="Search manga..." />
                <FaSearch style={{ fontSize: '16px' }} />
              </div>
            )}
            <div className="btn-user " onClick={showModal}>
              <FaUserCircle style={{ color: '#fff', fontSize: '20px' }} />
              Member
            </div>
            <div className="header_right-mobile">
              <div id="mobile_search">
                <FaSearch style={{ color: '#fff', fontSize: '20px' }} />
              </div>
              <div id="mobile_user" onClick={showModal}>
                <FaUserCircle style={{ color: '#fff', fontSize: '20px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar onClose={onClose} openDrawer={openDrawer} />
      <ModalSingIn isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
    </>
  );
};

export default Header;
