const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const checkLevel = require('../middleware/chekLevelMiddleware.js')

router.post('/reg', userController.registration);
router.post('/login', userController.login);
router.post('/changeLevel', userController.changeLevel)
router.get('/auth', authMiddleware, userController.check);
router.get('/getall'/*,checkLevel(['ADMIN'])*/, userController.getall)
router.post('/verify', userController.verify)
router.put('/upgatetgcode', userController.upgatetgcode)

module.exports = router