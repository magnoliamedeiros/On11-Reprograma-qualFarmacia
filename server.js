const app = require('./src/app')
const port = process.env.MONGO_URL || process.env.APP_URL

app.listen(port, ()=>console.log(`Server is running in port http://localhost:${port}`))
