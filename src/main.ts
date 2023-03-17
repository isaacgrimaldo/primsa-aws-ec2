/* eslint-disable import/first */
import 'module-alias/register'

import express, { Router } from 'express'
import { connection } from '@app/prisma/repository-connection'

export const startServer = ({ router }: { router: Router }) => {
  const app = express()

  connection()

  app
    .set('port', process.env.PORT || 5000)
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(router)

  return app
}
