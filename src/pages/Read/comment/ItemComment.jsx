import React, { useState } from 'react';
import { FaReply } from '@react-icons/all-files/fa/FaReply';
import { AiOutlineLike } from '@react-icons/all-files/ai/AiOutlineLike';
import { AiOutlineDislike } from '@react-icons/all-files/ai/AiOutlineDislike';
import { HiOutlineDotsHorizontal } from '@react-icons/all-files/hi/HiOutlineDotsHorizontal';
import { RiArrowDropDownFill } from '@react-icons/all-files/ri/RiArrowDropDownFill';
import { RiArrowDropUpFill } from '@react-icons/all-files/ri/RiArrowDropUpFill';
import { Dropdown, Space } from 'antd';
const ItemComment = () => {
  const [isOpenCommentChild, setIsOpenCommentChild] = useState(false);
  const items = [
    {
      label: 'Report Spam',
      key: '0',
    },
    {
      label: 'Report Spoil',
      key: '1',
    },
  ];
  const renderTitle = () => {
    if (!isOpenCommentChild)
      return (
        <div className="rm-comment__children-title" onClick={() => setIsOpenCommentChild(true)}>
          <RiArrowDropDownFill style={{ fontSize: '20px' }} />
          <span>View 2 replies</span>
        </div>
      );

    return (
      <div className="rm-comment__children-title" onClick={() => setIsOpenCommentChild(false)}>
        <RiArrowDropUpFill style={{ fontSize: '20px' }} />
        <span>Hide 2 replies</span>
      </div>
    );
  };
  return (
    <div className="rm-comment__item">
      <div className="rm-comment__avt">
        <img
          src="https://img.mreadercdn.com/_m/100x100/100/avatar/dragon_ball/av-db-01.jpeg"
          alt=""
        />
      </div>
      <div className="rm-comment__content">
        <div className="rm-comment__name">
          <span>Zach</span>
          <span>13 hours ago</span>
        </div>
        <div className="rm-comment__text">
          just did the math and the players are making more than the people in wnba
        </div>
        <div className="rm-comment__action">
          <div className="rm-comment__action-item">
            <FaReply style={{ fontSize: '10px', marginRight: '5px' }} /> Reply
          </div>
          <div className="rm-comment__action-item">
            <AiOutlineLike style={{ fontSize: '10px', marginRight: '5px' }} /> 4
          </div>
          <div className="rm-comment__action-item">
            <AiOutlineDislike style={{ fontSize: '10px', marginRight: '5px' }} />
          </div>
          <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
            <Space>
              <div className="rm-comment__action-item more">
                <HiOutlineDotsHorizontal style={{ fontSize: '15px' }} />
                <span>More</span>
              </div>
            </Space>
          </Dropdown>
        </div>
        <div className="rm-comment__children">
          {renderTitle()}
          {isOpenCommentChild && <ItemComment />}
        </div>
      </div>
    </div>
  );
};

export default ItemComment;
