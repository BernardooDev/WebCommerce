const express = require("express")

const router = express.Router()

router.get("/" , (req, res) => {
    res.send("Get verb")
})

router.post("/", (req,res) => {
    res.send("Post verb")
})

router.delete("/", (req, res) => {
    res.send("Delete verb")
})

module.exports = router;