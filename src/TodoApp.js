import React, { Component } from 'react';
import {TodoList} from './TodoList';

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', dueDate: '', priority:'' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Tasks TODO</h3>
        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
        <h3>{" Priority:"+this.state.priority +" Todo:"+this.state.text +" DueDate:"+ this.state.dueDate}</h3>

          Priority
          <input
              id="priority"
              onChange={(e)=> this.setState({priority:e.target.value})}
              value={this.state.priority}
            />

             What needs to be done?

            <input
                id="text"
                onChange={(e)=> this.setState({text:e.target.value})}
                value={this.state.text}
          />
            dueDate
            <input
            id="dueDate"
            type="date"
            onChange={(e)=> this.setState({dueDate:e.target.value})}
            value={this.state.dueDate}
          />

          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
  e.preventDefault();
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      priority: this.state.priority,
      dueDate: this.state.dueDate
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
      priority : '',
      dueDate: ''
    }));
  }

}