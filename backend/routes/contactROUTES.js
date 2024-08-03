const express = require('express')

const contactROUTE = express.Router()

const {getALL,adding,update,remove} = require('../controllers/controllerContact')

contactROUTE.get('/allcontacts',getALL)

contactROUTE.post('/adding',adding)

contactROUTE.put('/update/:id',update)

contactROUTE.delete('/remove/:id',remove)


module.exports = contactROUTE