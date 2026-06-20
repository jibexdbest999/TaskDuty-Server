const express = require("express")
const router = express.Router();

const { signupUser, loginUser, updateProfile } = require("../Controllers/authController")
const authMiddleware = require("../Middleware/authMiddleware")

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.put("/profile", authMiddleware, updateProfile);

module.exports = router;
