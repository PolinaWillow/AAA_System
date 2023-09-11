const Router = require('express')
const router = new Router()
const catpictureController = require('../controllers/catpictureController.js')

router.post('/addnew', catpictureController.addNew);
router.get('/all', catpictureController.getAll);
router.get('/:id', catpictureController.getById);
router.post('/delete', catpictureController.delete)

module.exports = router