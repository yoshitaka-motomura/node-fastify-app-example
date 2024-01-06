import fastify from 'fastify'
import loggerOptions from './config/logging'
import * as path from 'path'
import autoload from '@fastify/autoload'

// Create Fastify instance
const server = fastify({
  logger: process.env.NODE_ENV !== 'test' ? loggerOptions : false,
})

// Autoload all routes
server.register(autoload, {
  dir: path.join(__dirname, 'routes'),
  dirNameRoutePrefix: true,
})

// Default Response Content-type to application/json
server.addHook('preHandler', (request, reply, done) => {
  reply.header('Content-Type', 'application/json').code(200)
  done()
})

// Define App Function that
const app = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export { server, app }
