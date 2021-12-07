#!/bin/bash
function runDocker(){
    docker compose up -d
    docker ps
}

function runFrontProject(){
    (cd quest_board_front; npm start)
}

function runBackProject(){
    (cd quest_board_back; elixir --erl "-detached" -S mix phx.server)
}

function runBackOffice(){
     (cd backOffice/backOffice; php -S localhost:8888)
}


echo "run docker image ..."
runDocker
echo "run front daemon ..."
runFrontProject
echo "run back daemon ..."
runBackProject
echo "done ."
runBackOffice