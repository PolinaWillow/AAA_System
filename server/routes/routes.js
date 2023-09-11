const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const encryptedtextRouter = require('./encryptedtextRouter')
const dencryptedtextRouter = require('./dencryptedtextRouter')
const acceesslevelRouter = require('./acceesslevelRouter')
const catpictureRouter = require('./catpictureRouter')

router.use('/user', userRouter)
router.use('/encryptedtext', encryptedtextRouter)
router.use('/dencryptedtext', dencryptedtextRouter)
router.use('/acceesslevel', acceesslevelRouter)
router.use('/catpicture', catpictureRouter)

module.exports = router