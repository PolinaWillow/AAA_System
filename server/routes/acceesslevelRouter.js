const Router = require('express')
const router = new Router()
const acceesslevelController = require('../controllers/acceesslevelController.js')
const checkLevel = require('../middleware/chekLevelMiddleware.js')


router.post('/addnew', checkLevel(['ADMIN']), acceesslevelController.addNew);
router.get('/all', /*checkLevel(['ADMIN']),*/ acceesslevelController.getAll);
router.get('/:id',checkLevel(['ADMIN']), acceesslevelController.getById);
router.post('/delete',checkLevel(['ADMIN']), acceesslevelController.delete)

module.exports = router