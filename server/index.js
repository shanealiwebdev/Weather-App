const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const dns = require("dns");
const weatherRoutes = require("./weatherRoutes");
const cors = require("cors");
require("dotenv").config();

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}
connectDB();
app.use(cors())
app.use("/api/weather", weatherRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));