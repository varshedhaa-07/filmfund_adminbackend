import express from 'express';
import {
  getAllFilms,
  addFilm,
  updateFilm,
  deleteFilm
} from '../controllers/adminFilmController.js';

const router = express.Router();

router.get('/', getAllFilms);
router.post('/', addFilm);
router.put('/:id', updateFilm);
router.delete('/:id', deleteFilm);

export default router;
