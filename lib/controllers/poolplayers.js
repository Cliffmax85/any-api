const { Router } = require('express');
const Poolplayer = require('../models/Poolplayer');

module.exports = Router() 
  .post('/', async(req, res) => {
    const poolplayer = await Poolplayer.insert(req.body);
    res.send(poolplayer);
  });
