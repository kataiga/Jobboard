#!/bin/bash

function logBackProject(){
    txts -n regular /tmp/info.log
}
function logFrontProject(){
    (cd quest_board_front; npm run log)
}
function logDbProject(){
    docker container logs $(docker ps  | sed -n 3p | awk '{print $1}')
}

function log(){
    if [[ $1 ]]; then
        if [ "${1}" = "upgrade" ]; then
            rm ~/.txts.conf
            cp .txts.conf ~/.txts.conf
        elif [ "${1}" = "db" ]; then
            logDbProject
        elif [ "${1}" = "back" ]; then
            logBackProject
        elif [ "${1}" = "front" ]; then
            logFrontProject
        fi 
    else
        
        multiview [make log-back] [make log-front] [make log-db] -e
    fi
}

echo $1
log $1