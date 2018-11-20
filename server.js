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

const path = require('path')
const fs = require('fs')
const tls = require('tls')

/* Change to use a custom port */
const PORT = 32000

/* Load the server self signed certificate generated with generateKeys.sh */
const options = {
	  key: fs.readFileSync(path.resolve('server-key.pem')),
	  cert: fs.readFileSync(path.resolve('server-cert.pem'))
}

/* Create the server */
const server = tls.createServer(options, (socket) => {
	socket.setEncoding('utf8')
	socket.write("Hello World" + '\n')
	socket.on('data', function(data) {
		console.log(data)
	  })
	socket.on('end', socket.end)
	socket.on('error', (error) => {
		console.log(error)
		socket.destroy()
	})
})

server.listen(PORT, () => {
	console.log('listening to https://localhost:' + PORT)
})

server.on('error', (error) => {
	console.log(error)
})