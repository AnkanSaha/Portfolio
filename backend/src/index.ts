import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({
  logger: true
});

// Register CORS plugin
fastify.register(cors, {
  origin: (origin, cb) => {
    const hostname = new URL(origin || 'http://localhost:3000').hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1' || !origin) {
      cb(null, true);
      return;
    }
    cb(new Error("Not allowed by CORS"), false);
  }
});

// Hello World route
fastify.get('/', async (request, reply) => {
  return { message: 'Hello World! 🚀', status: 'success' };
});

// Health check route
fastify.get('/health', async (request, reply) => {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'portfolio-backend'
  };
});

// Start the server
const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3001;
    const host = process.env.HOST || '0.0.0.0';

    await fastify.listen({ port, host });
    fastify.log.info(`Server listening on http://${host}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
