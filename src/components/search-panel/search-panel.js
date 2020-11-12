import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
   constructor(props){
       super(props);
       this.state = {
           term: ''
       }
       this.onUpdateSearch = this.onUpdateSearch.bind(this);
   }
   onUpdateSearch(e){
        this.setState({term: e.target.value});
        this.props.onUpdateSearch(this.state.term);
    }
    render(){
    return(
        <div>
        <input
              value={this.state.term}
              onChange={this.onUpdateSearch}
              className="form-control search-input"
              type="text"
              placeholder="Search in notes"
              />
               </div>
    )
}
}