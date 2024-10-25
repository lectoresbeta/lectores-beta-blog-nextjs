import React from 'react';
import './ArticleCard.scss';
import Author from '../Author/Author';
import Tag from '../Tag/Tag';

interface ArticleCardProps {
  id: string;
  title: string;
  tags: Category[];
  slug: string;
  imageUrl: string;
  authorAvatarUrl: string;
  authorName: string;
  authorLink: string;
  className?: string;
  publishedAt: string;
}

interface Category {
  name: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ id, title, tags, imageUrl, authorAvatarUrl, authorName, authorLink, className = '', publishedAt }) => {
  const formattedDate = new Date(publishedAt).toLocaleDateString('es-ES', {
    month: 'short',
    day: 'numeric'
  });

  return (
    <a href={`article/${id}`} className={`c__ArticleCard ${className}`}>
      <img src={imageUrl} alt={title} />
      <div className="c__ArticleCard__Tags">
        {tags.map((tag, index) => (
          <Tag key={index}>{tag.name}</Tag>
        ))}
      </div>
      <h1>{title}</h1>
      <hr/>
      <footer>
        <Author avatarUrl={authorAvatarUrl} name={authorName} link={authorLink} />
        <span className="c__ArticleCard__Date">
          {formattedDate}
        </span>
      </footer>
    </a>
  );
};

export default ArticleCard;