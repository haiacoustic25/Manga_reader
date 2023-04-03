import React, { useState } from 'react';
import { FaFileAlt } from '@react-icons/all-files/fa/FaFileAlt';
import { Link } from 'react-router-dom';

const ComponentToday = () => {
  return Array(10)
    .fill((index) => (
      <div className="ls-sidebar__item" key={index}>
        <div className="item-left">
          <Link to="/detail-manga" className="item-img">
            <img
              src="https://img.mreadercdn.com/_m/200x300/100/9e/b3/9eb352aed77fac4ab19cd3291a4ba58f/9eb352aed77fac4ab19cd3291a4ba58f.jpg"
              alt=""
            />
          </Link>
          <div className="item-infor">
            <Link to="/detail-manga">
              <h3 className="item-infor__title">Blue Lock</h3>
            </Link>
            <span>
              EN/FR/JA <span className="dot"></span>Shounen,Sports
            </span>
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
        <div className="item-right">
          <div className="item-number">01</div>
          <div className="item-views">13,984 views</div>
        </div>
      </div>
    ))
    .map((item, index) => item(index));
};
const ComponentWeek = () => {
  return Array(10)
    .fill((index) => (
      <div className="ls-sidebar__item" key={index}>
        <div className="item-left">
          <Link to="/detail-manga" className="item-img">
            <img
              src="https://img.mreadercdn.com/_m/200x300/100/32/58/3258a3978b806176a317ad0e48242a35/3258a3978b806176a317ad0e48242a35.jpg"
              alt=""
            />
          </Link>
          <div className="item-infor">
            <Link to="/detail-manga">
              <h3 className="item-infor__title">Blue Lock</h3>
            </Link>
            <span>
              EN/FR/JA <span className="dot"></span>Shounen,Sports
            </span>
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
        <div className="item-right">
          <div className="item-number">01</div>
          <div className="item-views">13,984 views</div>
        </div>
      </div>
    ))
    .map((item, index) => item(index));
};
const ComponentMonth = () => {
  return Array(10)
    .fill((index) => (
      <div className="ls-sidebar__item" key={index}>
        <div className="item-left">
          <Link to="/detail-manga" className="item-img">
            <img
              src="https://img.mreadercdn.com/_m/200x300/100/33/5c/335c2630179dae77a5caf05d297367e5/335c2630179dae77a5caf05d297367e5.jpg"
              alt=""
            />
          </Link>
          <div className="item-infor">
            <Link to="/detail-manga">
              <h3 className="item-infor__title">Blue Lock</h3>
            </Link>
            <span>
              EN/FR/JA <span className="dot"></span>Shounen,Sports
            </span>
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
        <div className="item-right">
          <div className="item-number">01</div>
          <div className="item-views">13,984 views</div>
        </div>
      </div>
    ))
    .map((item, index) => item(index));
};

const SidebarMostViews = () => {
  const [tab, setTab] = useState('today');
  const listTabs = [
    {
      key: 'today',
      label: 'Today',
      component: <ComponentToday />,
      onClick: () => setTab('today'),
    },
    {
      key: 'week',
      label: 'Week',
      component: <ComponentWeek />,
      onClick: () => setTab('week'),
    },
    {
      key: 'month',
      label: 'Month',
      component: <ComponentMonth />,
      onClick: () => setTab('month'),
    },
  ];
  return (
    <>
      <div className="title">Most Viewed</div>
      <div className="lm-sidebar__tabs">
        {listTabs.map((_) => (
          <div
            className={`lm-sidebar__tabs--item ${tab == _.key && 'active'}`}
            key={_.key}
            onClick={_.onClick}
          >
            {_.label}
          </div>
        ))}
      </div>
      <div className="ls-sidebar__list">{listTabs.find((_) => _.key == tab).component}</div>
    </>
  );
};

export default SidebarMostViews;
