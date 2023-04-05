"use strict"
// configuración de las rutas

var express = require("express");
var router = express.Router();
var multipart = require("connect-multiparty");
var multipartMiddleWare = multipart({ uploadDir: "./archivos" });

//importacion de controladores 
var ProductController = require('../controller/ProductController')
var ClientController = require('../controller/ClientController')
var PymeController = require('../controller/PymeController')
var PymeController = require('../controller/PymeController')
var OrderController = require('../controller/OrderController')
var WalletController = require('../controller/WalletController')
var TransactionController = require('../controller/TransactionController')
var SuscriptionController = require('../controller/SuscriptionController')
var InvestmentController = require('../controller/InvestmentController')
//rutas para cliente
router.post('/saveClient',ClientController.saveClient);
router.get('/getClient/:id',ClientController.getClient);
router.get('/getExistence/:id',ClientController.getExistence);
router.put('/updateClient/:id',ClientController.updateClient);
router.put('/updateKart/:id',ClientController.updateKart);
//rutas para PYMES
router.post('/savePyme',PymeController.savePyme);
router.get('/getPyme/:id',PymeController.getPyme);
router.get('/getPymes',PymeController.getPymes);
router.get('/getPymesByCategory/:searchBy',PymeController.getPymesByCategory);
router.get('/getExistence/:id',PymeController.getExistence);
router.put('/updatePyme/:id',PymeController.updatePyme);
//rutas para producto
router.post("/SaveProduct", ProductController.saveProduct);
router.get("/GetProduct/:id", ProductController.getProduct);
router.get("/GetProducts", ProductController.getProducts);
router.put("/UpdateProduct/:id", ProductController.updateProduct);
router.delete("/DeleteProduct/:id", ProductController.deleteProduct);
router.post("/UploadImagen/:id", multipartMiddleWare, ProductController.uploadImagen);
router.get("/GetImagen/:image", ProductController.getImageFile);
router.get("/getProductByName/:searchBy", ProductController.getProductByName);
router.get("/getProductsById/:id", ProductController.getProductsById);
//rutas para las ordenes
router.post('/saveOrder',OrderController.saveOrder);
router.get('/getOrder/:id',OrderController.getOrder);
router.get('/getOrders/:id',OrderController.getOrders);
// ruta para la billetera
router.get('/getWallet/:id',WalletController.getWallet);
//rutas para suscripciones
router.post('/saveSuscription',SuscriptionController.saveSuscription);
router.get('/getSuscription:id',SuscriptionController.getSuscription);
router.get('/getSuscriptionsClient:id',SuscriptionController.getSuscriptionsClient);
router.get('/getSuscriptionsPyme:id',SuscriptionController.getSuscriptionsPyme);
//rutas para inversiones
router.post('/saveInvestment',InvestmentController.saveInvestment);
router.get('/getInvestment:id',InvestmentController.getInvestment);
router.get('/getInvestmentClient:id',InvestmentController.getInvestmentsClient);
router.get('/getInvestmentsPyme:id',InvestmentController.getInvestmentsPyme);
//rutas para transacciones
router.post('/saveTransaction',TransactionController.saveTransaction);
router.get('/getTransaction/:id',TransactionController.getTransaction);
router.get('/getTransaction/:id',TransactionController.getTransaction);
// Se exporta el modulo para importarlo en app

module.exports = router;