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
│	├── yarn.lock
│	├── public
│	├── .gitignore
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

The problem to only use the web server provide by create-react-app is that you can't proxyfied API call and it result to problem with CORS.

## Example of Viméo and Flickr links 

https://vimeo.com/8680681

https://flic.kr/p/jY9diK

https://flic.kr/p/DPks3r

https://flic.kr/p/f5eAbd

https://vimeo.com/239414688

https://vimeo.com/239593389

https://vimeo.com/23608259

## Insert data at start 

```js

const media = [
 {added_date: "2011-05-11 17:29:10",author_name: "Whitehouse Post",duration: 70,height: 272, tags: ["video"],thumbnail_height: 166,thumbnail_url: "https://i.vimeocdn.com/video/154281585_295x166.jpg",thumbnail_width: 295,title: "Cats in Tanks",type: "video",url: "https://vimeo.com/23608259",width: 480},
 {title: "Monsoon IV (4K)", type: "video", author_name: "Mike Olbinski", url: "https://vimeo.com/239593389", added_date: "2017-10-24 03:20:18",duration:488,tags: ["video"],thumbnail_height: 360,thumbnail_url: "https://i.vimeocdn.com/video/662615489_640.jpg",thumbnail_width: 640,width: 640, height:360},
 {added_date: "2017-10-23 04:06:40",author_name: "Device",duration: 113,height: 360,tags: ["video"],thumbnail_height: 360,thumbnail_url: "https://i.vimeocdn.com/video/662631868_640.jpg",thumbnail_width: 640,title: "The Postcard",type: "video",url: "https://vimeo.com/239414688",width: 640},
 {title: "San Francisco", type: "photo", author_name: "Jay Pasion", url: "https://farm6.staticflickr.com/5460/9236912160_559c9b7d82_b.jpg", width: "1024", height: "678",tags: ["photo"],thumbnail_height: 150,thumbnail_url: "https://farm6.staticflickr.com/5460/9236912160_559c9b7d82_q.jpg",thumbnail_width: 150},
 {title: "MOTO The Movie / Trey Canard Segment", type: "video", author_name: "THE ASSIGNMENT", url: "https://vimeo.com/8680681", added_date: "2010-01-11 17:30:28", duration: 186,height: 272,tags: ["video"],thumbnail_height: 166,thumbnail_url: "https://i.vimeocdn.com/video/41117999_295x166.jpg",thumbnail_width: 295,width: 480},
 {author_name: "►CubaGallery",height: "1024",tags: ["photo"],thumbnail_height: 150,thumbnail_url: "https://farm8.staticflickr.com/7339/12449747893_7d1b9d98f8_q.jpg",thumbnail_width: 150,title: "ocean",type: "photo",url: "https://farm8.staticflickr.com/7339/12449747893_7d1b9d98f8_b.jpg",width: "1024"},
 {author_name: "karinavera",height: "683",tags: ["photo"],thumbnail_height: 150,thumbnail_url: "https://farm2.staticflickr.com/1575/24820870461_e72e41d7ff_q.jpg",thumbnail_width: 150,title: "San Francisco",type: "photo",url: "https://farm2.staticflickr.com/1575/24820870461_e72e41d7ff_b.jpg",width: "1024"},
 {added_date: "2017-11-10 02:41:38",author_name: "Patrik Wallner",duration: 433,height: 360,tags: ["video"],thumbnail_height: 360,thumbnail_url: "https://i.vimeocdn.com/video/665997171_640.jpg",thumbnail_width: 640,title: "Adidas - The Splits",type: "video",url: "https://vimeo.com/242193448",width: 640},
 {added_date: "2017-11-07 12:46:57",author_name: "JULIAN GLANDER",duration: 195,height: 320,tags: ["video"],thumbnail_height: 274,thumbnail_url: "https://i.vimeocdn.com/video/665427562_640.jpg",thumbnail_width: 640,title: "PLANT ROOM",type: "video",url: "https://vimeo.com/241734384",width: 640},
 {added_date: "2017-11-08 10:54:06",author_name: "Fabio Friedli",duration: 374,height: 360,tags: ["video"],thumbnail_height: 360,thumbnail_url: "https://i.vimeocdn.com/video/665620836_640.jpg",thumbnail_width: 640,title: "Bon Voyage",type: "video",url: "https://vimeo.com/241891603",width: 640},
 {added_date: "2017-10-30 12:10:03",author_name: "Neels Castillon",duration: 198,height: 338,tags: ["video"],thumbnail_height: 338,thumbnail_url: "https://i.vimeocdn.com/video/663831097_640.jpg",thumbnail_width: 640,title: "ISOLA",type: "video",url: "https://vimeo.com/240512614",width: 640},
 {author_name: "Bokeh Eyes",height: "678", tags: ["photo"], thumbnail_height: 150, thumbnail_url: "https://farm6.staticflickr.com/5451/8943014343_ea82c1eaef_q.jpg",thumbnail_width: 150,title: "Flamingos.",type: "photo",url: "https://farm6.staticflickr.com/5451/8943014343_ea82c1eaef_b.jpg",width: "1024"},
 {author_name: "Vincent Bourilhon",height: "568",tags: ["photo"],thumbnail_height: 150,thumbnail_url: "https://farm4.staticflickr.com/3678/9428635983_edd7b1e957_q.jpg",thumbnail_width: 150,title: "JUMP",type: "photo",url: "https://farm4.staticflickr.com/3678/9428635983_edd7b1e957_b.jpg",width: "1024"},
 {author_name: "SILVIA GRAV",height: "682",tags: ["photo"],thumbnail_height: 150,thumbnail_url: "https://farm7.staticflickr.com/6202/6130427835_2eb09772c6_q.jpg",thumbnail_width: 150,title: "",type: "photo",url: "https://farm7.staticflickr.com/6202/6130427835_2eb09772c6_b.jpg",width: "1024"},
 {author_name: "Glatz Nature Photography",height: "683",tags: ["photo"],thumbnail_height: 150,thumbnail_url: "https://farm7.staticflickr.com/6134/6024905902_d35ea00967_q.jpg",thumbnail_width: 150,title: "Lion in Morning Light",type: "photo",url: "https://farm7.staticflickr.com/6134/6024905902_d35ea00967_b.jpg",width: "1024"},
 {author_name: "noberson",height: "576",tags: ["photo"],thumbnail_height: 150,thumbnail_url: "https://farm2.staticflickr.com/1713/23623259713_27480b6928_q.jpg",thumbnail_width: 150,title: "Infinity",type: "photo",url: "https://farm2.staticflickr.com/1713/23623259713_27480b6928_b.jpg",width: "1024"},
 {author_name: "codebrahma1",height: "350",tags: ["photo"],thumbnail_height: 150,thumbnail_url: "https://farm5.staticflickr.com/4416/36480455835_bae1a71169_q.jpg",thumbnail_width: 150,title: "Hire React Native Developers",type: "photo",url: "https://farm5.staticflickr.com/4416/36480455835_bae1a71169_b.jpg",width: "988"},
 {author_name: "jiepe-a",height: "735",tags: ["photo"],thumbnail_height: 150,thumbnail_url: "https://farm6.staticflickr.com/5298/5511874896_75b1be9a7b_q.jpg",thumbnail_width: 150,title: "music",type: "photo",url: "https://farm6.staticflickr.com/5298/5511874896_75b1be9a7b_b.jpg",width: "1024"},
 {added_date: "2017-09-05 13:40:22",author_name: "Ryan Mazer",duration: 266,height: 360,tags: ["video"],thumbnail_height: 360,thumbnail_url: "https://i.vimeocdn.com/video/653606479_640.jpg",thumbnail_width: 640,title: "Insider's Guide to New York City",type: "video",url: "https://vimeo.com/232525803",width: 640},
 {added_date: "2017-11-06 09:42:05",author_name: "Dennis Schmelz",duration: 165,height: 270,tags: ["video"],thumbnail_height: 270,thumbnail_url: "https://i.vimeocdn.com/video/665144927_640.jpg",thumbnail_width: 640,title: "The Beauty of Greenland (4K)",type: "video",url: "https://vimeo.com/241520192",width: 640}
]

class Bookmark extends Component {

	constructor(props) {
       super(props);
       this.state = {
         mediaList: media, 
       }
  	}
  	... 
 }

```


