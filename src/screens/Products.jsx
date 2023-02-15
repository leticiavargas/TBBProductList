import './products.scss';
import { useProducts } from '../hooks/useProducts';
import { Card, Header, Section, FilterMenu } from '../components';
import { useEffect, useMemo, useState } from 'react';

function Products () {

  const [search, setSearch] = useState('');
  const products = useProducts();
  console.log(products);


  const filteredProducts = useMemo(() => {
    console.log('no filtered >>', search)
    if (search === '') return products;
    return products.filter((product) => {
      if (product.name.toLowerCase().includes(search.toLowerCase())) {
        return product;
      }
    })
  }, [search, products]);

  const productResultTitle = useMemo(() => {
    const total = filteredProducts?.length;
    if (total == 0)
      return 'Nenhum resultado';
    else
     return total + (total > 1 ? ' resultados' : ' resultado');
  }, [filteredProducts]);

  const categories = useMemo(() => {
    return filteredProducts?.reduce((categories, product) => {
      const category = categories.find(c => c._id == product.category._id);

      if (category) {
        category.count += 1;
      } else {
        categories.push({
          _id: product.category._id,
          name: product.category.name,
          count: 1
        })
      }
      return categories
    }, []);
  }, [filteredProducts]);

  return (
    <div className="products">
      <Header search={search} setSearch={setSearch} />
      <div className='body'>
        <FilterMenu categories={categories} />
        <Section title={productResultTitle}>
          <ul>
            {filteredProducts?.map((product) => (
              <li>{product.name}</li>
            ))}
          </ul>
        </Section>
       
      </div>
      
    </div>
  );
}

export default Products;
