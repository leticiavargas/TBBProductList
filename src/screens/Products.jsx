import { useMemo, useState } from 'react';
import { useProducts } from 'hooks/useProducts';
import { Header, ProductsList, CategoryList } from 'components';
import { FilterProductsByCategory, FilterProductsByName } from 'utils'; 

import './products.scss';

function Products () {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState([]);
  const products = useProducts();

  const filteredProducts = useMemo(() => {
    if (categoryFilter.length === 0 && search === '') 
      return products;
    else {
      const firstFilter = FilterProductsByCategory(products, categoryFilter);
      return FilterProductsByName(firstFilter, search);
    }
  }, [search, categoryFilter, products]);

  const handleCategoryFilter = (event) => {
    let updatedList = [...categoryFilter];
    if (event.target.checked) {
      updatedList = [...categoryFilter, event.target.value];
    } else {
      updatedList.splice(categoryFilter.indexOf(event.target.value), 1);
    }
    setCategoryFilter(updatedList);
  };

  const categories = useMemo(() => {
    const categoriesData = search === '' ? products : filteredProducts;
    return categoriesData?.reduce((categories, product) => {
      const category = categories.find(c => c._id === product.category._id);
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
  }, [filteredProducts, products, search]);

  return (
    <main className="products">
      <Header search={search} onSearch={setSearch} />
      <section className='body'>
        <CategoryList 
          categories={categories} 
          filter={categoryFilter} 
          onFilter={handleCategoryFilter}
        />
        <ProductsList products={filteredProducts} />
      </section>
    </main>
  );
}

export default Products;
