import { prismaCliente } from '@app/prisma/repository-connection'

/** modelos */
import { Response } from '@app/models/appResponses'
import { User, PrismaClient } from '@prisma/client';

/** dtos */
import {
  UserRequest
}
  from './dtos/user.service.dtos'

/** interfaces */
interface IUserService{
    addUser(data:UserRequest):Promise<Response<User>>
}

/**
 *  Servicio para para los controladores de user
 *      - servicios
 *          - addUser
 */

class UserServices implements IUserService {
  /**
    * ser encargar de crear un nuevo  usuario en la base de datos
    * @param data información para crear al usuario
 */

  async addUser (data:UserRequest) {
    const response = new Response<User>()
    const { name, bio } = data
    try {
      response.message = 'the user was created correctly'

      response.response = await prismaCliente.user.create({
        data: {
          name,
          profile: {
            create: {
              bio
            }
          }
        },
        include: { profile: true }
      })
    } catch (error) {
      console.error(error)
      const message = "error request"
      response.message = message
      response.statusCode = 400


      if (!name || !bio) response.message = 'name or bio no was sent'
      
    }

    return response
  }

  async getUserById(id:number){
     const response = new Response()
     try {
       response.response = await prismaCliente.user.findUnique({
         where:{
           id
         },
         include:{
           posts:true,
           profile:true
         },
       })
     } catch (error) {
        console.error(error)
        const message = "error request"
        response.message = message
        response.statusCode = 400

        if(!id)response.message = 'the id is required'
        
     }

     return response
  }
}

export default new UserServices()
