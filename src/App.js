import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';


const tableHeaderCellStyle = {
      fontSize: '1rem',
      fontWeight: 'bold',
  };

class App extends Component {
  state = {
    todos: [
    {
      id: 1,
      title: 'Learn React',
      completed: false
    },
    {
      id: 2,
      title: 'Eat lunch',
      completed: false
    },
    {
      id: 3,
      title: 'Sleep',
      completed: false
    }
  ]
  }

  updateTodo = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={tableHeaderCellStyle} align="left">Completed</TableCell>
            <TableCell style={tableHeaderCellStyle} align="center">Id</TableCell>
            <TableCell style={tableHeaderCellStyle} align="center">Task</TableCell>
            <TableCell style={tableHeaderCellStyle} align="center">Remove</TableCell>
           </TableRow>
        </TableHead>
        <TableBody>
          <Todos todos={this.state.todos} updateTodo={this.updateTodo}/>
        </TableBody>
      </Table>
    );
  }
}

export default App;
