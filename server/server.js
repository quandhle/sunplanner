const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const mysqlCreds = require('./mysqlcreds.js');
const database = mysql.createPool(mysqlCreds);
const server = express();