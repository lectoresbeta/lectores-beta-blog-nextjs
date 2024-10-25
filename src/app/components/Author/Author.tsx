import React from 'react';
import AuthorAvatar from '../AuthorAvatar/AuthorAvatar';
import './Author.scss';

interface AuthorProps {
  avatarUrl: string;
  name: string;
  link: string;
}

const Author: React.FC<AuthorProps> = ({ avatarUrl, name }) => {

  return (
    <div className="c__Author">
      <AuthorAvatar imageUrl={avatarUrl} />
      <span>{name}</span>
    </div>
  );
};

export default Author;