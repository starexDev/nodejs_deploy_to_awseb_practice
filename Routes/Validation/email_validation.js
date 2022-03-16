// Import default NodeJs modules

// Import node_modules modeules
const router = require("express").Router();

// Import other local modules
const emailValidationController = require("../../Controllers/Validation/email_validation");

// POST: http.../validation/email-validation
router.post("/email-validation", emailValidationController.sendEmailValidationCode);

module.exports = router;