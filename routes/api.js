const router = require('express').Router();
//const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
//const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for displaying the added notes in json file
router.get('/notes', (req, res) => {
 
 res.sendFile(path.join(__dirname,'../db/db.json'))
});

//Get route for displaying notes based on their id

router.get('/notes/:id', (req, res) => {
  var dbnotes = JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json'), 'utf8'));
  res.json(dbnotes[Number(req.params.id)])
 });

// POST Route for adding newly added notes
router.post('/notes', (req, res) => {
  
  console.log(__dirname);
  var dbnotes = JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json'), 'utf8'));
  var note = req.body;
  var id=dbnotes.length.toString();
  note.id = id;
  dbnotes.push(note);
  fs.writeFileSync(path.join(__dirname,'../db/db.json'), JSON.stringify(dbnotes));
  

    res.json(dbnotes);
});


module.exports = router;
