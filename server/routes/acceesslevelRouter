const Router = require('express')
const router = new Router()
const acceesslevelController = require('../controllers/acceesslevelController.js')
const checkLevel = require('../middleware/chekLevelMiddleware.js')


router.post('/addnew', checkLevel('ADMIN'), acceesslevelController.addNew);
router.get('/all', acceesslevelController.getAll);
router.get('/:id', acceesslevelController.getById);
router.post('/delete', acceesslevelController.delete)

module.exports = router