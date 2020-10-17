import {Router} from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
import OrphanageController from './controllers/OrphanageController'

const routes = Router()
const upload = multer({storage:uploadConfig})

routes.get('/orphanages',OrphanageController.index)
routes.get('/orphanages/:id',OrphanageController.show)
routes.post('/orphanages',upload.array('images', 20) , OrphanageController.create)

export default routes