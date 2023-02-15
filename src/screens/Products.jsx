import './products.scss';
import { useProducts } from '../hooks/useProducts';

function Products () {

  const products = useProducts();
  console.log(products);

  return (
    <div className="products">
      <ul>
        {products.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
