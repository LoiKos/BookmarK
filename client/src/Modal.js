import React, { Component } from 'react';

class Modal extends Component {

	constructor(props) {
       super(props);

       let edit = []
       this.props.tag.map((element,index) => {
       	 return edit[index] = { 
          show:false,
          value:element
          }
       })

       this.state = {
        tags: Array.from(this.props.tag),
        savedtags: Array.from(this.props.tag),
        newTag:'',
        edit:edit,
      }
  	}

  	newTagInputChange(e){
  		this.setState({newTag: e.target.value});
  	}

  	newTag(event){
  		event.preventDefault();

  		if(!this.state.newTag.length){
  			return
  		}

  		let tags = this.state.tags
  		let edit = this.state.edit
  		edit.push({show:false,value:''})
  		tags.push(this.state.newTag)
  		this.setState({tags: tags,edit:edit});
  	}

  	dismissModal(){
      let edit = []
      this.state.savedtags.map((element,index) => {
         return edit[index] = { 
          show:false,
          value:element
          }
       })
  		this.setState({
  			tags: Array.from(this.state.savedtags),
  			newTag:'',
        edit:edit
  		});
  		this.props.onClick()
  	}

  	saveUpdates(){
  		this.props.handleUpdate(this.state.tags)
      this.setState({savedtags: Array.from(this.state.tags)})
  		this.props.onClick()
  	}

  	removeTag(index){
  		let tags = this.state.tags
  		let edit = this.state.edit
  		tags.splice(index,1)
  		edit.splice(index,1)
  		this.setState({tags: tags,edit:edit})
  	}

  	showEditForm(index){
  		let edit = this.state.edit
  		edit[index].show = true
  		this.setState({edit:edit})
  	}	

  	hideEditForm(index){
  		let edit = this.state.edit
  		edit[index].show = false
  		this.setState({edit:edit})
  	}

    changeEditTagInput(e,index){
  		let edit = this.state.edit
  		edit[index].value = e.target.value
  		this.setState({edit:edit})
  	}

  	saveTagEdit(index){
  		let tags = this.state.tags
  		let edit = this.state.edit
  		tags[index] = edit[index].value
  		edit[index].show = false
  		this.setState({tags:tags,edit:edit})
  	}

	render() {

		const classes = this.props.open ? "modal is-active" : "modal";

		return (
			<div className={classes}>
			  <div className="modal-background"></div>
			  <div className="modal-card">
		    	<header className="modal-card-head">
		      		<form className="modal-card-title" onSubmit={ (e) => this.newTag(e) }>
		      			<input className="input" type="text" placeholder="Ajouter un tag" value={this.state.newTag}  onChange={ (e) => this.newTagInputChange(e) } />
		      		</form>
		      		<button className="delete" aria-label="close" onClick={ () => this.dismissModal() }></button>
		   		</header>
		    <section className="modal-card-body">
		    {
		    	this.state.tags.length ? this.state.tags.map((tag,index)=>{
		    		return (
		    			<div key={index} className="tag-modal">
			       			<span className="tag ">
								{tag}
							</span>
							<button className="tag button is-danger" onClick={() => this.removeTag(index)}> Delete </button>
							{ this.state.edit[index].show ? <div className="tagEdit">
								<button className="tag button is-success" onClick={() => this.saveTagEdit(index)}> Save </button>
								<div class="field has-addons">
								<p class="control">
						          <a className="delete is-small" aria-label="close" onClick={ () => this.hideEditForm(index) }>x</a>
       					</p>
								<input className="input is-small" type="text" value={this.state.edit[index].value} onChange={(e) => this.changeEditTagInput(e,index)}/>
								</div>
								</div>
								: 
								<button className="tag button is-warning" onClick={() => this.showEditForm(index)}> Edit </button>
							}
						</div>
					) 
		    	}) : <p> Aucun tag </p>
		    }
		    </section>
		    <footer className="modal-card-foot">
		      <button className="button is-success" onClick={() => this.saveUpdates() }>Save changes</button>
		      <button className="button" onClick={ ()=>this.dismissModal() }>Cancel</button>
		    </footer>
		  </div>
		</div>
		);
	}
} 

export default Modal