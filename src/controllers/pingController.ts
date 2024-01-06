import { FastifyRequest, FastifyReply } from 'fastify'
export default async (request: FastifyRequest, reply: FastifyReply) => {
  return JSON.stringify({ ping: 'pong' })
}
