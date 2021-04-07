#!/bin/bash
VAR=$((printf "PING\r\n";) | nc 127.0.0.1 6379 -w1
if [[ $VAR == *"PONG"* ]]
then
	curl 127.0.0.1:3000 && exit 0
fi
exit 1
