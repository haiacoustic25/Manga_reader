import { Drawer, Dropdown, Select, Space } from 'antd';

import React from 'react';
import TextArea from 'antd/es/input/TextArea';
import ItemComment from './ItemComment';

const Comment = ({ onClose, open }) => {
  const onChange = (e) => {
    console.log('Change:', e.target.value);
  };
  return (
    <Drawer title="Comment" placement="right" onClose={onClose} open={open} width={500}>
      <div className="rm-comment-drawer">
        <div className="rm-comment-header">
          <span>6460 Comments</span>
          <Select
            className="rm-language"
            defaultValue="Sort by"
            // style={{ width: '100%', margin: '10px 0' }}
            // onChange={handleChange}
            options={[
              {
                label: 'Top',
                value: '0',
              },
              {
                label: 'Newest',
                value: '1',
              },
              {
                label: 'Oldest',
                value: '2',
              },
            ]}
          />
        </div>
        <div className="rm-comment__item">
          <div className="rm-comment__avt">
            <img
              src="https://img.mreadercdn.com/_m/100x100/100/avatar/dragon_ball/av-db-01.jpeg"
              alt=""
            />
          </div>
          <div className="rm-comment__content">
            <span className="rm-comment__note">
              You must be <p>login</p> to post a comment
            </span>
            <TextArea
              showCount
              maxLength={100}
              style={{ height: 70, marginBottom: 24, width: '100%' }}
              onChange={onChange}
              placeholder="Leave a comment"
            />
          </div>
        </div>
        <ItemComment />
      </div>
    </Drawer>
  );
};

export default Comment;
