import { useMemo } from 'react';
import { Section, Card } from 'components';
import './productDisplay.scss';

function ProductDisplay ({ products }) {

  const productResultTitle = useMemo(() => {
    const total = products?.length;
    if (total == 0)
      return 'Nenhum resultado';
    else
     return total + (total > 1 ? ' resultados' : ' resultado');
  }, [products]);

  return(
    <Section title={productResultTitle}>
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

export default ProductDisplay;