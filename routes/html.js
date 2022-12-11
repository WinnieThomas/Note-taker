const router = require('express').Router();
//const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

router.get('/notes', (req, res) => {
   console.log('in /notes route', __dirname)
    res.sendFile(path.join(__dirname,'../public/notes.html'))
   });

   router.get('*', (req, res) => {
 
    res.sendFile(path.join(__dirname,'../public/index.html'))
   });

   module.exports = router;