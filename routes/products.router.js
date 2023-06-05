const express = require('express');
const ProductService = require('./../services/product.service');

const router = express.Router();
const service = new ProductService();

// INDEX - Obtiene todos los productos
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

// READ por ID - Obtiene un producto por su ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const product = await service.findOne(id);

  if (!product) {
    // Si el producto no existe, establece el estado HTTP en 404 (Not Found)
    res.status(404).json({ error: 'Product not found' });
  } else {
    // Si el producto existe, devuelve el producto y establece el estado HTTP en 200 (OK)
    res.status(200).json(product);
  }
});

// CREATE - Crea un nuevo producto
router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);

  // Establece el estado HTTP en 201 (Created) y devuelve el producto creado
  res.status(201).json({
    message: 'Item creado exitosamente',
    newProduct,
  });
});

// UPDATE - Actualiza un producto existente
router.patch('/:id', async (req, res) => {
  const body = req.body;
  const { id } = req.params;

  const product = await service.update(id, body);

  // Establece el estado HTTP en 200 (OK) y devuelve el producto actualizado
  res.status(200).json({
    message: `Item ${id} actualizado exitosamente`,
    product,
  });
});

// DELETE - Elimina un producto por su ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await service.delete(id);

  // Devuelve la respuesta de eliminación
  res.json(response);
});

module.exports = router;
