const app = require('./src/app')
const port = 3030

app.listen(port, ()=>{
  console.log(`Server is running in port http://localhost:${port}`)
})