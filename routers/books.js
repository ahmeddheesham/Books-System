const express = require ('express')
const bookController = require('../controllers/book')
const authMiddleware = require("../middlewares/auth.middleware")

const router = express.Router()


router.get('/api/books' , authMiddleware, bookController.getAllBooks)  //Get All Books
router.get('/api/books/:id' , authMiddleware, bookController.getBook) // Get One Book by id
router.delete('/api/books/:id' , authMiddleware, bookController.deleteBook) // Delete One Book by id
router.put('/api/books/:id' , authMiddleware, bookController.updateBook) // Update One Book by id
router.post('/api/books' , authMiddleware, bookController.addBook) // Add New Book



module.exports = router