import React from 'react';
import { FaFileAlt } from '@react-icons/all-files/fa/FaFileAlt';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const valueTabs = {
  CHAPTER: 0,
  VOLUME: 1,
};
const ItemManga = ({ isTabs = false }) => {
  const [tab, setTab] = useState(valueTabs.CHAPTER);
  const listTabs = [
    {
      key: valueTabs.CHAPTER,
      label: 'Chapter',
      onClick: () => setTab(valueTabs.CHAPTER),
      listItem: [
        {
          key: 0,
          value: 'Chap 61 [EN]',
        },
        {
          key: 1,
          value: 'Chap 61 [EN]',
        },
        {
          key: 2,
          value: 'Chap 61 [EN]',
        },
      ],
    },
    {
      key: valueTabs.VOLUME,
      label: 'Colume',
      onClick: () => setTab(valueTabs.VOLUME),
      listItem: [
        {
          key: 0,
          value: 'Vol 5 [EN]',
        },
        {
          key: 1,
          value: 'Vol 4 [EN]',
        },
        {
          key: 2,
          value: 'Vol 3 [EN]',
        },
      ],
    },
  ];
  return (
    <div className="lm-mainsection__item">
      <Link to="/detail-manga" className="item__img">
        <span className="tick tick-item tick-lang">EN/JA</span>
        <img
          src="https://img.mreadercdn.com/_m/300x400/100/c7/26/c726b1250e193c565874155bac5b78ad/c726b1250e193c565874155bac5b78ad.jpg"
          alt="I applied as a swordsman, but my magic aptitude is 9999?!"
        />
      </Link>
      <div className="item__infor">
        <div>
          <h3 className="item__title">
            <Link to="/detail-manga">
              I applied as a swordsman, but my magic aptitude is 9999?!
            </Link>
          </h3>
          <div className="fd-infor">
            <span className="fdi-item fdi-cate">Action, Fantasy, Shounen</span>
          </div>
          {isTabs && (
            <div className="fd-tabs">
              {listTabs.map((_) => (
                <span onClick={_.onClick} key={_.key} className={_.key == tab && 'active'}>
                  {_.label}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="fd-list">
          {listTabs
            .find((_) => _.key == tab)
            .listItem.map((item) => (
              <div className="fdl-item" key={item.key}>
                <FaFileAlt /> {item.value}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ItemManga;
