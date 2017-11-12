# BookMark App

## Environnement 

NodeJS / NPM : v8.1.2 / v5.5.1

Yarn :  v0.24.6

## Create-React APP

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

If you haven't install create-react-app yet, you can install it via npm : 

```shell
npm install -g create-react-app 
```

this is the recommended way to create new React projet from [Official Documentation](https://reactjs.org/docs/installation.html#creating-a-new-application) 

## Install

Just follow theses few steps : 

```shell 
git clone https://github.com/LoiKos/BookmarK.git *appName*

cd appName

yarn install

cd client

yarn install
```

yarn install use a custom script that run the good 

Come back to the home directory and structure should look like this :

```bash
├── client
│   ├── package.json
│   ├── src
│	  ├── yarn.lock
│	  ├── public
│	  ├── .gitignore
│   └── node_modules
├── node_modules
├── README.md
├── .gitignore
├── server.js
├── package.json
└── yarn.lock
```

Care to not change the name of the api directory or you need to updage function in package.json

## Run 

```bash 
  yarn start
```

## Build for production the Client  

```bash 
  yarn build
```

## Run as in production the Client ( this will execute a build )

```bash 
  yarn start-production
```

## Why does i need a Server.js as create-react-app already contain one ?

The problem to only use the web server provide by create-react-app is that you can't proxyfied API call and it results with CORS problems.

## Example of Viméo and Flickr links 

https://vimeo.com/8680681

https://flic.kr/p/jY9diK

https://flic.kr/p/DPks3r

https://flic.kr/p/f5eAbd

https://vimeo.com/239414688

https://vimeo.com/239593389

https://vimeo.com/23608259

