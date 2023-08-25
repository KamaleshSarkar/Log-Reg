const router=require('express').Router()
const serverController=require("../controller/App.Controller")
const multer = require('multer')
const path = require('path')



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads')
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname +
        ' ' +
        Date.now() +
        'myimg' +
        path.extname(file.originalname)
    )
  },
})

const maxSize = 1 * 1024 * 1024

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Only jpg,png and jpeg type are allowed'))
    }
  },
  limits: maxSize,
})

router.post('/logIn', serverController.getLogIn)
router.post('/registration',upload.single('image'), serverController.getRegistration)
router.get('/fetchData', serverController.fetchData)


module.exports=router