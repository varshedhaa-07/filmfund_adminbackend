import Film from '../models/Film.js';

export const getAllFilms = async (req, res) => {
  const films = await Film.find();
  res.json(films);
};

export const addFilm = async (req, res) => {
  const newFilm = new Film(req.body);
  await newFilm.save();
  res.status(201).json(newFilm);
};

export const updateFilm = async (req, res) => {
  const updated = await Film.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteFilm = async (req, res) => {
  await Film.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
