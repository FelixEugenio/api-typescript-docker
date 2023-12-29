import express,{response,Request} from 'express'
const app = express()
import { router } from './shared/http/routes'

app.use(express.json())
app.use(router)
app.listen(5000,()=>{
  console.log("server is running")
})