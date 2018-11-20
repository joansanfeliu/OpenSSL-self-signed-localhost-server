#!/bin/bash

openssl req -x509 -nodes -newkey rsa:2048 -subj '/CN=localhost' -keyout server-key.pem -out server-cert.pem -days 365
