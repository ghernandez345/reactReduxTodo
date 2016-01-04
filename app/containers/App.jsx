import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from '../actions';

class App extends Component {
  render() {
    const {dispatch, visibleTodos, visibilityFilter} = this.PropTypes;
    return (
      <div></div>
    )
  }
}
