import { Section, Checkbox } from 'components';
import './categoryList.scss';

function CategoryList ({ categories, filter, onFilter }) {
  return (
    <Section title="Filtros" className="filter-section">
      <ul>
        {
          categories?.sort((a,b) => b.count - a.count)
          .map(({ name, count, _id }) => {
            const isChecked = filter.includes(_id);
            return (
              <li key={name}>
                <Checkbox value={_id} checked={isChecked} onChange={onFilter} />
                <label className='category'>{name} ({count})</label>
              </li>
            )})
        }
      </ul>
    </Section>
  )
}

export default CategoryList;