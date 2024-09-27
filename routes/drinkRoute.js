
const express = require('express');
const Drink = require('../model/dirnkSchema');

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, description, price, catogery } = req.body;
    const drink = new Drink({ name, description, price,catogery });
    try {
        const savedDrink = await drink.save();
        res.status(201).json(savedDrink);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const drinks = await Drink.find();
        res.status(200).json(drinks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const drink = await Drink.findById(req.params.id);
        if (!drink) return res.status(404).json({ message: 'Drink not found' });
        res.status(200).json(drink);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
