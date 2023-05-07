
const express = require('express');
const admin = require('firebase-admin')
const server = require('./src/server')
require('dotenv').config()

const credentials = require('./apikeys.json')

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

const db = admin.firestore()

const PORTS = process.env.PORT || 8080

server.listen(PORTS, () => (
    console.log('app running')
))