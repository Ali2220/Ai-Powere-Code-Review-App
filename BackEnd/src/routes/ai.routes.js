const express = require('express')

// Express Router use kiya
const router = express.Router();
const aiController = require('../controllers/ai.controller')

// Single route: GET /ai/get-response
// Controller function se connect kiya
// URL Example:
// http://localhost:3000/ai/get-response?prompt=hello

router.post('/get-review', aiController.getReview)

module.exports = router