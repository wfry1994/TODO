import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
class TodoItem extends Component {

  getStyle = () => {
    return {
      fontSize: '1rem',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const {id, title } = this.props.todo
    return (
    <React.Fragment>
    <TableCell><Checkbox color="primary" onChange= {this.props.updateTodo.bind(this, id)}/></TableCell>
    <TableCell style = {this.getStyle()} align="center">{id}</TableCell>
    <TableCell style = {this.getStyle()} align="center">{title}</TableCell>
    <TableCell align="center">
      <Tooltip style={{cursor: 'pointer'}} title="Delete">
      <IconButton aria-label="Delete" color="primary">
        <DeleteIcon/>
      </IconButton>
      </Tooltip>
    </TableCell>
    </React.Fragment>
  );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
