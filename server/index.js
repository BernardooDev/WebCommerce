const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const userRoutes = require("./src/routes/User")

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.use("/user", userRoutes)

app.listen(port, () => {
    console.log("Server is running!")
})
