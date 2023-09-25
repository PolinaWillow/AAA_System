const Router = require('express')
const router = new Router()
const dencryptedTextController = require('../controllers/dencryptedtextController')
const checkLevel = require('../middleware/chekLevelMiddleware.js')

router.post('/addnew',checkLevel(['ADMIN', 'DECRYPTOR']), dencryptedTextController.addNew);
router.get('/all',checkLevel(['ADMIN', 'DECRYPTOR']), dencryptedTextController.getAll);
router.get('/:id',checkLevel(['ADMIN', 'DECRYPTOR']), dencryptedTextController.getById);
router.post('/createPDF/:id', checkLevel(['ADMIN', 'DECRYPTOR']),dencryptedTextController.createPDF);
router.get('/getPdf/:fileName', checkLevel(['ADMIN', 'DECRYPTOR']), dencryptedTextController.getPDF)
router.get('/deletePdf/:fileName', checkLevel(['ADMIN', 'DECRYPTOR']), dencryptedTextController.deletePDF)


module.exports = router