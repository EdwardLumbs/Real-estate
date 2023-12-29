import express from 'express'
import { signup, signin, google, signOut, checkCookie } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/signup', signup)

router.post('/signin', signin)

router.post('/google', google)

router.get('/signout', signOut)

router.get('/checkcookie', checkCookie)

export default router