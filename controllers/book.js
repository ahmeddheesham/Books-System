const bookModel = require('../schemas/book')



exports.getAllBooks = async function (req, res) {
    try {

        const Books = await bookModel.find()
        return res.json({ "message": "Done", date: Books })

    } catch (err) {
        return res.status(400).send({ message: err })
    }
}

exports.getBook = async function (req, res) {

    try {

        const Book = await bookModel.find({ _id: req.params.id })
        if (Book.length === 0) {
            return res.json({ "message": "Book Not Found", date: Book })

        } else {
            return res.json({ "message": "Done", date: Book })

        }

    } catch (err) {
        return res.status(400).send({ message: err })
    }
}

exports.deleteBook = async function (req, res) {
    try {
        const Role = req.user.role
        if (Role === "Admin") {
            await bookModel.findByIdAndDelete(req.params.id)
            return res.json({ "message": "Book Deleted", date: {} })
        } else {
            return res.status(403).json({ message: "Access Denied" })
        }



    } catch (err) {
        return res.status(400).send({ message: err })
    }
}

exports.updateBook = async function (req, res) {

    try {
        const Role = req.user.role
        if (Role === "Admin") {
            await bookModel.findByIdAndUpdate(req.params.id, req.body)
            return res.json({ "message": "Book Updated", date: {} })
        } else {
            return res.status(403).json({ message: "Access Denied" })

        }




    } catch (err) {
        return res.status(400).send({ message: err })
    }
}

exports.addBook = async function (req, res) {
    try {
        const Role = req.user.role
        if (Role === "Admin") {
            const CreatedBook = await bookModel.create(req.body)
            return res.json({ "message": "Book Created", date: CreatedBook })
        } else {
            return res.status(403).json({ message: "Access Denied" })
        }



    } catch (err) {
        return res.status(400).send({ message: err })
    }
}






