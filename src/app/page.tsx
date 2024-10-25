import Hero from './components/Hero/Hero';
import './styles/SectionWhite.scss';
import './styles/SectionDark.scss';
import ArticleCard from './components/ArticleCard/ArticleCard';
import Quote from './components/Quote/Quote';
import Prefooter from './components/Prefooter/Prefooter';
import { Carousel } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

interface Category {
  name: string;
}

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
    avatar: {
      formats: {
        thumbnail: {
          url: string;
        };
      };
    };
  },
  categories: Category[];
  publishedAt: string;
}

interface quote {
  content: string;
  authorName: string;
  authorRole: string;
}

const quotes:quote[] = [
  {
    content: "Hay muchas personas que escriben como hobby, pero no se atreven a compartir sus relatos. En Lectores Beta recibirás feedback constructivo de lectores apasionados por la lectura y la escritura. La práctica hace que mejores, pero si tienes a alguien que te indica cuáles son tus carencias, puedes mejorar enormemente.",
    authorName: "Pirra Smith",
    authorRole: "Correctora profesional",
  },
  {
    content: "Me resulta interesante ya solo por la idea base de poner en contacto a gente dispuesta a leer y comentar con gente que tiene cosas escritas que necesitan valoración.",
    authorName: "Susanna",
    authorRole: "Escritora",
  },
  {
    content: "Contar con lectores beta es siempre una ayuda inestimable para el escritor. Son un detector de defectos, puntos flacos, clichés o aspectos mal resueltos en tu obra. Y además te permiten hacerte una idea de cuál va a ser la acogida de los lectores. ¿Quién da más?",
    authorName: "Sinjania",
    authorRole: "Formación para escritores",
  },
  {
    content: "Dar con lectores beta que entiendan cómo funciona una historia y puedan aportar críticas constructivas a tu manuscrito no es sencillo. Por suerte, esta página llega para convertirse en el punto de encuentro perfecto para todos aquellos que queremos seguir mejorando como escritores.",
    authorName: "Literautas",
    authorRole: "Blog sobre narrativa",
  },
];

const HomePage = async () => {
  
  const token = process.env.VITE_API_TOKEN;

  const res = await fetch(
    'https://api.lectoresbeta.com/api/articles?populate[0]=author.avatar&populate[1]=categories&populate[2]=cover&pagination[pageSize]=3&sort[1]=publishedAt:desc',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  const result = await res.json();

  const articles: Article[] = result.data.map((item: Article) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    slug: item.slug,
    cover: {
      formats: {
        thumbnail: { url: item.cover.formats.thumbnail.url },
        small: { url: item.cover.formats.small.url },
      },
    },
    author: {
      name: item.author?.name || 'Autor desconocido',
      avatarUrl: item.author?.avatar?.formats?.thumbnail?.url || 'default-avatar.jpg',
      link: item.author.link,
    },
    categories: item.categories ? item.categories.map((category: Category) => category) : [],
    publishedAt: item.publishedAt,
  }));
  return (
    <div>
      <Hero />

      <section className="c__SectionWhite">
        <div className="slim">
          <h2>¿Cómo funciona?</h2>
          <p>Recibes lo que das. Nuestro sistema de créditos te permite recibir tanto feedback como aportes a la comunidad.</p>
          <ul>
            <li>
              <span className="c__SectionWhite__Number">1.</span>
              <h3>Lee y comenta a cambio de créditos</h3>
              <p>Accede a obras inéditas y comparte tus comentarios y sugerencias...</p>
            </li>
            <li>
              <span className="c__SectionWhite__Number">2.</span>
              <h3>Publica tus escritos y pide feedback</h3>
              <p>Sube tu propia obra y utiliza tus créditos para recibir feedback personalizado...</p>
            </li>
            <li>
              <span className="c__SectionWhite__Number">3.</span>
              <h3>Mejora tu obra con el feedback recibido</h3>
              <p>Usa los comentarios y sugerencias que recibas para pulir tu obra...</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="c__SectionDark">
        <div>
          <div>
            <h3>Lee obra inédita personalizada según tus intereses</h3>
            <p>Sumérgete en una experiencia literaria única con obras inéditas...</p>
          </div>
          <img src="/app-mockup1.png" alt="Mockup" />
        </div>
      </section>

      <section className="c__SectionWhite">
        <div>
          <h2>Los mejores recursos para escritores</h2>
          <p>Suscríbete a nuestro blog y podrás estar al tanto de recursos para escritores...</p>

          <div className="c__SectionWhite__Articles">
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
          <div className="c__SectionWhite__ExploreResources">
            <a href="/recursos">Explorar recursos <ArrowRightOutlined /></a>
          </div>
        </div>
      </section>

      <section className="c__SectionDark TextRight">
        <div>
          <img src="/app-mockup2.png" alt="Mockup" />
          <div>
            <h3>Muéstrate al mundo con tu perfil de autor</h3>
            <p>Organiza tus escritos en tu espacio personalizado. Comparte tu biografía...</p>
          </div>
        </div>
      </section>

      <section className="c__SectionWhite">
        <div className="c__SectionWhite__Testimonial">
          <h2>Dicen de nosotros</h2>
          <Carousel autoplay arrows autoplaySpeed={10000} dots>
            {quotes.map((quote, index) => (
              <Quote
                key={index}
                content={quote.content}
                authorName={quote.authorName}
                authorRole={quote.authorRole} 
              />
            ))}
          </Carousel>
        </div>
      </section>
      
      <Prefooter />
    </div>
  );
};

export default HomePage;