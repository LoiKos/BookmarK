import React, { Component } from 'react';
import Item from './Item';
import AddForm from './AddForm';


class Bookmark extends Component {

	constructor(props) {
       super(props);
       this.state = {
         mediaList: [], 
       }
  	}

  	updateList(obj){
  		let list = this.state.mediaList
  		list.splice(0,0,obj)
  		this.setState({
         mediaList: list,
       })
  	}

  	checkIfExist(url){
  		let exist = false
  		this.state.mediaList.map((media) => {
  			if(media.url === url) {
  			 exist = true 
  			}
  		})
  		return exist
  	}

  	delete(id){
      let list = this.state.mediaList.filter(item => item.url !== id);
      this.setState({
         mediaList: list, 
       })
  	}

  	update(id,tags){
  		console.log(id,tags)
  		let newList = this.state.mediaList
  		newList.map((media) => {
  			if(media.url === id){
  				media.tags = tags
  			}
  		})
  		this.setState({
         mediaList: newList, 
       })
  	}		

	render() {
		return(
			<div>
				<AddForm checkIfExist={(url) => this.checkIfExist(url)} updateList={(obj) => this.updateList(obj)}/>
				{	
				  this.state.mediaList.length ? this.state.mediaList.map((media) =>
 					<Item key={media.url} media={media} handleDelete={(id) => this.delete(id)} handleUpdate={(id,tags) => this.update(id,tags)}/>) : 
			  		(
			  			<div className="columns">
							<div className="column is-half is-offset-one-quarter">
								<div className="content has-text-centered">
			  					<h1 className="title"> Aucun lien référencé </h1>
			  					</div>
		  					</div>
			  			</div>
			  		)
				}
			</div>
		);
	}
}

export default Bookmark