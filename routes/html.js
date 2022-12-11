const router = require('express').Router();
const path = require('path');
const fs = require('fs');
//GET route for notes to display the notes.html file
router.get('/notes', (req, res) => {
   console.log('in /notes route', __dirname)
    res.sendFile(path.join(__dirname,'../public/notes.html'))
   });
//GET route wild card will return the index.html file
   router.get('*', (req, res) => {
 
    res.sendFile(path.join(__dirname,'../public/index.html'))
   });

   module.exports = router;