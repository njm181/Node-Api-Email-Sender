const { Router } = require("express");
const emailController = require('../../services/emailService'); //email route

const router = Router();
router.post('/email', emailController.sendEmail);

module.exports = router;