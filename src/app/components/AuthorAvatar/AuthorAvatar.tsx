import React from 'react';
import { Avatar } from 'antd';
import "./AuthorAvatar.scss";

interface AuthorAvatarProps {
  imageUrl: string;
}

const AuthorAvatar: React.FC<AuthorAvatarProps> = ({ imageUrl }) => {
  return (
    <div className='c__AuthorAvatar'>
      <Avatar src={imageUrl} size="large" />
    </div>
  );
};

export default AuthorAvatar;