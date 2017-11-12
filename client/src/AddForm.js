import React, { Component } from 'react';

const apiUrlVimeo = '/vimeo?url='
const apiUrlFlickr = '/flickr?url='

class AddForm extends Component {

	constructor(props) {
       super(props);
       this.state = {
       	url: '',
       	classes : {
       		badUrl: `hide help is-danger`,
        	alreadyExist: `hide help is-danger`,
        	input:`input is-primary`,
        	button: `button is-primary`
    		}
       }
       this.handleInputChange = this.handleInputChange.bind(this);
  	}

  	handleInputChange(event) {
    	this.setState({url: event.target.value});
  	}

  	buttonStartLoading(){
  		var classes = this.state.classes;
  		classes.button = `button is-primary is-loading`
  		this.setState({ classes : classes });
  	}

  	buttonStopLoading(){
  		var classes = this.state.classes;
  		classes.button = `button is-primary`
  		this.setState({ classes : classes });
  	}

 	showBadUrl(){
		var classes = this.state.classes;
		classes.button = `button is-danger`
		classes.input = `input is-danger`
		classes.badUrl = `help is-danger`
		this.setState({ classes : classes });

		setTimeout(() => {
			this.setState({ classes : {
	       		badUrl: `hide help is-danger`,
	        	alreadyExist: `hide help is-danger`,
	        	input:`input is-primary`,
	        	button: `button is-primary`
    		} });
		}, 3000)
 	}

 	showAlreadyExist(){
		var classes = this.state.classes;
		classes.button = `button is-danger`
		classes.input = `input is-danger`
		classes.alreadyExist = `help is-danger`
		this.setState({ classes : classes });

		setTimeout(() => {
			this.setState({ classes : {
	       		badUrl: `hide help is-danger`,
	        	alreadyExist: `hide help is-danger`,
	        	input:`input is-primary`,
	        	button: `button is-primary`
    		} });
		}, 3000)
 	}

  	validUrl(){
  		const reg = new RegExp("^(http|https):\/\/(vimeo.com|flic.kr|www.flickr.com)\/");
		return reg.test(this.state.url) ?  true : false;
  	} 

	submitForm(e){
		e.preventDefault();

		if (this.state.url.length === 0){
			return
		}
	
		if(!this.validUrl()){
			this.showBadUrl()
			return
		}
		
		this.buttonStartLoading();

		let ressourceUrl = ''
		
		if(this.state.url.includes('vimeo')){
			ressourceUrl = apiUrlVimeo + encodeURIComponent(this.state.url)
		} else {
			ressourceUrl = apiUrlFlickr + encodeURIComponent(this.state.url)
		}

		fetch(ressourceUrl)
		.then(response => {
			return response.json()
		}).then(json => {
			let video_url = ''
			let obj = {}
			if (json.type === "video"){
				video_url = json.provider_url.concat(json.uri.slice(8))
				obj = this.videoMapper(json)
			} else {
				video_url = json.url
				obj = this.photoMapper(json)
			}

			if(!this.props.checkIfExist(video_url)){
				this.buttonStopLoading()
				this.props.updateList(obj)
			} else {
				this.showAlreadyExist()
				return
			}	
		})
		.catch(error => {
			console.log(error)
		})
		
	}

	photoMapper(json){
		return {
			title:json.title,
			type:json.type,
			author_name:json.author_name,
			url:json.url,
			width:json.width,
			height:json.height,
			thumbnail_url:json.thumbnail_url,
			thumbnail_height:json.thumbnail_height,
			thumbnail_width:json.thumbnail_width,
			tags:[json.type],
		}
	}

	videoMapper(json){
		return {
			title:json.title,
			type:json.type,
			author_name:json.author_name,
			url:json.provider_url.concat(json.uri.slice(8)),
			added_date:json.upload_date,
			width:json.width,
			height:json.height,
			duration:json.duration,
			thumbnail_url:json.thumbnail_url,
			thumbnail_height:json.thumbnail_height,
			thumbnail_width:json.thumbnail_width,
			tags:[json.type],
		}
	}

	render() {
		return (
			<div className="columns">
				<div className="column is-half is-offset-one-quarter">
					<form onSubmit={(e) => this.submitForm(e)}>
					<div className="field has-addons">
						  <div className="control has-icons-left has-icons-right is-expanded">
						    <input className={this.state.classes.input} type="text" placeholder="Url Viméo ou Flickr" value={this.state.url}  onChange={this.handleInputChange} />
						    <span className="icon is-small is-left">
						      <i className="fa fa-vimeo"></i><i className="fa fa-flickr" aria-hidden="true"></i>
						    </span>
						  </div>
						  <div className="control">
						    	<button type="submit" className={this.state.classes.button} disabled={this.state.url.length ? false : true}>Add</button>
						  </div>
					</div>
					<p className={this.state.classes.badUrl} > Bad url </p>
					<p className={this.state.classes.alreadyExist} > Already exists </p>
					</form>
					<hr/>
				</div>	
			</div>
		);
	}
}

export default AddForm