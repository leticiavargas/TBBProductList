import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Section, Card } from 'components';
import './productsList.scss';

function ProductsList ({ products }) {
  const {t} = useTranslation();


  const total = useMemo(() => (products?.length), [products]);

  return(
    <Section title={t('productCount', {count: total})}>
      <div className='product-display'>
        <ul>
          {
            products?.map((product) => (
              <li key={product.id}>
                <Card product={product} />
              </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default ProductsList;