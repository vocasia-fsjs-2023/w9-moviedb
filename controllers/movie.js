const { movie, review } = require("../models");

//Mendapatkan Semua Data
const index = async (req, res) => {
    try {
        const movies = await movie.findAll();
        res.status(200).json({ movie: movies });
    } catch (error) {
        console.log(error, '<<< error find all movies');
    }
};

//Membuat Data
const store = async (req, res) => {
    //Mendapatkan Request Body
    const { title, description } = req.body;
    try {
        //Menambahkan Data Baru
        const movies = await movie.create({
            title: title,
            description: description,
        });
        //Mengembalikan Response ke Client
        res.status(201).json(movies);
    } catch (error) {
        console.log(error);
    }
};
//Mengupdate Data Berdasarkan ID
const update = async (req, res) => {
    //Mendapatkan req.body
    const { title, description } = req.body;
    try {
        //Mendapatkan req.params
        const { id } = req.params;
        //Mencari Data Berdasarkan ID
        const movies = await movie.findByPk(id);
        //Kondisi Data Jika tidak ditemukan
        if (!movies) {
            return res.status(404).json({ message: "Movie tidak ditemukan" });
        }
        //Mengupdate Data
        movies.title = title || movies.title;
        movies.description = description || movies.description;
        //Menyimpan data
        movies.save();
        //Mengembalikan Response ke Client
        res.status(200).json(movies);
    } catch (error) {
        console.log(error);
    }
};

//Mendapatkan Data Berdasarkan ID
const show = async (req, res) => {
    try {
        //Mendapatkan req.params
        const { id } = req.params;
        //Mencari Data Berdasarkan ID
        const movies = await movie.findByPk(id, {
            include: [
                {
                    model: review,
                    as: "reviews",
                },
            ],
        });
        //Kondisi Data Jika Tidak Ditemukan
        if (!movies) {
            return res.status(404).json({ message: "Movie tidak ditemukan" });
        }
        //Mengembalikan Response ke Client
        res.status(200).json(movies);
    } catch (error) {
        console.log(error);
    }
};
//Menghapus Data
const remove = async (req, res) => {
    try {
        //Mendapatkan req.params
        const { id } = req.params;
        //Mencari Data Berdasarkan ID
        const movies = await movie.findByPk(id);
        //Kondisi Data Jika Tidak Ditemukan
        if (!movies) {
            return res.status(404).json({ message: "Movie tidak ditemukan" });
        }
        //Menghapus Data
        movies.destroy();
        //Mengembalikan Response ke Client
        res.status(200).json({
            message: `Movie dengan id ${movies.id} dan judul ${movies.title} berhasil dihapus`,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    index,
    store,
    show,
    update,
    remove
};