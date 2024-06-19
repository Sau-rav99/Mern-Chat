import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
dotenv.config();
app.use(cookieParser());

const PORT = process.env.PORT || 8000;
app.use(express.json());//to parse the incoming request with JSON payloads(from req.body);
// app.get("/", (req, res) => {
//     res.send("HELLO WORLDs");
// });
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log("Server is runing on port " + PORT)
});