const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

const authRoutes = require("./routes/auth");
const genericRoutes = require("./routes/general");
app.use("/api/auth", authRoutes);
app.use("/api/", genericRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
