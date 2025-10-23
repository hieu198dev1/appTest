const express = require("express");
const { requireSignin } = require('../lib');
const router = express.Router();

router.get("/protected",  requireSignin ,(req, res) => {
  res.json({ message: `Welcome ${req.auth.username}! You are authenticated.` });
});

module.exports = router;