#!/bin/bash
openssl req -nodes -new -x509 -sha256 -days 1024 -keyout server.key -out server.cert
