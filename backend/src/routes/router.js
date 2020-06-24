const Router = require('koa-router');
const router = new Router();

const userController = require('../controllers/user');
const productController = require('../controllers/products');
const orderController = require('../controllers/orders');

router.get('/api/v1/users', userController.getUsers);
router.get('/api/v1/users/profile/', userController.getCurrentUser);
router.get('/api/v1/users/:id', userController.getUser);
router.post('/api/v1/users/register', userController.registerUser);
router.post('/api/v1/users/login', userController.login);
router.post('/api/v1/users/logout', userController.logout);
router.put('/api/v1/users/:id', userController.editUser);
router.delete('/api/v1/users/:id', userController.deleteUser);

router.get('/api/v1/products', productController.getProducts);
router.post('/api/v1/products', productController.addProduct);
router.get('/api/v1/products/:id', productController.getProduct);
router.put('/api/v1/products/:id', productController.editProduct);
router.delete('/api/v1/products/:id', productController.deleteProduct);

router.post('/api/v1/orders', orderController.addOrder);
router.get('/api/v1/orders/:id', orderController.getOrder);
router.put('/api/v1/orders/:id', orderController.editStatusOfOrder);
router.get('/api/v1/users/:id/orders', orderController.getOrders);

module.exports = router;
