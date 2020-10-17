import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    },
})

export default storage

/* export default {
    storages: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => {
            const fileName = '${Date.now()}-${file.originalname}'
            cb(null, fileName)
        },
    })
} */