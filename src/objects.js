 const storeProduct = {
  name: "T-shirt",
  price: 100,
  inStock: true,
  category: "Clothing",
  tags: ["designer", "kids", "cavier"],
  rating: 3,
  manufacturer: "Dior"
};

const describeProduct = (product) => {
  console.log(`${product.name} was manufactured by ${product.manufacturer}, prices is ${product.price}. to purchase yours, check under the category: ${product.category} and check our tags which could be either: ${product.tags[0]} or ${product.tags[1]} or ${product.tags[2]}`);

};

const applyDiscount = (product, percent) => {
  discountPrice = product.price -= (product.price *= percent);
  console.log(discountPrice);
};

describeProduct(storeProduct);
applyDiscount(storeProduct, 0.1)