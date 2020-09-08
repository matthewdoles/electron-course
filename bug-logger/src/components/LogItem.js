import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const LogItem = ({ log }) => {
  const setVariant = () => {
    if (log.priority === 'high') {
      return 'danger';
    } else if (log.priority === 'moderate') {
      return 'warning';
    } else {
      return 'success';
    }
  };
  return (
    <tr>
      <td>
        <Badge variant={setVariant()} className='p-2'>
          {log.priority.charAt(0).toUpperCase() + log.priority.slice(1)}
        </Badge>
      </td>
      <td>{log.text}</td>
      <td>{log.user}</td>
      <td>{log.created}</td>
      <td>
        <Button variant='danger' size='sm'>
          x
        </Button>
      </td>
    </tr>
  );
};

export default LogItem;
