import React, { useState } from 'react';
import discussionBg from '../../assets/img/discussion-bg.svg';
import discussion from '../../assets/img/discussion.png';
import '../../assets/styles/listCommentHome.css';
import { FaFileAlt } from '@react-icons/all-files/fa/FaFileAlt';
const ListComment = () => {
  const [tab, setTab] = useState('new');
  const listTab = [
    {
      name: 'new',
      value: 'Newest Comments',
      onClick: () => setTab('new'),
    },
    {
      name: 'top',
      value: 'Top Comments',
      onClick: () => setTab('top'),
    },
  ];
  // const renderTab = ()
  return (
    <div id="discussion">
      <div className="discussion-bg">
        <img src={discussionBg} />
      </div>
      <div className="container">
        <div className="discussion-content">
          <div className="discussion-img">
            <img src={discussion} alt="" />
          </div>
          <div className="comment">
            <div className="discussion-tab">
              {listTab.map((item) => (
                <div
                  className={`discussion-tab-item ${tab == item.name && 'active'}`}
                  key={item.name}
                  onClick={item.onClick}
                >
                  {item.value}
                </div>
              ))}
            </div>
            <div className="listComment">
              {Array(8)
                .fill((index) => (
                  <div className="comment-item" key={index}>
                    <div className="comment-item__infor">
                      <div className="comment-avatar">
                        <img
                          src="https://img.mreadercdn.com/_m/100x100/100/avatar/one_piece/user-02.jpeg"
                          className="user-avatar-img"
                          alt="carambola"
                        />
                      </div>
                      <div className="about">
                        <div className="username">carambola</div>
                        <div className="time"> - 3 minutes ago</div>
                      </div>
                    </div>
                    <div className="comment-inline">
                      <div className="text-cut">that last page was cute as fu*k</div>
                      <div className="on-chapt">
                        <FaFileAlt /> Monthly Girls' Nozaki-kun
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                ))
                .map((item, index) => item(index))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListComment;
