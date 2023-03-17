/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client'

export const prismaCliente = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
})

export const connection = async () => {
  try {
    await prismaCliente.$connect()
    console.log('data base connected')
  } catch (error) {
    console.log('data base connection error')
    console.error(error)
    await prismaCliente.$disconnect()
  }
}
