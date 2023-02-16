import './products.scss';
import { useProducts } from '../hooks/useProducts';
import { Card, Header, ProductDisplay, FilterMenu } from '../components';
import { useEffect, useMemo, useState } from 'react';

function Products () {

  const [search, setSearch] = useState('');
  const products = useProducts();
  console.log(products);


  const filteredProducts = useMemo(() => {
    if (search === '') return products;
    return products.filter((product) => {
      if (product.name.toLowerCase().includes(search.toLowerCase())) {
        return product;
      }
    })
  }, [search, products]);

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
        <ProductDisplay products={filteredProducts} />
       
      </div>
      
    </div>
  );
}

export default Products;
