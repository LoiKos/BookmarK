const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
const path = require('path')

// Oembed Url of Viméo and Flickr
const vimeo_oembed_url = 'https://vimeo.com/api/oembed.json?url='
const flickr_oembed_url = 'http://www.flickr.com/services/oembed.json?url='

app.use(bodyParser.json({ type: 'application/*+json' }))

if(process.env.ENV === 'production'){
  console.log('production setup');
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// Flickr Api road 
app.get('/flickr', (req, res) => {
  console.log('Forward request to Flickr services,...');
	axios.get(flickr_oembed_url+req.query.url)
	.then(response => {
      console.log('Forward response from Flickr services,...');
    	res.json(response.data).end()
  })
  .catch(error => {
    console.log('Forward error from Flickr services : '+error);
   	res.sendStatus(500).end()
  })
})

// Viméo Api road 
app.get('/vimeo', (req, res) => {
  console.log('Forward request to Viméo services,...');
	axios.get(vimeo_oembed_url+req.query.url)
	.then(response => {
    console.log('Forward response from Viméo services,...');
  	res.json(response.data).end()
  })
  .catch(error => {
    console.log('Forward error from Flickr services : '+error);
   	res.sendStatus(500).end()
  })
})

if(process.env.ENV === 'production'){
  // Permet de rediriger toutes les urls non prévu vers l'acceuil du site en production
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
}

const port = process.env.PORT || 4000;
app.listen(port);

console.log(`Bookmark proxy on ${port} started`);