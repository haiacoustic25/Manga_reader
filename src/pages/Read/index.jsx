import { BsArrowsFullscreen } from '@react-icons/all-files/bs/BsArrowsFullscreen';
import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft';
import { FaArrowRight } from '@react-icons/all-files/fa/FaArrowRight';
import { FaCommentAlt } from '@react-icons/all-files/fa/FaCommentAlt';
import { BiBookmark } from '@react-icons/all-files/bi/BiBookmark';
import { RiArrowDropDownLine } from '@react-icons/all-files/ri/RiArrowDropDownLine';
import { Dropdown, Select, Space } from 'antd';
import { SettingOutlined, InfoOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import '../../assets/styles/read.css';
import manga from '../../assets/img/manga.png';
import Comment from './comment';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { IoMdArrowDropright } from '@react-icons/all-files/io/IoMdArrowDropright';
const ReadManga = () => {
  const [isFull, setIsFull] = useState(true);
  const [isOpenListChapter, setIsOpenListChapter] = useState(false);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const items = [
    {
      label: 'Reading',
      key: '0',
    },
    {
      label: 'On-Hold',
      key: '1',
    },
    { label: 'Plan to read', key: '2' },
    {
      label: 'Dropped',
      key: '3',
    },
    {
      label: 'Completed',
      key: '4',
    },
  ];
  const handleOpenFullSidebar = () => {
    setIsOpenListChapter(false);
    setIsFull(!isFull);
  };
  const renderSideBar = () => {
    if (isFull)
      return (
        <div className="sidebar-container-full">
          <div className="rm-left">
            <Link to="/" className="rm-logo">
              <img src={logo} alt="" />
            </Link>
            <div className="hr-line"></div>
            <h2 className="manga-name">Banjou no Polaris</h2>
            <div className="rm-type">
              <span>You are reading</span>
              <Select
                className="rm-type__select"
                defaultValue="By Chapter"
                // style={{ width: 120 }}
                style={{ width: '100%' }}
                // onChange={handleChange}
                options={[
                  {
                    label: 'By Chapter',
                    value: '0',
                  },
                  {
                    label: 'By Volume',
                    value: '1',
                  },
                ]}
              />
            </div>
            <Select
              className="rm-language"
              defaultValue="By Chapter"
              style={{ width: '100%', margin: '10px 0' }}
              // onChange={handleChange}
              options={[
                {
                  label: 'By Chapter',
                  value: '0',
                },
                {
                  label: 'By Volume',
                  value: '1',
                },
              ]}
            />
            <div
              className={`rm-chapter ${isOpenListChapter && 'active'}`}
              onClick={() => setIsOpenListChapter(!isOpenListChapter)}
            >
              <span>Chapter 1</span> <RiArrowDropDownLine style={{ fontSize: '20px' }} />
            </div>
            <div className="rm-action">
              <span>
                <FaArrowLeft style={{ color: '#fff' }} />
              </span>
              <span>
                <FaArrowRight style={{ color: '#fff' }} />
              </span>
            </div>
          </div>
          <div className="rm-right">
            <div className="rm-comment" onClick={showDrawer}>
              <FaCommentAlt style={{ fontSize: '50px', color: '#fff' }} />
              <span>
                <p className="number">6460</p>
                <p>Comments</p>
              </span>
            </div>
            <div className="rm-item">
              <SettingOutlined style={{ fontSize: '20px', color: '#fff' }} />
              <span>Settings</span>
            </div>
            <Link to="/detail-manga" className="rm-item">
              <InfoOutlined style={{ fontSize: '20px', color: '#fff' }} />
              <span>Manga Detail</span>
            </Link>
            <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
              <Space>
                <div className="rm-item">
                  <BiBookmark style={{ fontSize: '20px', color: '#fff' }} />
                  <span>Reading List</span>
                </div>
              </Space>
            </Dropdown>
          </div>
        </div>
      );

    return <div className="sidebar-container"></div>;
  };
  return (
    <div id="read-manga">
      <div className="read-sidebar">
        {renderSideBar()}
        <div className="fullScreen" onClick={handleOpenFullSidebar}>
          <BsArrowsFullscreen />
        </div>
      </div>
      <div className="read-sidebarTop">
        <div className="read-sidebarTop__left">
          <Link to="/" className="rmt-logo">
            <img src={logo} alt="" />
          </Link>
          <div class="hr-line"></div>
          <h2 class="manga-name">Yumeochi: Dreaming of Falling For You</h2>
          <Select
            defaultValue="By Chapter"
            // style={{ width: '100%', margin: '10px 0' }}
            // onChange={handleChange}
            options={[
              {
                label: 'By Chapter',
                value: '0',
              },
              {
                label: 'By Volume',
                value: '1',
              },
            ]}
          />{' '}
          <Select
            // className="rm-language"
            defaultValue="By Chapter"
            // style={{ width: '100%', margin: '10px 0' }}
            // onChange={handleChange}
            options={[
              {
                label: 'By Chapter',
                value: '0',
              },
              {
                label: 'By Volume',
                value: '1',
              },
            ]}
          />
          <div
            className={`rm-chapter ${isOpenListChapter && 'active'}`}
            onClick={() => setIsOpenListChapter(!isOpenListChapter)}
          >
            <span>Chapter 1</span> <RiArrowDropDownLine style={{ fontSize: '20px' }} />
          </div>
          <div className="rm-action">
            <span>
              <FaArrowLeft style={{ color: '#fff' }} />
            </span>
            <span>
              <FaArrowRight style={{ color: '#fff' }} />
            </span>
          </div>
        </div>
        <div className="read-sidebarTop__right">
          <div onClick={showDrawer} className="rmt-item">
            <FaCommentAlt style={{ fontSize: '15px', color: '#fff' }} />
          </div>
          <div className="rmt-item">
            <SettingOutlined style={{ fontSize: '15px', color: '#fff' }} />
          </div>
          <Link to="/detail-manga" className="rmt-item infor">
            <InfoOutlined style={{ fontSize: '15px', color: '#fff' }} />
          </Link>
          <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
            <Space>
              <div className="rmt-item bookmark">
                <BiBookmark style={{ fontSize: '15px', color: '#fff' }} />
              </div>
            </Space>
          </Dropdown>
        </div>
      </div>
      <div className="read-content">
        <div className="read-content__container">
          {Array(10)
            .fill((index) => <img src={manga} alt="" key={index} />)
            .map((item, index) => item(index))}
        </div>
      </div>
      {isOpenListChapter && (
        <div className="rm-listChapter">
          <div className="rm-listChapter__input">
            <FaSearch style={{ fontSize: '16px', padding: '0 10px' }} />
            <input type="text" placeholder="Number of Chapter" />
          </div>
          <div className="rm-listChapter__list">
            <div className="rm-listChapter__item">
              <IoMdArrowDropright style={{ fontSize: '16px' }} /> <p>Chap 212: </p>
              <span>UnknownUnknownUnknown</span>
            </div>
            <div className="rm-listChapter__item">
              <IoMdArrowDropright style={{ fontSize: '16px' }} /> <p>Chap 212: </p>
              <span>UnknownUnknownUnknown</span>
            </div>
          </div>
        </div>
      )}
      <Comment open={open} onClose={onClose} />
    </div>
  );
};

export default ReadManga;
