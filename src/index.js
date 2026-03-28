// require('dotenv').config({path: './'})   yo require aani tala import so yes it is inconsistency only

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});



connectDB();