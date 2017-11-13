import React, { Component } from 'react';
import ActionFooter from './ActionFooter'

class Item extends Component {

	durationFormat(time) {
    	return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;
	}

	render() {
		return(
			<div className="columns">
				<div className="column is-half is-offset-one-quarter">
					<div className="card">
					  <div className="card-content">
					    <div className="media">
					     
					      <div className="media-content">
					        <a href={this.props.media.url} target="_blank">
					        	{ this.props.media.title ? <p className="title is-4 has-text-info">{this.props.media.title} </p> : <p className="title is-6 has-text-info">{this.props.media.url} </p>
					        	}</a>
					        <p className="subtitle is-6">{this.props.media.author_name} </p>
					        <div className="media_info">
					        { 
					      		this.props.media.added_date ? <p className="subtitle is-7">{this.props.media.added_date} - {'Duration : '+this.durationFormat(this.props.media.duration)}</p>  : null
					      	} 
					      	</div>
					      	 <div className="media_tags">
					       	{
					       		this.props.media.tags.map((tag,index) =>{
					       			return (
						       			<span key={index} className="tag ">
	 										 {tag}
										</span>
									)
					       		})
					       	}
					       	</div>
					      </div>
					      <div className="media-right">
						        <img src={this.props.media.thumbnail_url} alt={this.props.media.author_name} className="item_thumb"/>
						        <p className="is-size-7"> original Size : {this.props.media.width} x {this.props.media.height}</p>
						    </div>
						</div>
					  </div>
					  <ActionFooter handleDelete={() => this.props.handleDelete(this.props.media.url)} handleUpdate={(tags) => this.props.handleUpdate(this.props.media.url,tags)} tag={this.props.media.tags}/>
					</div>
				</div>
			</div>

		)
	}
}

export default Item