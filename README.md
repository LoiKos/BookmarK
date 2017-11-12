# BookMark App

## Required

NodeJS / NPM

Yarn 

## Create-React APP

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

If you haven't install create-react-app yet, you can install it via npm : 

```shell
npm install -g create-react-app 
```

## Install

First clone this repository and install libraries: 

```shell 
git clone https://github.com/LoiKos/Bookmarks.git *appName*
cd appName
yarn install
```

Then you need to add a little proxy to make this work correctly :

```shell 
git clone https://github.com/LoiKos/bookmarkServer.git api
cd api
npm install
```
Come back to the home directory and structure should look like this :

```bash
├── api
│   ├── favicon.ico
│   ├── package.json
│   ├── server.json
│   └── node_modules
├── node_modules
├── public
├── src
├── package.json
├── README.md
└── yarn.lock
```

Care to not change the name of the api directory or you need to updage function in package.json

## Run 

this is the easiest part, just run :

```bash 
  yarn start-with-api
```
this should run the wepback dev serv of create-react-app but also api proxy to forward request on Flickr and Vimeo


## Test Example links 

https://vimeo.com/8680681

https://flic.kr/p/jY9diK

https://flic.kr/p/DPks3r

https://flic.kr/p/f5eAbd

https://vimeo.com/239414688

https://vimeo.com/239593389

https://vimeo.com/23608259

