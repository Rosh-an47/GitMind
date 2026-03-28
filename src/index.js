// require('dotenv').config({path: './'})   yo require aani tala import so yes it is inconsistency only

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`); //can be edited that way keeping in variable to account for 8000
    });
}) // async returns a promise 
.catch((err)=>{
    console.log("MONGO db Connection failed!!! ", err);
})