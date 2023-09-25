const Router = require('express')
const router = new Router()
const encryptedTextController = require('../controllers/encryptedtextController')

const checkLevel = require('../middleware/chekLevelMiddleware.js')

router.post('/addnew',checkLevel(['ADMIN', 'ENCODER']), encryptedTextController.addNew);
router.get('/all', encryptedTextController.getAll);
router.get('/delete:id',checkLevel(['ADMIN', 'ENCODER']), encryptedTextController.deleteOne);
router.get('/:id',checkLevel(['ADMIN', 'ENCODER']), encryptedTextController.getById);

module.exports = router