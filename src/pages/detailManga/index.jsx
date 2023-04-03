import React, { useState } from 'react';
import LayoutFull from '../../components/Layout';
import '../../assets/styles/detailManga.css';
import { FaEye } from '@react-icons/all-files/fa/FaEye';
import { BiBookmark } from '@react-icons/all-files/bi/BiBookmark';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaRedditAlien } from '@react-icons/all-files/fa/FaRedditAlien';
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane';
import { FaPlus } from '@react-icons/all-files/fa/FaPlus';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { FaFileAlt } from '@react-icons/all-files/fa/FaFileAlt';
import { FaStar } from '@react-icons/all-files/fa/FaStar';
import { Dropdown, Modal, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const valueTab = {
  CHAPTER: 0,
  VOLUME: 1,
};

const DetailManga = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [tab, setTab] = useState(valueTab.CHAPTER);
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
  const itemsChapter = [
    {
      label: 'Reading',
      key: '5',
    },
  ];
  const listTab = [
    {
      key: valueTab.CHAPTER,
      label: 'List Chapter',
      onClick: () => setTab(valueTab.CHAPTER),
    },
    {
      key: valueTab.VOLUME,
      label: 'List Volume',
      onClick: () => setTab(valueTab.VOLUME),
    },
  ];

  const renderTab = () => {
    if (tab == valueTab.CHAPTER)
      return (
        <div className="chapter-list">
          {Array(10)
            .fill((index) => (
              <div className="chapter-item" key={index}>
                <div className="chapter-item__left">
                  <FaFileAlt />
                  Chapter 21: Magic Eyes
                </div>
                <Link to="/read" className="chapter-item__right">
                  <FaEye />
                  Read
                </Link>
              </div>
            ))
            .map((item, index) => item(index))}
        </div>
      );

    return (
      <div className="volume-list ">
        {Array(10)
          .fill((index) => (
            <div className="volume-item">
              <img
                src="https://img.mreadercdn.com/_m/200x300/100/64/b9/64b99a8f3bea0084e9974ab7118076ad/64b99a8f3bea0084e9974ab7118076ad.jpeg"
                alt=""
              />

              <span className="volume-name">VOL 11</span>
            </div>
          ))
          .map((item, index) => item(index))}
      </div>
    );
  };
  return (
    <LayoutFull isLogoFooter={true} isSearch={true} backgroundColor="default">
      <div id="detail-manga">
        <div className="container">
          <div className="detail-content">
            <div className="detail-infor">
              <div className="detail-infor__left">
                <div className="detail-img">
                  <img
                    src="https://img.mreadercdn.com/_m/300x400/100/e4/62/e462f1137301121aa89bdfa4171c65bf/e462f1137301121aa89bdfa4171c65bf.jpg"
                    alt=""
                  />
                </div>
                <div style={{ flex: '1' }}>
                  <h2 className="manga-name">The Splendid Job of a Monster Maid</h2>
                  <div className="manga-name-or">怪物メイドの華麗なるお仕事</div>
                  <div className="manga-buttons">
                    <div className="btn-read">
                      <FaEye />
                      Read Now
                    </div>
                    <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
                      <div className="reading-list-info">
                        <Space>
                          <BiBookmark />
                        </Space>
                      </div>
                    </Dropdown>
                  </div>
                  <div className="genres">
                    <span>Action</span>
                    <span>Fantasy</span>
                  </div>
                  <div className="description">
                    Sumire, a nekomata who lost her beloved master, was wandering around, got lost,
                    and arrived in a foreign country in the demon world!? In order to take back "a
                    certain something," she will clean the cluttered rooms with the undead Rose and
                    the android Ivy! (Source: Kadokawa, translated)
                  </div>
                  <div className="description-more" onClick={() => setModal2Open(true)}>
                    <div>+ Read full</div>
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
              <div className="detail-infor-wrap">
                <div className="anisc-info">
                  <div className="item item-title">
                    <span className="item-head">Type:</span>
                    <span>Manga</span>
                  </div>
                  <div className="item item-title">
                    <span className="item-head">Status:</span>
                    <span className="name">Finished</span>
                  </div>

                  <div className="item item-title">
                    <span className="item-head">Authors:</span>

                    <span>Tanabe, Yugata</span>
                  </div>

                  <div className="item item-title">
                    <span className="item-head">Magazines:</span>

                    <span>Comic Newtype</span>
                  </div>

                  <div className="item item-title">
                    <span className="item-head">Published:</span>
                    <span className="name">Apr 17, 2020 to ?</span>
                  </div>
                  <div className="item item-title">
                    <span className="item-head">Score:</span>
                    <span className="name">N/A</span>
                  </div>
                  <div className="item item-title">
                    <span className="item-head">Views:</span>
                    <span className="name">752</span>
                  </div>
                </div>
                <div className="dt-rate" id="vote-info">
                  <div className="block-rating ">
                    <div className="rating-result">
                      <div className="rr-mark float-left">
                        <strong>
                          <FaStar style={{ color: '#ffc107', marginRight: '10px' }} />
                          8.8
                        </strong>{' '}
                        <small>(4 voted)</small>
                      </div>
                      <div className="rr-title float-right">Vote now</div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="description">What do you think about this manga?</div>
                    <div className="button-rate">
                      <div className=" btn-vote ">
                        😩<span>Boring</span>
                      </div>
                      <div className=" btn-vote ">
                        😃<span>Great</span>
                      </div>
                      <div className="btn-vote ">
                        🤩<span>Amazing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dt-rate__mobile">
          <div className="container">
            <div className="dt-rate__mobile-title">
              <strong>
                <FaStar style={{ color: '#ffc107', marginRight: '10px' }} />
                8.8
              </strong>{' '}
              <small>(4 voted)</small>
              <div>What do you think about this manga?</div>
            </div>
            <div className="dt-rate__mobile-action">
              <div>😩</div>
              <div>😃</div>
              <div>🤩</div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-manga main-wrapper">
        <div className="container">
          <div className="main-content">
            <div className="main-content__tab">
              {listTab.map((_) => (
                <div
                  className={`main-content__item ${_.key == tab && 'active'} `}
                  key={_.key}
                  onClick={_.onClick}
                >
                  {_.label}
                </div>
              ))}
            </div>
            <div className="tab__content">
              <div className="chapter-section">
                <Dropdown menu={{ items }} trigger={['click']}>
                  {/* <Space> */}
                  <span id="c-selected-lang">
                    <FaFileAlt />
                    <span>Language: </span>EN
                    <DownOutlined />
                  </span>
                  {/* </Space> */}
                </Dropdown>
                {tab == valueTab.CHAPTER && (
                  <div className="chapter-s-search">
                    <form className="preform search-reading-item-form">
                      <FaSearch />
                      <input
                        className="form-control search-reading-item"
                        type="text"
                        placeholder="Number of Chapter"
                        autofocus=""
                      />
                    </form>
                  </div>
                )}
              </div>
              {renderTab()}
            </div>
          </div>
          <div className="main-sidebar">
            <h2 className="cat-heading">Genres</h2>
            <div className="c_b-list">
              <div className="cbl-row">
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
            <h2 className="cat-heading">You May Also Like</h2>
            <div>
              {Array(10)
                .fill((index) => (
                  <div className="main-sidebar__item" key={index}>
                    <Link to="/detail-manga" className="main-sidebar__img">
                      <img
                        src="https://img.mreadercdn.com/_m/100x200/100/df/2d/df2d5b85bf6e828c354a58b7fc90fdd7/df2d5b85bf6e828c354a58b7fc90fdd7.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="main-sidebar__infor">
                      <Link to="/detail-manga">
                        <h3 className="name">
                          Isekai Yururi Kikou: Raising Children While Being An Adventurer
                        </h3>
                      </Link>
                      <div className="description">Comedy, Fantasy</div>
                      <div className="item-infor__chap">
                        <span>
                          <FaFileAlt style={{ marginRight: '5px' }} />
                          Chap 212
                        </span>
                        <span>
                          <FaFileAlt style={{ marginRight: '5px' }} />
                          Vol 20
                        </span>
                      </div>
                    </div>
                  </div>
                ))
                .map((item, index) => item(index))}
            </div>
          </div>
        </div>
      </div>
      <Modal
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ textAlign: 'center', margin: '20px 0' }}>
            The Splendid Job of a Monster Maid
          </h2>
          Sumire, a nekomata who lost her beloved master, was wandering around, got lost, and
          arrived in a foreign country in the demon world!? In order to take back "a certain
          something," she will clean the cluttered rooms with the undead Rose and the android Ivy!
          (Source: Kadokawa, translated)
        </div>
      </Modal>
    </LayoutFull>
  );
};

export default DetailManga;
