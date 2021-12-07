#!/bin/bash
function installGeneralDependencies(){
    sudo apt update
    sudo apt install apt-transport-https ca-certificates curl software-properties-common wget pip 
    cp .txts.conf ~/.txts.conf
    sudo npm install -g multiview
}

function installDockerDeps(){
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
    sudo apt update
    pt-cache policy docker-ce
    sudo apt install docker-ce
    mkdir -p ~/.docker/cli-plugins/
    curl -SL https://github.com/docker/compose/releases/download/v2.0.0-rc.3/docker-compose-linux-amd64 -o ~/.docker/cli-plugins/docker-compose
    chmod +x ~/.docker/cli-plugins/docker-compose

}

function setupDockerRights(){
    sudo groupadd docker
    sudo usermod -aG docker $USER
    sudo chmod 777 /var/run/docker.sock
}

function dockerBuild(){
    docker pull postgres
}

function launchDockerImage(){
    docker compose up
}

function installFrontDeps(){
    curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs
    sudo apt install npm
    sudo npm install -g npm
    (cd quest_board_front; npm i)
}

function installBackDeps(){
    wget https://packages.erlang-solutions.com/erlang-solutions_2.0_all.deb && sudo dpkg -i erlang-solutions_2.0_all.deb
    sudo apt-get update
    sudo apt-get install esl-erlang
    sudo apt-get install elixir
    mix local.hex
    rm erlang-solutions_2.0_all.deb
    (cd quest_board_back; mix deps.get)
}

echo "install dependencies..."
installGeneralDependencies
echo "install docker deps ..."
installDockerDeps
echo "setup Docker's rights ..."
setupDockerRights
echo "docker build ..."
dockerBuild
echo "launch docker image..."
launchDockerImage
echo "install front deps ..."
installFrontDeps
echo "install back deps .."
installBackDeps