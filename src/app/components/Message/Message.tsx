import React, { ReactNode } from 'react';
import './Message.scss';
import { CheckCircleOutlined } from '@ant-design/icons';

interface MessageProps {
  children: ReactNode;
  className?: string;
}

const Message: React.FC<MessageProps> = ({ children, className = '' }) => {
  return (
    <div className={`c__Message ${className}`}>
      <CheckCircleOutlined />
      <span>{children}</span>
    </div>
  );
};

export default Message;