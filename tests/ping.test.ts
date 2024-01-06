import { server } from '../src/bootstrap' // Fastifyインスタンスをインポート

beforeAll(async () => {
  await server.ready()
})

afterAll(() => {
  server.close()
})

test('GET /ping', async () => {
  const response = await server.inject({
    method: 'GET',
    url: '/ping',
  })
  expect(response.statusCode).toBe(200)
  expect(response.json()).toEqual({ ping: 'pong' })
})
