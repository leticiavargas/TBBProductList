import productsData from './products.json';

export function useProducts () {
  return productsData.data.nodes;
}