import React from 'react';
import Mainsection from './Mainsection';
import '../../../assets/styles/listManga.css';
import SidebarMostViews from '../../../components/MostViews/SidebarMostViews';
const ListManga = () => {
  return (
    <div className="lm-mainsection">
      <div className="container">
        <div className="lm-mainContent">
          <Mainsection />
        </div>
        <div className="lm-sidebar">
          <SidebarMostViews />
        </div>
      </div>
    </div>
  );
};

export default ListManga;
