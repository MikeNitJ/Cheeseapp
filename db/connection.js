require("dotenv").config();

const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

mongoose.connection
    .on("open", () => console.log("Connected to mongodb"))
    .on("close", () => console.log("Connected Close"))
    .on("error", (e) => console.log("Error occurred", e)) 

module.exports = mongoose