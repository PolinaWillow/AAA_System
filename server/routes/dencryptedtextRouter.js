const Router = require('express')
const router = new Router()
const dencryptedTextController = require('../controllers/dencryptedtextController')

router.post('/addnew', dencryptedTextController.addNew);
router.get('/all', dencryptedTextController.getAll);
router.get('/:id', dencryptedTextController.getById);

module.exports = router