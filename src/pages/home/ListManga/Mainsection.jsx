import React, { useState } from 'react';
import ItemManga from '../../../components/ItemManga';
const Mainsection = () => {
  const [tabActive, setTabActive] = useState('chapter');
  const handleChangeTab = (nameTab) => {
    setTabActive(nameTab);
  };
  return (
    <>
      <div className="lm-mainsection__header">
        <div className="title">LastUpdates</div>
        <div className="lm-mainsection__tabs">
          <div
            className={`tab-item ${tabActive == 'chapter' && 'active'}`}
            onClick={() => handleChangeTab('chapter')}
          >
            Chapter
          </div>
          <div
            className={`tab-item ${tabActive == 'volume' && 'active'}`}
            onClick={() => handleChangeTab('volume')}
          >
            Volume
          </div>
        </div>
      </div>
      <div className="lm-mainsection__list">
        {Array(10)
          .fill((index) => <ItemManga key={index} />)
          .map((item, index) => item(index))}
      </div>
    </>
  );
};

export default Mainsection;
