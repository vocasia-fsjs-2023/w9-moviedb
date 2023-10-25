const { Movie, Review } = require('../models')

//POST
const createMovie = async (req, res) => {
    try {
        const {title, description} = req.body

        const movieBaru = await Movie.create({
            title: title,
            description: description
        })

        res.status(200).json(movieBaru);
    }catch(error){
        console.log(error, '<-- Error Create Movie')
       } 
    }

//GET DATA
const getAllMovie = async(req, res) => {
   try{
const movie = await Movie.findAll()
res.status(200).json({ movie });
    
   }catch (error){
    res.status(404).json({ message: 'Movie tidak ditemukan' });
   }
    }

//GET BY ID
const getMovieById = async(req, res) => {
    try{
        const { id } = req.params;
        const movie = await Movie.findByPk(id, {
           include: [
            {
                model: Review,
                as: 'reviews'
            }
           ]
        });
        
        if (movie === null){
            return res.status(404).json({ 
                error :'Movie tidak ditemukan'
            });
        }

        res.status(200).json(movie);
    } catch (error) {
        console.log(error, '<-- Error Get Movie by id')
    }
}


//PUT
const updateDataMovie = async (req, res) => {
        try{
            //mendapatkan req params -> mendapatkan data movie berdasarkan id
            const { id } = req.params
            //mendapatkan req body
            const {title, description} = req.body

            const movie = await Movie.findByPk(id)

            if (!movie) {
                return res.status(404).json({
                    error: 'Tidak ditemukan'
                });
            }
            //update
            movie.title = title
            movie.description = description
            movie.updateAt = new Date()

            //save data
            movie.save()
            //response
            res.status(200).json(movie);
        } catch(error) {
            console.log(error, '<-- Error Update Data Movie by ID')
        }
    }
    

    //PATCH
    const updateMovie = async (req, res) => {
        try{
            //mendapatkan req params -> mendapatkan data movie berdasarkan id
            const { id } = req.params
            //mendapatkan req body
            const { title} = req.body
            const movie = await Movie.findByPk(id)
            if (!movie) {
                return res.status(404).json({
                    error: 'Tidak ditemukan'
                });
            }
            //update
            movie.title = title || movie.title;
            movie.updateAt = new Date()

            //save data
            movie.save()
            //response
            res.status(200).json(movie);
        } catch(error) {
            console.log(error, '<-- Error Update Status Movies By ID')
        }
    }

//DELETE
    const deleteMovies = async (req, res) => {
        try{
            const { id } = req.params 
            const movie = await Movie.findByPk(id)

            if (!movie) {
                res.status(404).json({ message: 'Movie tidak ditemukan' });
            }
            movie.destroy()
            res.status(200).json({ message: `Movie ${movie.title} berhasil dihapus` });

        }catch(error){
            console.log(error, '<-- Error Destroy Movie')
        }
    }

module.exports = {createMovie, getAllMovie, getMovieById, updateDataMovie, updateMovie, deleteMovies}