import { Router, response } from 'express'
import { usersRouter } from './users.router.js'
import viewsRouter from './views.router.js'

const router = Router()

router.use('/', viewsRouter)
router.use('/api/users', usersRouter)
//router.use('/api/products',(request, response)=>{})
//router.use('/api/carts',(request, response)=>{})

export default router