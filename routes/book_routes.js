var express = require('express')

var {getAllbooks,getOnebook,updateBook,deleteBook,newBook} = require('../controllers/books_controller')

var router = express.Router()

router.get("/",getAllbooks)
router.get("/:id",getOnebook)
router.post("/",newBook)
router.put("/:id",updateBook)
router.delete("/:id",deleteBook)
module.exports = router
