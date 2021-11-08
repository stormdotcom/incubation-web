import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/users.js"
// import adminRouter from "./routes/admin.js"
const app=express()
const CONNECTION_URL = "mongodb://localhost:27017/incubation-mangement";
const port = 4000;
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use("/", userRouter);
// app.use("/admin", adminRouter);
mongoose.connect(CONNECTION_URL)
    .then(()=> app.listen(port, ()=>console.log("Server running on " + port)))