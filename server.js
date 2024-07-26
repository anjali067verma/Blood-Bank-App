const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
//const path = require("path");
//dot config
dotenv.config();
//mogodb connection
connectDB();
//rest object
const app = express();
//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
//routes
app.use("/api/v1/test", require("./routes/TestRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
//port
const PORT = process.env.port || 8080;
//listen
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
