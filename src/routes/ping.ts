import { FastifyInstance } from 'fastify'
import pingController from '../controllers/pingController'

export default async (server: FastifyInstance) => {
  server.get('/ping', pingController)
}
