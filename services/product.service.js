// Importa el módulo 'faker' de la librería 'faker-js'
const { faker } = require('@faker-js/faker');

class ProductService {
  constructor() {
    // Array que almacenará los productos
    this.products = [];
    // Genera productos ficticios al instanciar la clase
    this.generate();
  }

  // Genera productos ficticios utilizando la librería 'faker'
  generate() {
    for (let index = 0; index < 100; index++) {
      this.products.push({
        id: faker.number.int({ max: 100 }),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.urlPicsumPhotos(),
      });
    }
  }

  // Crea un nuevo producto
  async create(data) {
    const newProduct = {
      id: faker.number.int({ max: 100 }),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  // Devuelve todos los productos
  async find() {
    return this.products;
  }

  // Busca un producto por su ID
  async findOne(id) {
    return this.products.find(item => item.id == id);
  }

  // Actualiza un producto existente
  async update(id, changes) {
    const index = this.products.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error('Product not found');
    }

    const product = this.products[index];

    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  // Elimina un producto por su ID
  async delete(id) {
    const index = this.products.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductService;
