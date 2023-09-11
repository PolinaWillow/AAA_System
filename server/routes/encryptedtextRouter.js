const Router = require('express')
const router = new Router()
const encryptedTextController = require('../controllers/encryptedtextController')

router.post('/addnew', encryptedTextController.addNew);
router.get('/all', encryptedTextController.getAll);
router.get('/:id', encryptedTextController.getById);

module.exports = router