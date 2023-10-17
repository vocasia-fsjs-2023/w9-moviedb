const { Movie, Review } = require('../models');

class Controller {
    static async getMovieList(req, res) {
        try {
            const movies = await Movie.findAll();
            res.status(200).json({ movie: movies });

        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
    static async getMovieById(req, res) {
        try {
            const { id } = req.params;
            const movie = await Movie.findByPk(id, {
                include: [
                    {
                        model: Review,
                        as: "review"
                    },
                ],
            });
            if (!movie) {
                return res.status(404).json({ error: 'Todo not found' });
            }
            res.status(200).json(movie);

        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
    static async createMovie(req, res) {
        try {
            const { title, description } = req.body;
            const movie = await Movie.create({ title, description });
            res.status(201).json(movie);

        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
    static async updateMovie(req, res) {
        try {
            const { id } = req.params;
            const { title, description } = req.body;
            const movie = await Movie.findOne({ where: { id } });
            if (!movie) {
                return res.status(404).json({ error: 'Movie not found' });
            }
            movie.title = title || movie.title;
            movie.description = description || movie.description;
            await movie.save();
            return res.status(200).json(movie);

        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
    static async updateMovieStatus(req, res) {
        const { id } = req.params;
        const { status } = req.body;
        try {
            const movie = await Movie.findByPk(id);
            if (!movie) {
                return res.status(404).json({ error: 'movie not found' });
            }
            movie.status = status;
            await movie.save();
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
    static async deleteMovie(req, res) {
        try {
            const { id } = req.params;
            const movie = await Movie.findOne({ where: { id } });
            if (!movie) {
                return res.status(404).json({ error: 'Movie not found' });
            }

            await movie.destroy();
            return res
                .status(200)
                .json({ message: `Movie ${movie.title} berhasil dihapus` });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}

module.exports = Controller;