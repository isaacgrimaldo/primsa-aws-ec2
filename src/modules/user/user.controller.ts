import { Router } from 'express'
import { AppResponse } from '../../application/models/appResponses'

// servicios
import UserService from './services/user.service'

export const userController = async ({ api, router }:{api:string, router:Router}) => {
  const route = `${api}/user`

  router
    .get(`${route}/getUserById/:id`, async(req, res) => {
      const result = new AppResponse()
      const id = Number(req.params.id)

      result.response = await UserService.getUserById(id)
      return res.status(result.response.statusCode).json(result)

    })

    .post(`${route}/add`, async (req, res) => {
      const result = new AppResponse()
      const body = req.body

      result.response = await UserService.addUser(body)
      return res.status(result.response.statusCode).json(result)
    })
}
