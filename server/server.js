const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

// API Routes
const apiRoutes = require("./routes/index");
app.use("/api", apiRoutes);

connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
