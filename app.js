const express = require('express')
const app = express()

const PORT = 3000

app.listen(PORT, ()=>console.log(`listen to ${PORT}`))

app.get('/', (req,res) => {
	res.send("Hello World")
})
