import React, { ReactNode } from 'react';
import './Tag.scss';

interface TagProps {
  children: ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <span className="c__Tag">{children}</span>
  );
};

export default Tag;