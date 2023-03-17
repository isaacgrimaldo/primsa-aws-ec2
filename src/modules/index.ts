import { Router } from 'express'
import { userController } from './user/user.controller'

const router = Router()
const api = '/api/v1'

userController({ api, router })

export {
  router
}
