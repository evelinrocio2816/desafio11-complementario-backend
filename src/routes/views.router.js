const express = require("express");
const router = express.Router();
const ViewsController = require("../controllers/views.controllers.js");
const viewsController = new ViewsController();
const checkUserRole = require("../middleware/checkrole.js");
const passport = require("passport");

router.get("/products", checkUserRole(['user', 'premium']),passport.authenticate('jwt', { session: false }), viewsController.renderProducts);
router.get("/carts/:cid", viewsController.renderCart);
router.get("/login", viewsController.renderLogin);
router.get("/register", viewsController.renderRegister);
router.get("/realtimeproducts", checkUserRole(['admin','premium']), viewsController.renderRealTimeProducts);
router.get("/chat", checkUserRole(['user', 'premium']) ,viewsController.renderChat);
router.get("/", viewsController.renderHome);

//Tercer integradora: 
router.get("/reset-password", viewsController.renderResetPassword);
router.get("/password", viewsController.renderChangePassword);
router.get("/confirmation-env", viewsController.renderConfirmation);
router.get("/panel-premium", viewsController.renderPremium);

// Ruta para obtener los detalles del producto
router.get('/products/:pid', viewsController.renderProductDetails);

module.exports = router;

