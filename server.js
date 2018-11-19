/*
 * Copyright (C) 2018 joansanfeliu
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* Load the required libs */
var path = require('path')
var fs = require('fs')
var express = require('express')
var https = require('https')

/* Change to use a custom port */
const PORT = 443

/* Load the server self signed certificate generated with generateKeys.sh */
var certOptions = {
	  key: fs.readFileSync(path.resolve('server.key')),
	  cert: fs.readFileSync(path.resolve('server.cert'))
}

/* Load ExpressJS */
var app = express()

/* Send a response when connected */
app.get('/', (req, res) => {
	  res.send('Hello World')
})

/* Create the server */
var server = https.createServer(certOptions, app).listen(PORT)
