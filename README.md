# MyWork
Projeto de Tópicos Especiais em Programação lecionada pelo Profº Carlos Henrique Bughi

## Technologies Used

1. Java 
2. Angular 6 (requires NodeJS latest)

# Server

Checkout the Server Repository under (https://github.com/eugaf/mywork-server)[https://github.com/eugaf/mywork-server]

# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.


## Preparing Dev Envoirment

1. Install NodeJS under https://nodejs.org/en/download/. If your are running on Linux, run the following commands
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```

2. Go to the project folder and run
```
sudo npm install n -g
sudo n latest
sudo npm install -g @angular/cli sass #If your are running it on Linux or MacOS, you will need to run with SUDO
cd client
npm install
ng update @angular/cli
ng update @angular/core
```

## Running the Project

1. Go to the project folder and run
```
cd client
ng serve
#Agora abra seu navegador de internet na página http://localhost:4200/
```

## Help Commands

1. To Run the project: `ng serve`
1. To Create a new component: `ng generate component [component name]`


## Helpfull Links
1. Angular Basics (Complete Guide - Tutorial for Beginners) - https://www.youtube.com/watch?v=htPYk6QxacQ
2. @angular/flex-layout - https://www.youtube.com/watch?v=geqjUtKJX5s
