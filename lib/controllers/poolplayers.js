const { Router } = require('express');
const { findAll } = require('../models/Poolplayer');
const Poolplayer = require('../models/Poolplayer');

module.exports = Router() 
  
  .post('/', async(req, res) => {
    const poolplayer = await Poolplayer.insert(req.body);
    res.send(poolplayer);
  }) 
  
  .get('/', async (req, res) => {
    const poolplayers = await findAll();
    res.send(poolplayers);
  })
  
  .get('/:id', async (req, res, next) => {
    try {
      const player = await Poolplayer.findById(req.params.id);
      res.send(player);
    } catch (error) {
      error.status = 404;
      next(error);
    }
  })
;
