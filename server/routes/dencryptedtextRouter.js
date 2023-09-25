const Router = require('express')
const router = new Router()
const dencryptedTextController = require('../controllers/dencryptedtextController')

router.post('/addnew', dencryptedTextController.addNew);
router.get('/all', dencryptedTextController.getAll);
router.get('/:id', dencryptedTextController.getById);
router.post('/createPDF/:id', dencryptedTextController.createPDF);
router.get('/getPdf/:fileName', dencryptedTextController.getPDF)
router.get('/deletePdf/:fileName', dencryptedTextController.deletePDF)


module.exports = router