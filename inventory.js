// Define a class for products
class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Method to calculate total value of the product
    getTotalValue() {
        return this.price * this.quantity;
    }
}

// Define a class for inventory management
class Inventory {
    constructor() {
        this.products = [];
    }

    // Method to add a product to the inventory
    addProduct(product) {
        this.products.push(product);
    }

    // Method to remove a product from the inventory by ID
    removeProductById(id) {
        this.products = this.products.filter(product => product.id !== id);
    }

    // Method to update product quantity by ID
    updateProductQuantity(id, newQuantity) {
        this.products.forEach(product => {
            if (product.id === id) {
                product.quantity = newQuantity;
            }
        });
    }

    // Method to calculate total value of the inventory
    getTotalInventoryValue() {
        let totalValue = 0;
        this.products.forEach(product => {
            totalValue += product.getTotalValue();
        });
        return totalValue;
    }

    // Method to display all products in the inventory
    displayProducts() {
        console.log("Products in Inventory:");
        this.products.forEach(product => {
            console.log(`${product.id} - ${product.name} | Price: $${product.price} | Quantity: ${product.quantity}`);
        });
    }
}

// Create instances of products
const product1 = new Product(1, "Laptop", 1000, 5);
const product2 = new Product(2, "Mouse", 20, 10);
const product3 = new Product(3, "Keyboard", 50, 8);

// Create an instance of inventory
const inventory = new Inventory();

// Add products to inventory
inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

// Display products in inventory
inventory.displayProducts();

// Update product quantity
inventory.updateProductQuantity(2, 15);

// Display updated products in inventory
inventory.displayProducts();

// Remove product from inventory
inventory.removeProductById(3);

// Display updated products in inventory
inventory.displayProducts();

// Get total value of inventory
console.log("Total Inventory Value: $" + inventory.getTotalInventoryValue());
