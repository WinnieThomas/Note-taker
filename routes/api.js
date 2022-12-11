const router = require('express').Router();

const path = require('path');
const fs = require('fs');

// GET Route for displaying notes
router.get('/notes', (req, res) => {
 
 res.sendFile(path.join(__dirname,'../db/db.json'))
});

//get notes by its id
router.get('/notes/:id', (req, res) => {
  var dbnotes = JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json'), 'utf8'));
  res.json(dbnotes[Number(req.params.id)])
 });

// POST Route for adding new notes
router.post('/notes', (req, res) => {
  
  console.log(__dirname);
  var dbnotes = JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json'), 'utf8'));
  var note = req.body;
  var id=dbnotes.length.toString();
  note.id = id;
  //add new notes to the json file
  dbnotes.push(note);
  fs.writeFileSync(path.join(__dirname,'../db/db.json'), JSON.stringify(dbnotes));
  

    res.json(dbnotes);
});


module.exports = router;
