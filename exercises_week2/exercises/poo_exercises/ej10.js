class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  calculateTotalPrice(quantity) {
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(id, name, price, warrantyPeriod) {
    super(id, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  calculateTotalPrice(quantity) {
    const totalPrice = super.calculateTotalPrice(quantity);
    return totalPrice + this.warrantyPeriod;
  }
}

// instance of PersonalCareProduct
const personalCareProduct = new PersonalCareProduct(1, 'Shampoo', 10, 2);
console.log(`Total Price: $${personalCareProduct.calculateTotalPrice(3)}`); 

// instance of Product
const product = new Product(2, 'Soap', 5);
console.log(`Total Price: $${product.calculateTotalPrice(4)}`); 