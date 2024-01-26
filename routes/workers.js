const express = require('express');
const { registerUser , loginUser , getAllWorkers} = require("../controller/workers_controller");
const router = express.Router();

//מטהוד של get - לא מאפשר להעביר מידע בbody של הבקשה

router.get("/all", getAllWorkers);
router.post('/register',registerUser)
router.post('/login',loginUser)


module.exports = router;