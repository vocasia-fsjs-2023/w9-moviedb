const { Movie, Review } = require('../models');

class Controller {

    //POST MOVIE
    static async postMovie(req, res) {
        try {
          const { title, description } = req.body;
          const movies = await Movie.create({ title, description });
          res.status(201).json(movies);
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };

    //GET ALL MOVIE LIST
    static async getMovie(req, res) {
        try {
          const movies = await Movie.findAll();
          res.status(200).json({ movies });
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };

      //GET MOVIE BY ID 
      static async getMovieById(req, res) {
        try {
          const { id } = req.params;
          const movies = await Movie.findByPk(id, {
            include: [
                {
                    model: Review,
                    as: "reviews"
                },
            ],
          });
          if (!movies) {
            return res.status(404).json({ error: 'Movie not found' });
          }
          res.status(200).json(movies);
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };
      
      //PUT MOVIE
      static async updateMovie(req, res) {
        try {
        const { id } = req.params;
        const { title, description } = req.body;
        const movies = await Movie.findOne({ where: {id} });
        if (!movies) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        movies.title = title;
        movies.description = description;
            
        await movies.save();
        return res.status(200).json(movies);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
      };

      //DELETE MOVIE
      static async deleteMovie(req, res) {
        try {
            const { id } = req.params;
            const movies = await Movie.findOne({ where: { id } });

            if (!movies) {
                return res.status(404).json({ error: 'Movie not found' });
              }
            await movies.destroy();
            return res.status(200).json({ message: `Movie ${movies.title} telah dihapus` });
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };
}

module.exports = Controller;