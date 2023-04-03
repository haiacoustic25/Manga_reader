import { Drawer } from 'antd';
import React, { useContext } from 'react';
import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft';
import { FaMoon } from '@react-icons/all-files/fa/FaMoon';
import { FaSun } from '@react-icons/all-files/fa/FaSun';
import '../../assets/styles/sidebar.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

const Sidebar = ({ onClose, openDrawer }) => {
  const { theme, handleChangeThemeDarkMode } = useContext(ThemeContext);
  const renderTheme = () => {
    if (theme == 'light')
      return (
        <div className="sidebar-action_mode" onClick={() => handleChangeThemeDarkMode('dark')}>
          <FaMoon />
          <span>Dark Mode</span>
        </div>
      );

    return (
      <div className="sidebar-action_mode" onClick={() => handleChangeThemeDarkMode('light')}>
        <FaSun />
        <span>Light Mode</span>
      </div>
    );
  };
  return (
    <Drawer
      className={theme == 'dark' && 'darkSidebar'}
      // title="Basic Drawer"
      placement="left"
      closable={false}
      onClose={onClose}
      open={openDrawer}
      width="260px"
      style={theme == 'dark' && { backgroundColor: '#2f2f2f', color: '#ddd' }}
      // key={placement}
    >
      <div className="sidebar-action">
        <div className="sidebar-action_close" onClick={onClose}>
          <FaAngleLeft />
        </div>
        {renderTheme()}
      </div>
      <div className="sidebar-item">
        <Link to="/home">Home</Link>
      </div>
      <div className="sidebar-item">
        <span>Type</span>
        <div className="types-sub">
          <a className="ts-item" href="#">
            Manga
          </a>

          <a className="ts-item" href="#">
            One-shot
          </a>

          <a className="ts-item" href="#">
            Doujinshi
          </a>

          <a className="ts-item" href="#">
            Light Novel
          </a>

          <a className="ts-item" href="#">
            Manhwa
          </a>

          <a className="ts-item" href="#">
            Manhua
          </a>

          <a className="ts-item" href="#">
            Comic
          </a>
        </div>
      </div>
      <div className="sidebar-item">
        <Link to="#">Completed</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/az-list">A-Z List</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/">News</Link>
      </div>
      <div className="sidebar-item">
        <Link to="#">Random</Link>
      </div>
    </Drawer>
  );
};

export default Sidebar;
