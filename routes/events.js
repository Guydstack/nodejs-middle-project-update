const router = require("express").Router();
const jwtAuth = require("../middleware/jwtAuth");
const {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/events_controller");

const upload = require("../middleware/upload")

//CRUD
//Read
//Create

router.get("/all", getAllProducts);
router.get("/get_by_id/:id", getProductById);
router.post("/add",upload.single("event_image"),jwtAuth,addProduct);
router.put("/update/:id",jwtAuth,updateProduct);
router.delete("/delete/:id",jwtAuth,deleteProduct);

module.exports = router;