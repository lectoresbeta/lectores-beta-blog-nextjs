// app/article/[id]/page.tsx
import ArticleHeader from '../../components/ArticleHeader/ArticleHeader';
import ArticleContent from '../../components/ArticleContent/ArticleContent';
import ArticleFooter from '../../components/ArticleFooter/ArticleFooter';
import Prefooter from '../../components/Prefooter/Prefooter';
import '../../styles/Article.scss';

interface Article {
  id: number;
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

// Parámetro de tipo de datos para la función asincrónica
interface ArticlePageProps {
  params: { id: string };
}

// Función que se ejecuta en el servidor y obtiene los datos
export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params
  const token = process.env.VITE_API_TOKEN;

  // Llamada a la API en el servidor
  const res = await fetch(
    `https://api.lectoresbeta.com/api/articles/${id}?populate[0]=cover&populate[1]=author&populate[2]=author.avatar&populate[3]=categories&populate[4]=content`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) {
    return <p>No se encontró el artículo.</p>; // Error en la llamada
  }

  const result = await res.json();
  const article: Article = result.data;

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
