const express = require('express');
const router = express.Router();
const Note = require('../models/note');

// Tüm notları getir
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Belirli bir notu getir
router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Yeni bir not oluştur
router.post('/', async (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    const savedNote = await note.save();
    res.json(savedNote);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Bir notu güncelle
router.patch('/:id', async (req, res) => {
  try {
    const updatedNote = await Note.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title, content: req.body.content } }
    );
    res.json(updatedNote);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Bir notu sil
router.delete('/:id', async (req, res) => {
  try {
    const removedNote = await Note.deleteOne({ _id: req.params.id });
    res.json(removedNote);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
