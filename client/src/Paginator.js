import React, { Component } from 'react';
import Item from './Item'

class Paginator extends Component {
	constructor(props) {
    super(props);
	    this.state = {
	      currentPage: 1,
	      itemPerPage: 5
	    };
	}
    handleClick(e) {
    	this.setState({
     	 currentPage: Number(e.target.id)
    	})
  	}

    changeNumberItems(e){
      this.setState({
       itemPerPage: e.target.value
      })
    }

    render() {

    const { currentPage, itemPerPage } = this.state;
    
    const items = this.props.items

    const indexOfLastTodo = currentPage * itemPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemPerPage;
    const currentItems = indexOfLastTodo < items.length ? items.slice(indexOfFirstTodo, indexOfLastTodo) : items.slice(indexOfFirstTodo, items.length)

    const renderItems = currentItems.map((item, index) => {
    	return <Item key={item.url} media={item} handleDelete={(index) => this.props.handleDelete(index)} handleUpdate={(index,tags) => this.props.handleUpdate(index,tags)}/>
    });

    // Logic for displaying page numbers
    const pageNumbers = Array(Math.ceil(items.length / itemPerPage)).fill().map((e,i) => i + 1 );

    if (this.state.currentPage > pageNumbers.length){
      this.setState({
       currentPage: pageNumbers.length
      })
    }

    const renderPageNumbers = pageNumbers.map(number => {
      const className = number === this.state.currentPage ? "pagination-link is-current" : "pagination-link"
      return (
      	<li key={number}>
          <a className={className} aria-label="Goto page 1" id={number} onClick={(e) => this.handleClick(e)}> {number} </a>
        </li>
      );
    });

    return (
      <div>
        <div className="column is-half is-offset-one-quarter pagination-options">
        <nav className="pagination is-small" aria-label="pagination">
		      <ul className="pagination-list">
		        { renderPageNumbers }
		      </ul>
          <p> Item per page : </p>
          <div className="select">
            <select onChange={(e) => this.changeNumberItems(e)}>
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
          </div>
	  	  </nav>
        </div>
        {renderItems}
      </div>
    )
  }
}

export default Paginator