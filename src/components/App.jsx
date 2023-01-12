import PaintingList from '../components/PaintingList';
import Section from '../components/Section';
import paintings from '../components/paintings.json';

export const App = () => {
  return (
    <div>
      <Section title='Топ недели'>
        <PaintingList items={paintings} />
      </Section>
      <Section />
    </div>
  );
};
