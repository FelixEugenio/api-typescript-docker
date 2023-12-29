import 'reflect-metadata'
import express,{response,Request} from 'express'
const app = express()
import { router } from './routes'

import '../../container'

app.use(express.json())
app.use(router)
app.listen(5000,()=>{
  console.log("server is running")
})