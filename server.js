const dotenv = require('dotenv')
const app = require('./app')

dotenv.config({path: './config.env'})

console.log(process.env)

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`app started at port ${port}`)
})