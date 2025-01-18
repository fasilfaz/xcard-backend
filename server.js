import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import dotenv from 'dotenv';
import http from 'http';
import https from 'https';
import connectDB from './src/config/db.js';
import routes from './index.js';
import admin from 'firebase-admin';
import bodyParser from 'body-parser';
import errorMiddleware from './src/middlewares/error.middleware.js';
import { serviceAccount } from './src/config/dev-xcard-firebase.js';
import * as fs from 'fs';
import winLogger from './src/middlewares/winston_logger.js';
import { swaggerUi, swaggerSpec, swaggerOptions } from "./swagger/swagger.js";

// Load env vars first
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env',
});

// Initialize Firebase
const firebaseapp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.BUCKET_URL,
});

// Connect to databases
connectDB();

// Express initialisation
const app = express();

// CORS configuration
if (process.env.NODE_ENV === 'production') {
  app.use(
    cors({
      credentials: true,
    })
  );

  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,Content-Type,Authorization'  // Added Authorization
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
} else {
  app.use(cors());
}

// Body parser
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(logger('dev'));

// Static files
app.use(express.static('public'));
app.use('/profile/public', express.static('public'));

// Swagger Documentation - Make sure this comes before routes
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerSpec, swaggerOptions));

// Mount routes
routes(app);

// Error middleware
app.use(errorMiddleware);

// View engine
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 8000;

// HTTP Server
const httpServer = http.createServer(app);
const server = httpServer.listen(
  PORT,
  console.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Error Handlers
function exitHandler(options, exitCode) {
  if (options.cleanup) if (exitCode || exitCode === 0) console.log(exitCode);
  if (options.exit) process.exit();
}

process.on('exit', exitHandler.bind(null, { cleanup: true }));
process.on('SIGINT', exitHandler.bind(null, { exit: true }));
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
});

export default app;