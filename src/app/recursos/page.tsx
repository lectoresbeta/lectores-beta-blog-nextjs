import '../styles/SectionWhite.scss';
import '../components/ArticlesGrid/ArticlesGrid.scss';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import Prefooter from '../components/Prefooter/Prefooter';

interface Article {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  cover: {
    formats: {
      thumbnail: {
        url: string;
      };
      small: {
        url: string;
      };
    };
  };
  author: {
    name: string;
    avatarUrl: string;
    link: string;
  };
  categories: string[];
  publishedAt: string;
}

const BlogPage = async () => {
  const token = process.env.VITE_API_TOKEN;

  const res = await fetch('https://api.lectoresbeta.com/api/articles?populate[0]=author.avatar&populate[1]=categories&populate[2]=cover&pagination[pageSize]=9&sort[1]=publishedAt:desc', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  const result = await res.json();

  const articles: Article[] = result.data.map((item: any) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    slug: item.slug,
    cover: {
      formats: {
        thumbnail: {
          url: item.cover.formats.thumbnail.url,
        },
        small: {
          url: item.cover.formats.small.url,
        },
      },
    },
    author: {
      name: item.author?.name || 'Autor desconocido',
      avatarUrl: item.author?.avatar?.formats?.thumbnail?.url || 'default-avatar.jpg',
      link: item.author?.link,
    },
    categories: item.categories ? item.categories.map((category: any) => category.name) : [],
    publishedAt: item.publishedAt,
  }));

  return (
    <div>
      <div className='c__SectionWhite'>
        <div className="slim">  
          <h2>Recursos para escritores</h2>
          <p>Suscríbete para estar al tanto de los mejores recursos para escritores, novedades, convocatorias
            de concursos, workshops de escritura, etc.</p>
        </div>
      </div>

      <div className="c__ArticlesGrid">
        {articles.length === 0 ? (
          <p>No se encontraron artículos.</p>
        ) : (
          <div>
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.documentId}
                title={article.title}
                tags={article.categories}
                slug={article.slug}
                imageUrl={article.cover.formats.small.url}
                authorAvatarUrl={article.author.avatarUrl}
                authorName={article.author.name}
                authorLink={article.author.link}
                publishedAt={article.publishedAt}
              />
            ))}
          </div>
        )}
      </div>

      <Prefooter />
    </div>
  );
};

export default BlogPage;
