import express from 'express'

const router = express.Router()

//controller

import {create} from '../controller/pet'

router.post('/create-pet', create)

module.exports = router