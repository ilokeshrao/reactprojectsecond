const router = require('express').Router()
const regc = require('../controllers/regcontroller')
const productc = require('../controllers/productcontroller')
   const cartc =   require('../controllers/cartcontroller')
const upload = require('../helpers/multer')


router.post('/reg', regc.register)
router.post('/logincheck', regc.logincheck)
router.post('/addproduct', upload.single('img'), productc.addproducts)
router.get('/allproductdata', productc.allproductdata)
router.get('/singledata/:id', productc.singledata)
router.put('/productupdate/:id', upload.single('img'), productc.productupdate)
router.get('/stockdata', productc.stockdata)
router.post('/cart', productc.cart)
router.post('/cartvalue/:username', cartc.cartvalue)
router.get('/userdata/:username',cartc.userdata)



module.exports = router