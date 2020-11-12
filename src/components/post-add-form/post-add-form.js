import React, { Component } from 'react';
import './post-add-form.css';


export default class PostAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e){
        this.setState({...this.state.text, text: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({text: ''})
    }

    render(){
    return(
        <form 
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}>
            <input
                  value={this.state.text}
                  type="text"
                  placeholder="What are you thinking about?"
                  className="form-control new-post-label"
                  onChange={this.onValueChange}
            />
            <button
                   type="submit"
                   className="btn btn-outline-secondary">
                   Add note
            </button>
        </form>
    )
}
}
