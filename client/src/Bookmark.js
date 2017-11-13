import React, { Component } from 'react';
import AddLink from './AddLink';
import Paginator from './Paginator';


class Bookmark extends Component {

	constructor(props) {
       super(props);
       this.state = {
         mediaList: [], 
       }
  	}

  	newLink(obj){
      console.log(obj)
  		let list = this.state.mediaList
  		list.splice(0,0,obj)
  		this.setState({
         mediaList: list,
       })
  	}

  	checkIfExist(url){
  		let exist = this.state.mediaList.find( value => { return value.url === url } )
  		return exist
  	}

  	deleteLink(id){
      console.log(this.state.mediaList)
      let list = this.state.mediaList.filter(item => item.url !== id);
      this.setState({
         mediaList: list, 
       })
      console.log(this.state.mediaList)
  	}

  	updateLink(id,tags){
  		let newList = this.state.mediaList
      let objIndex = newList.findIndex((obj => obj.url === id))
      newList[objIndex].tags = tags
  		this.setState({
         mediaList: newList, 
       })
  	}		

	render() {
		return(
			<div>
				<AddLink checkIfExist={(url) => this.checkIfExist(url)} newLink={(obj) => this.newLink(obj)}/>

				{	
				  this.state.mediaList.length ? 
            <Paginator items={this.state.mediaList} handleDelete={(id) => this.deleteLink(id)} handleUpdate={(id,tags) => this.updateLink(id,tags)}/>
          : 
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