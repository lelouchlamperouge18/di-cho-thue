import React from 'react';
import PropTypes from 'prop-types';
import { Button, TableCell, TableRow } from '@material-ui/core';

CartRow.propTypes = {};

function CartRow(props) {
  const { row, removeFromCart, increaseByOne, decreaseByOne } = props;
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {row.id}
      </TableCell>
      <TableCell align="left">{row.name}</TableCell>
      <TableCell align="left">{row.producer}</TableCell>
      <TableCell align="left">
        <Button onClick={() => increaseByOne(row.id)}>+</Button>
        <span>{row.quantity}</span>
        <Button onClick={() => decreaseByOne(row.id)}>-</Button>
      </TableCell>
      <TableCell align="left">{row.price}</TableCell>
      <TableCell align="left">{row.price * row.quantity}</TableCell>
      <TableCell align="left">
        <Button onClick={() => removeFromCart(row.id)} variant="contained">
          Hủy
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default CartRow;
