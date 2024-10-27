import ArticleHeader from '../../components/ArticleHeader/ArticleHeader';
import ArticleContent from '../../components/ArticleContent/ArticleContent';
import ArticleFooter from '../../components/ArticleFooter/ArticleFooter';
import Prefooter from '../../components/Prefooter/Prefooter';
import '../../styles/Article.scss';
import { Metadata } from 'next';

interface Article {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  content: Content[];
  cover: {
    formats: {
      small: { url: string };
      large: { url: string };
    };
  };
  author: {
    name: string;
    link: string;
    bio: string;
    avatar: {
      formats: {
        thumbnail: { url: string };
        small: { url: string };
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

interface Content {
  id: number;
  body: string;
}

type tParams = Promise<{id: string}>;

async function fetchArticle(id: string, token: string): Promise<Article | null> {
  const res = await fetch(
    `https://api.lectoresbeta.com/api/articles/${id}?populate[0]=cover&populate[1]=author&populate[2]=content&populate[3]=author.avatar&populate[4]=categories`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) return null;

  const result = await res.json();
  return result.data as Article;
}

export async function generateMetadata(props: {params: tParams}): Promise<Metadata> {
  const { id } = await props.params;
  const token = process.env.VITE_API_TOKEN ?? '';

  const article = await fetchArticle(id, token);

  if (!article) {
    return {
      title: 'Artículo no encontrado',
      description: 'No se encontró el artículo solicitado.',
    };
  }

  return {
    title: `${article.title} - Lectores Beta`,
    description: `Lee el artículo titulado ${article.title} de ${article.author.name}`,
    openGraph: {
      title: article.title,
      description: `Lee el artículo titulado ${article.title} de ${article.author.name}`,
      images: [article.cover.formats.large.url],
      url: `https://lectoresbeta.com/article/${article.documentId}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: `Lee el artículo titulado ${article.title} de ${article.author.name}`,
      images: [article.cover.formats.large.url],
    },
  };
}

export default async function ArticlePage(props: {params: tParams}) {
  const { id } = await props.params;
  const token = process.env.VITE_API_TOKEN ?? '';

  const article = await fetchArticle(id, token);

  if (!article) {
    return <p>No se encontró el artículo.</p>;
  }

  return (
    <div>
      <div className="l__Article">
        <ArticleHeader article={article} />
        <ArticleContent article={article} />
        <ArticleFooter article={article} />
      </div>
      <Prefooter />
    </div>
  );
}
