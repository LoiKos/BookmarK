import React, { Component } from 'react';
import Modal from './Modal'

class ActionFooter extends Component {
	constructor(props) {
       super(props);
       this.state = {
        open: false,
      }
  	}	
    
    toggleModal() {
      this.setState({
        open: !this.state.open
      });
   	}

    render() {
    	return (
    		<div>  	
	    		<Modal open={this.state.open} onClick={this.toggleModal.bind(this)} tag={this.props.tag} handleUpdate={(tags) => this.props.handleUpdate(tags)}/>
	    		<footer className="card-footer">
			   		<a onClick={this.toggleModal.bind(this)} className="card-footer-item has-text-warning ">
							<i className="fa fa-pencil" aria-hidden="true"></i>
			    		Edit
			    	</a>
				    <a onClick={this.props.handleClick} className="card-footer-item has-text-danger">
				    	<i className="fa fa-trash" aria-hidden="true"></i>
				    	Delete
				    </a>
				</footer>
			</div>
       );
   }

}

export default ActionFooter