const express = require('express');
const router = express.Router();
const router2 = express.Router();
const ProductController = require('../controllers/productController');
const ViewsController = require('../controllers/viewsController');


//api
router.get('/products', ProductController.fetchAllProducts);
router.get('/products/total-price', ProductController.totalPriceOfProducts);

router.get('/products/search/:search', ProductController.searchProducts);

router.post('/products', ProductController.addProduct);

router.get('/products/:id', ProductController.getProductById);

router.put('/products/:id', ProductController.updateProduct);

router.delete('/products/:id', ProductController.deleteProduct);


//views
router2.get('/', ViewsController.home);
router2.get('/add-product', ViewsController.form_add);
router2.get('/edit-product/:id', ViewsController.form_edit);

module.exports = {
    apiRouter : router,
    viewsRouter : router2
};