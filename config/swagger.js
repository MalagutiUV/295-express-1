import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MUSIC API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.routes.js'],
};

export const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
