const express = require('express')
const cors = require("cors")
const { getFact, isPrime, isPerfect, digit_sum, properties } = require('./helper')

const app = express()
const PORT = 8080

app.use(express.json())
app.use(cors())

app.get("/", (req, res) =>{
    res.status(200).json("Welcome to my HNG Stage 1 Task")
})

app.get("/api/classify-number/", async(req, res) =>{
    try{
    const no = req.query.number

    if(!no){
        return res.status(400).json({
            error: true,
            message: "missing number"
        })
    }
    const number = Number(no)

    if(isNaN(number)){
        return res.status(400).json({
            number: no,
            error: true
    })
}

    return res.status(200).json({
        number: number,
        is_prime: isPrime(number),
        is_perfect: isPerfect(number),
        properties: properties(number),
        digit_sum: digit_sum(number),
        fun_fact: await getFact(number)
    })
}
    catch(error){
        res.status(500).json({
            error: true,
            message: 'Internal Server error'
        })
    }
})


app.use("**", (req, res) =>{
    res.status(404).json({
        error: true,
        message: "resource does not exist"
    })
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})