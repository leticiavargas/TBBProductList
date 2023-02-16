export function FilterProductsByCategory (products, categories) {
  if (categories.length === 0) return products;
  return products?.filter((product) => {
    if (categories.includes(product.category._id) ) {
      return product;
    }
  })
};

export function FilterProductsByName (products, searchQuery) {
  return products.filter((product) => {
    if (product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return product;
    }
  })
}