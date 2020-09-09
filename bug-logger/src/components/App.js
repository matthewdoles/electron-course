import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import LogItem from './LogItem';
import AddLogItem from './AddLogItem';

const App = () => {
  const [logs, setLogs] = useState([
    {
      _id: 1,
      text: 'This is log one',
      priority: 'low',
      user: 'Brad',
      created: new Date().toString(),
    },
  ]);

  const [alert, setAlert] = useState({
    show: false,
    message: '',
    variant: 'success',
  });

  function addItem(item) {
    if (item.text === '' || item.user === '' || item.priority === '') {
      showAlert('Please enter all fields', 'danger');
      return;
    }
    item._id = new Date().toString();
    item.created = new Date().toString();
    setLogs([...logs, item]);
    showAlert('Log added');
  }

  function deleteItem(_id) {
    setLogs(logs.filter((item) => item._id !== _id));
    showAlert('Log removed');
  }

  function showAlert(message, variant = 'success', seconds = 30000) {
    setAlert({
      show: true,
      message,
      variant,
    });
    setTimeout(
      () =>
        setAlert({
          show: false,
          message: '',
          variant: 'success',
        }),
      seconds
    );
  }

  return (
    <Container>
      <AddLogItem addItem={addItem} />
      {alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}
      <Table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Log Text</th>
            <th>User</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <LogItem key={log._id} log={log} deleteItem={deleteItem} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
