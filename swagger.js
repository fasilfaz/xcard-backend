import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Define your Swagger options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'XCard API',
      version: '1.0.0',
      description: 'API documentation for XCard application',
    },
  },
  apis: ['./index.js'], // Path to your API routes
};

// Initialize Swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

// Create an Express route for serving the Swagger UI
const swaggerRouter = express.Router();
swaggerRouter.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default swaggerRouter;