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
import swagger from "./swagger.js";

// Controller

// Initialize Firebase
const firebaseapp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.BUCKET_URL,
});
// Load env vars
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env',
});

// Connect to databases
connectDB();

// Express initialisation
const app = express();

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
      'X-Requested-With,Content-Type'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
}

// Body parser
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(logger('dev'));

// Route Files

// Mount routerss
routes(app);

// Middlewaress
app.use(errorMiddleware);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/profile/public', express.static('public'));
app.use('/api-docs', swagger);


const PORT = process.env.PORT;
const SECUREPORT = process.env.SECUREPORT;

// HTTP Servers
const httpServer = http.createServer(app);
const server = httpServer.listen(
  PORT,
  console.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);


function exitHandler(options, exitCode) {
  if (options.cleanup) if (exitCode || exitCode === 0) console.log(exitCode);
  if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null, { cleanup: true }));
//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, { exit: true }));
// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
});
