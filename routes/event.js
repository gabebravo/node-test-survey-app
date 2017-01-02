const express = require('express');
const router  =  new express.Router();

const db   = require('../lib/db');
const Event = db.mongoose.model('Event');

function getEvents(req, res) {

  Event.find()
    .exec()
    .then((err, events) => {
      if (err) {
        return res.status(500).send(err);
      }

      res.json(events);
    });
}

function getEventById(req, res) {
  Event.findById(req.params.id, (err, user) => {
    if (err) {
      return res.status(500).send(err);
    }

    if (!event) {
      return res.sendStatus(404);
    }

    res.json(event);
  });
}

function createEvent(req, res) {
  const event = new Event(req.body);

  event.save((err, u) => {
    if (err) {
      return res.send(500, err);
    }

    res.send(u);
  });
}


router.get('/',    getEvents);
router.post('/',   createEvent);
router.get('/:id', getEventById);


module.exports = router;
