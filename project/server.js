import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {
        console.log("Server running on port", process.env.PORT);
    });
})
.catch((error) => {
    console.log("Database connection error:", error);
});