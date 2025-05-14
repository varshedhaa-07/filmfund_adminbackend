import express from 'express';
import {
  getAllFilms,
  getFilmById,
  addFilm,
  updateFilm,
  deleteFilm,
  contributeToFilm,
  submitMessage
} from '../controllers/adminFilmController.js';

const router = express.Router();

// Film routes
router.get('/', getAllFilms);
router.post('/', addFilm);
router.get('/:id', getFilmById);
router.put('/:id', updateFilm);
router.delete('/:id', deleteFilm);

// Contribution route
router.post('/:id/contribute', contributeToFilm);

// Contact route
router.post('/contact', submitMessage);

export default router;
