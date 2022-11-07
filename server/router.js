import express from 'express'
import controller from './controller.js'
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ "key": "world" })
})

router.get('/balance', controller.getBalance)

router.post('/post', controller.addMoney)

router.post('/withdraw', controller.withdraw)

export default router