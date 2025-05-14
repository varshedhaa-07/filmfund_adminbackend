import Film from '../models/Film.js';
import Message from '../models/Message.js';

// Get all films
export const getAllFilms = async (req, res) => {
  try {
    const films = await Film.find();
    res.json(films);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get film by ID
export const getFilmById = async (req, res) => {
  try {
    const film = await Film.findById(req.params.id);
    if (!film) return res.status(404).json({ msg: 'Film not found' });
    res.json(film);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add new film
export const addFilm = async (req, res) => {
  try {
    const newFilm = new Film(req.body);
    await newFilm.save();
    res.status(201).json(newFilm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update existing film
export const updateFilm = async (req, res) => {
  try {
    const updated = await Film.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ msg: 'Film not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a film
export const deleteFilm = async (req, res) => {
  try {
    await Film.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Contribute to a film
export const contributeToFilm = async (req, res) => {
  try {
    const film = await Film.findById(req.params.id);
    if (!film) return res.status(404).json({ msg: 'Film not found' });
    const contribution = {
      user: req.body.user || 'Anonymous',
      amount: req.body.amount,
      date: new Date()
    };
    film.contributions.push(contribution);
    await film.save();
    res.json({ msg: 'Contribution successful', contribution });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Submit a contact message
export const submitMessage = async (req, res) => {
  try {
    await Message.create(req.body);
    res.status(201).json({ msg: 'Message received' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
