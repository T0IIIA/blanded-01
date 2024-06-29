import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from 'components';

import article from './data/article.json';
import stats from './data/stats.json';
import forbes from './data/forbes.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          name={article.name}
          postedAt={article.postedAt}
          poster={article.poster}
          tag={article.tag}
          title={article.title}
          description={article.description}
          avatar={article.avatar}
        />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" stats={stats} />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList list={forbes} />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory transactions={transactions} />
      </Container>
    </Section>
  );
};
