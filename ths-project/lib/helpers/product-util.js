import DUMMY_PRODUCTS from "@/data/DUMMY_PRODUCTS";

export function getAllProducts() {
  return DUMMY_PRODUCTS;
}

export function getProductById(id) {
  return DUMMY_PRODUCTS.find((item) => item.id === id);
}

export function getFeaturedProducts() {
  return DUMMY_PRODUCTS.filter((item) => item.featured);
}
