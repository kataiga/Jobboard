#!/bin/bash

function depsFront(){
    (cd quest_board_front; npm i)
}

function depsBack(){
    (cd quest_board_back; mix deps.get; mix phx.server)
    make stop
}

function upgradeLogsConf(){
    rm ~/.txts.conf
    cp .txts.conf ~/.txts.conf
}

echo "install front deps..."
depsFront
echo "install back deps ..."
depsBack
echo "upgrade log conf ..."
upgradeLogsConf