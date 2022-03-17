// Import default NodeJs modules

// Import node_modules modeules
const router = require("express").Router();

// Import other local modules

// POST: http.../validation/email-validation
router.post("/email-validation", (req, res, next) => {
    res.status(201).json({ response: "Email successfully sent." });

});

module.exports = router;