import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

class Model {

  static async getBalance() {
    const bankBalance = await prisma.balance.findMany()

    return bankBalance

  }


  static async addMoney(data) {
    const newBalance = await prisma.balance.create({
      data
    })
    return newBalance
  }

  static async withdrawMoney(data) {
    const updatedBalance = await prisma.balance.create({
      data
    })
    return updatedBalance

  }

}



export default Model