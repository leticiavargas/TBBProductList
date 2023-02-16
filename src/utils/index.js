export function FilterProductsByCategory (products, categories) {
  if (categories.length === 0) return products;
  return products?.filter((product) => categories.includes(product.category._id))
};

export function FilterProductsByName (products, searchQuery) {
  return products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
}