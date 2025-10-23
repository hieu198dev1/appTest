const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const users = [];
const refreshTokens = [];
const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username))
    return res.status(400).json({ message: "User already exists" });
  users.push({ username, password });
  res.json({ message: "Registered successfully" });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const accessToken = jwt.sign(user, JWT_SECRET, { expiresIn: "30m" });
  const refreshToken = jwt.sign(user, REFRESH_SECRET, { expiresIn: "7d" });
  refreshTokens.push(refreshToken);
  res.json({ accessToken, refreshToken });
});

router.post("/refresh", (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken))
    return res.status(403).json({ message: "Invalid refresh token" });

  jwt.verify(refreshToken, REFRESH_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = jwt.sign(
      { username: user.username },
      JWT_SECRET,
      { expiresIn: "30m" }
    );
    res.json({ accessToken });
  });
});

module.exports = router;
