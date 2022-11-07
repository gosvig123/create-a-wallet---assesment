import { PrismaClient } from "@prisma/client"
import Model from './model.js'

class controller {

  static async getBalance(_, res) {
    const currentBallance = await Model.getBalance()
    res.send(currentBallance)
  }

  static async addMoney(req, res) {

    let list = await Model.getBalance()
    let { post } = req.body

    let updatedBalance = post + list[list.length - 1].balance

    const data = {
      post: post,
      balance: updatedBalance,
    }
    const newMoney = await Model.addMoney(data)

    res.send(newMoney)

  }

  static async withdraw(req, res) {
    const { withdrawMoney } = req.body
    const transaction = await Model.getBalance()
    let updatedBalance = transaction[transaction.length - 1].balance - withdrawMoney
    console.log(updatedBalance)

    const data = {
      withdrawMoney: withdrawMoney,
      balance: updatedBalance
    }
    const withDraw = await Model.withdrawMoney(data)


    res.send(withDraw)

  }


}

export default controller