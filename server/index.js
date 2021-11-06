import express, { urlencoded } from "express";
import mongoose from "mongoose";
import cors from "cors";
import {getCurrentUser} from "./controllers/users.js"
const app=express()
const CONNECTION_URL = "mongodb://localhost:27017/incubation-mangement";
const port = 4000;
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cors())

app.use("/", getCurrentUser)
mongoose.connect(CONNECTION_URL)
    .then(()=> app.listen)