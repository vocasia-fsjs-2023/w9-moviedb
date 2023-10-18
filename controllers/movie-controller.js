const { Movie, Review } = require("../models");

const index = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.status(200).json({ movie: movies });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const store = async (req, res) => {
    try {
        const { title, description } = req.body;
        const movie = await Movie.create({ title, description });

        res.status(201).json(movie);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const show = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findByPk(id, {
            include: [
                {
                    model: Review,
                    as: "reviews",
                },
            ],
        });

        if (!movie) {
            return res.status(404).json({ message: "Movie is not found" });
        }

        res.status(200).json(movie);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const movie = await Movie.findOne({ where: { id } });

        if (!movie) {
            return res.status(404).json({ message: "Movie is not found" });
        }

        movie.title = title || movie.title;
        movie.description = description || movie.description;
        await movie.save();

        return res.status(200).json(movie);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findByPk(id);
        if (!movie) {
            return res.status(404).json({ message: "Movie is not found" });
        }

        await Review.destroy({ where: { movieId: id } });

        await movie.destroy();
        return res
            .status(200)
            .json({ message: `movie ${movie.title} telah dihapus` });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

module.exports = { index, store, show, update, remove };
