import React from 'react';
import "./ArticleFooter.scss";
import AuthorAvatar from '../AuthorAvatar/AuthorAvatar';
import IconLinkExternal01 from '../../assets/icons/LinkExternal01.svg';


interface Article {
  title: string;
  author: {
    name: string;
    link: string;
    bio: string;
    avatar: {
      formats: {
        thumbnail: {
          url: string;
        };
        small: {
          url: string;
        };
      };
    };
  };
  publishedAt: string;  
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
}

interface ArticleContentProps {
  article: Article;
}

const ArticleFooter: React.FC<ArticleContentProps> = ({ article }) => {
  return (
    <div className="c__ArticleFooter">
      <AuthorAvatar imageUrl={article.author.avatar.formats.small.url} />
      <div>
        <strong>Escrito por: {article.author.name}</strong>
        <br/>
        <br/>
        <p>
          {article.author.bio}
        </p>
        <div className="c__ArticleFooter__Visit">
          <a href={article.author.link} target='_blank'>Visitar web <IconLinkExternal01 /></a>
        </div>
      </div>
    </div>
  );
};

export default ArticleFooter;