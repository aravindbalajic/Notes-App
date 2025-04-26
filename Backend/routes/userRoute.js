const express=require('express')
const router = express.Router()
const {signup,signin,getusers,deleteuser}=require('../controllers/userController')

router.post('/create',signup);
router.post('/signin',signin);
router.get('/getusers',getusers);
router.get('/delete',deleteuser);

module.exports = router;