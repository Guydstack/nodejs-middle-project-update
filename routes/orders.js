const express = require('express');
const router = express.Router();
const jwtAuth = require("../middleware/jwtAuth");
const {
    getAllOrders,
    getOrderById,
    addOrder,
    updateOrder,
    deleteOrder,
} = require("../controller/orders_controller");

//מטהוד של get - לא מאפשר להעביר מידע בbody של הבקשה

router.get("/all", getAllOrders);
router.get("/get_by_id/:id", getOrderById);
router.post("/add",jwtAuth,addOrder);
router.put("/update/:id",jwtAuth,updateOrder);
router.delete("/delete/:id",jwtAuth,deleteOrder);

module.exports = router;