const app = require('./src/app')
const port = process.env.PORT

app.listen(port, ()=>console.log(`Server is running in http://localhost:${port}`))