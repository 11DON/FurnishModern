const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); 
const Product = require("./models/Product");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // should now be a function
const productRoutes = require("./routes/product");
app.use("/products", productRoutes); 

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
