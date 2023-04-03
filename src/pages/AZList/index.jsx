import React from 'react';
import LayoutFull from '../../components/Layout';
import ItemManga from '../../components/ItemManga';
import SidebarMostViews from '../../components/MostViews/SidebarMostViews';
import '../../assets/styles/azList.css';
import { Link } from 'react-router-dom';
import { ConfigProvider, Pagination } from 'antd';
const AZList = () => {
  return (
    <LayoutFull isLogoFooter={true} isSearch={true} backgroundColor="default">
      <div className="az-mainsection">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">
              <span className="breadcrumb-item">Home</span>
            </Link>
            <span className="dot" style={{ background: '#aaa' }}></span>
            <span className="breadcrumb-item active">A-Z List</span>
          </div>
          <div id="az-list">
            <div className="az-mainContent">
              <div className="title">A-Z List</div>
              <div className="category_block">
                <div className="item active">All</div>
                <div className="item ">#</div>
                <div className="item ">0-9</div>

                <div className="item ">A</div>

                <div className="item ">B</div>

                <div className="item ">C</div>

                <div className="item ">D</div>

                <div className="item ">E</div>

                <div className="item ">F</div>

                <div className="item ">G</div>

                <div className="item ">H</div>

                <div className="item ">I</div>

                <div className="item ">J</div>

                <div className="item ">K</div>

                <div className="item ">L</div>

                <div className="item ">M</div>

                <div className="item ">N</div>

                <div className="item ">O</div>

                <div className="item ">P</div>

                <div className="item ">Q</div>

                <div className="item ">R</div>

                <div className="item ">S</div>

                <div className="item ">T</div>

                <div className="item ">U</div>

                <div className="item ">V</div>

                <div className="item ">W</div>

                <div className="item ">X</div>

                <div className="item ">Y</div>

                <div className="item ">Z</div>
              </div>

              <div className="az-mainsection__list">
                {Array(10)
                  .fill((index) => <ItemManga key={index} isTabs={true} />)
                  .map((item, index) => item(index))}
              </div>
              <div className="az-mainsection__paging">
                <ConfigProvider
                  theme={{
                    components: {
                      Pagination: {
                        colorBgContainer: '#3f3f3f',
                        colorText: '#999',
                        colorBorder: 'none',
                      },
                    },
                  }}
                >
                  <Pagination defaultCurrent={1} total={50} />
                </ConfigProvider>
              </div>
            </div>
            <div className="az-sidebar">
              <SidebarMostViews />
            </div>
          </div>
        </div>
      </div>
    </LayoutFull>
  );
};

export default AZList;
