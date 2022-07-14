const express = require('express')
const cors = require('cors')
const proxy = require('express-http-proxy')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/user', proxy('http://localhost:8001'))
app.use('/record', proxy('http://localhost:8002'))
app.use('/mailing', proxy('http://localhost:8003'))

const start = async ()=>{
    try{
        app.listen(8000, ()=> console.log(`Server started 8000`))
    }
    catch (e) {
        console.log(e)
    }
}

start()