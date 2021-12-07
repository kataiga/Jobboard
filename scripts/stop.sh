#!/bin/bash
function stopDockerImage(){
    docker kill $(docker ps -q)
    docker ps
}

function stopPm2daemon(){
    (cd quest_board_front; npm stop)
}

function stopElixirDaemon(){
    ps aux | grep elixir | awk '{print $2}' | while read line ; do kill $line; done
}

echo "stop elixir daemons ... "
stopElixirDaemon
echo "stop docker images ..."
stopDockerImage
echo "stop pm2 daemons ... "
stopElixirDaemon
echo "done."