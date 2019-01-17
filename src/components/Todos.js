import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';

class Todos extends Component {

  render() {
      return this.props.todos.map((todo) => (
        <TableRow key={todo.id} hover={true}>
          <TodoItem todo={todo} updateTodo={this.props.updateTodo}/>
        </TableRow>
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}


export default Todos;
