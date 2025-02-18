import express, { response } from 'express'
import path from 'path'
import 'express-async-errors'
import errorHandler from './errors/handle'
import cors from 'cors'

import './database/connection'

import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)


app.listen(3333)