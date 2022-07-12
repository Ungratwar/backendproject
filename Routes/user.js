const express = require("express");
const router = express.Router();


router.post("/", require("./../Controllers/user").createUser);
router.get("/", require("./../Controllers/user").getAllUser);
router.get("/:userID", require("./../Controllers/user").getUser);
router.put("/:userID", require("./../Controllers/user").updateUser);
router.delete("/:userID", require("./../Controllers/user").deleteUser);

module.exports = router;
