// Importa el módulo 'faker' de la librería 'faker-js'
const { faker } = require('@faker-js/faker');

class ProductService {
  constructor() {
    // Array que almacenará los productos
    this.products = [];
    // Genera productos ficticios al instanciar la clase
    this.generate();
  }

  /**
   * Genera productos ficticios utilizando la librería 'faker' y los agrega al arreglo de productos.
   */
  generate() {
    for (let index = 0; index < 100; index++) {
      this.products.push({
        id: faker.number.int({ max: 100 }),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.urlPicsumPhotos(),
        created_at: faker.date.anytime(),
      });
    }
  }

  /**
   * Crea un nuevo producto y lo agrega al arreglo de productos.
   * @param {object} data - Datos del producto a crear.
   * @returns {object} - El producto creado.
   */
  async create(data) {
    const newProduct = {
      id: faker.number.int({ max: 100 }),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  /**
   * Devuelve todos los productos almacenados en el arreglo de productos.
   * @returns {array} - Arreglo de productos.
   */
  async find() {
    return this.products;
  }

  /**
   * Busca un producto por su ID en el arreglo de productos.
   * @param {number} id - ID del producto a buscar.
   * @returns {object|null} - El producto encontrado o null si no se encuentra.
   */
  async findOne(id) {
    return this.products.find(item => item.id == id);
  }

  /**
   * Actualiza un producto existente en el arreglo de productos.
   * @param {number} id - ID del producto a actualizar.
   * @param {object} changes - Cambios a aplicar al producto.
   * @returns {object} - El producto actualizado.
   * @throws {Error} - Si el producto no se encuentra.
   */
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

  /**
   * Elimina un producto por su ID del arreglo de productos.
   * @param {number} id - ID del producto a eliminar.
   * @returns {object} - Objeto que indica el ID del producto eliminado.
   * @throws {Error} - Si el producto no se encuentra.
   */
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
