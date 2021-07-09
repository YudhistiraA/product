const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())


const product = require("./router/product")

app.use("/store/api/v1/product", product)


app.use(express.static(__dirname))


app.listen(8000, () => {
    console.log("Server run on port 8000");
})