import express from "express";
import mongoose from "mongoose";
import logger from "morgan"
import cors from "cors";
import userRouter from "./routes/users.js"
// import adminRouter from "./routes/admin.js"
const app=express()
const CONNECTION_URL = "mongodb://localhost:27017/incubation-mangement";
const port = 4000;


app.use(cors())
app.use(logger("tiny"));
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))


app.use("/", userRouter);
app.use((req, res, next) => {
    const error = new Error("Resources not found!");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    console.log(error);
    res.status(error.status || 500);
    res.json({
      message: error.message,
    });
  });   
// app.use("/admin", adminRouter);
mongoose.connect(CONNECTION_URL)
    .then(()=> app.listen(port, ()=>console.log("Server running on port " + port)))
    .catch((err)=> console.log("ERROR DB Connecting \n" + err.message))