const Router = require('express')
const router = new Router()
const catpictureController = require('../controllers/catpictureController.js')
const checkLevel = require('../middleware/chekLevelMiddleware.js')

router.post('/addnew',checkLevel(['ADMIN']), catpictureController.addNew);
router.get('/all',checkLevel(['ADMIN']), catpictureController.getAll);
router.get('/:id',checkLevel(['ADMIN']), catpictureController.getById);
router.post('/delete',checkLevel(['ADMIN']), catpictureController.delete)

module.exports = router