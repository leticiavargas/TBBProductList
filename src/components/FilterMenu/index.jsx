import { Section, Checkbox } from 'components';
import './filterMenu.scss';

function FilterMenu ({ categories }) {
  return (
    <Section title="Filtros" className="filter-section">
      <ul>
        {
          categories?.sort((a,b) => b.count - a.count)
          .map(({ name, count }) => (
            <li key={name}>
              <Checkbox />
              <label className='category'>{name} ({count})</label>
            </li>
          ))
        }
      </ul>
    </Section>
  )
}

export default FilterMenu;