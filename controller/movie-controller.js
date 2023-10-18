

const {Movie, Review} = require('../models');


//POST 
const createNew = async (req,res) => {
    try {
        const {title, description} = req.body

        const data = await Movie.create({title: title, description: description})

        return res.status(201).json(data);
    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
}


// GET 
const getAll = async (req, res) => {

    try {
        const movie = await Movie.findAll();

        return res.status(200).json({movie});

    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
};


//GET BY ID 
const getById = async (req, res) => {

    try {
        const {id} = req.params;

        const data = await Movie.findByPk(id, {
                include: [
                    {
                        model: Review,
                        as: 'reviews',
                    },
                ],
            });

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
}


// PUT 
const update = async (req, res) => {
    try {
        const {id} = req.params
        const {title, description} = req.body

        const data = await Movie.findByPk(id)

        if (!data) {
            return res.status(404).json({
                status: 'Failed',
                message: `data Todo with id ${id} is not exists`
            })
        }

        data.title = title,
        data.description = description,
        data.updateAt = new Date(),
        data.save();

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
}


// PATCH 
const updateStatus = async (req, res) => {
    try {
        const {id} = req.params
        const {description} = req.body

        const data = await Movie.findByPk(id)

        if (!data) {
            return res.status(404).json({
                status: 'Failed',
                message: `data Todo with id ${id} is not exists`
            })
        }

        data.description = description,
        data.updateAt = new Date(),
        data.save();

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
}


// DEL 
const deleteData = async (req, res) => {
    try {
        const movieId = req.params.id;
        const data = await Movie.findByPk(movieId)

        if (!data) {
            return res.status(404).json({
                status: 'Failed',
                message: `data Todo with id ${id} is not exists`
            })
        }

        const movieTitle = data.title;

            await Review.destroy({
                where: { movieId },
            });
      
          await data.destroy();

        res.status(200).json({
            message: `movie ${movieTitle} telah dihapus`
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
}




module.exports = {createNew, getAll, getById, update, updateStatus, deleteData}






  
