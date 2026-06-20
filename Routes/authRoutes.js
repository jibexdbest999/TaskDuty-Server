const express = require("express")
const router = express.Router();

const { signupUser, loginUser, updateProfile, changePassword } = require("../Controllers/authController")
const authMiddleware = require("../Middleware/authMiddleware")

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.put("/profile", authMiddleware, updateProfile);
router.put("/change-password", authMiddleware, changePassword);

module.exports = router;
