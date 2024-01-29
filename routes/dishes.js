const router = require("express").Router();
const jwtAuth = require("../middleware/jwtAuth");
const {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/dishes_controller");

//CRUD
//Read
//Create

router.get("/all", getAllProducts);
router.get("/get_by_id/:id", getProductById);
router.post("/add",jwtAuth,addProduct);
router.put("/update/:id",jwtAuth,updateProduct);
router.delete("/delete/:id",jwtAuth,deleteProduct);

module.exports = router;
