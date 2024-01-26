const express = require('express');
const { registerUser , loginUser , getAllClients} = require("../controller/client_controller");
const router = express.Router();

//מטהוד של get - לא מאפשר להעביר מידע בbody של הבקשה

router.get("/all", getAllClients);
router.post('/register',registerUser)
router.post('/login',loginUser)


module.exports = router;