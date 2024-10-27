"use client";

import React from 'react';
import { FacebookOutlined, XOutlined, LinkOutlined } from '@ant-design/icons';
import './ShareButtons.scss';
import IconMail from '../../assets/icons/Mail.svg';

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    alert('Enlace copiado al portapapeles');
  };

  return (
    <div className="c__ShareButtons">
      <small>COMPARTE:</small>
      <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" title="Compartir en Facebook">
        <FacebookOutlined />
      </a>
      <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" title="Compartir en Twitter">
        <XOutlined />
      </a>
      <a href={shareLinks.email} title="Compartir por Email">
        <IconMail />
      </a>
      <button onClick={handleCopyLink} title="Copiar enlace">
        <LinkOutlined />
      </button>
    </div>
  );
};

export default ShareButtons;
