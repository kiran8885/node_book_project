var Books = require('../model/book')

var getAllbooks = async (req,res)=>{
    var allBooks = await Books.find()
    res.status(200).json(allBooks)
}

var getOnebook = async (req,res)=>{
    var bookId = req.params.id
    var oneBook = await Books.findById(bookId)
    if(oneBook){
        res.status(200).json(oneBook)
    }else{
        console.log("book not found");
        
    }
    
}

var updateBook= async(req,res)=>{
    var bookId = req.params.id
    var dataUpdate = req.body
    var update = await Books.findByIdAndUpdate(bookId,dataUpdate)
    if(update){
        res.status(200).json(update)
    }else{
        console.log("con't update");
        
    }
}

var deleteBook= async(req,res)=>{
    var bookId = req.params.id
    var deletebyID = await Books.findByIdAndDelete(bookId)
    if(deletebyID){
        res.status(200).json(deletebyID)
    }
}
var newBook = async(req,res)=>{
    newBookData = req.body
    addBook = await Books.create(newBookData)
    if(addBook){
        res.status(200).json(addBook)
    }else{
        console.log("unable to add new Book");
        
    }
}

module.exports = {getAllbooks,getOnebook,updateBook,deleteBook,newBook}