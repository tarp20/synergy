import React, {useState, useEffect} from 'react';
import BackendService from '../services/backend';
import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const UserList = props => {
  const[users, setUsers] = useState([]);

useEffect(()=>{
  retrieveUsers();
})

const retrieveUsers = () => {
  BackendService.getAllUsers()
  .then(response => {
    setUsers(response.data);
  })
  .catch(e => {
    console.log(e);
  });
}

return(
<Container>
<Button className="btn  float-end mx-5 mb-5" variant="outline-secondary">Add User</Button>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>Username</th>
      <th>Date Created</th>
      <th>Groups</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user)=>{
    return(
      <tr key={user.id}>
      <td class="align-middle">{user.username}</td>
      <td class="align-middle">{user.created}</td>
      <td class="align-middle">{user.group_names.join(', ')}</td>
      <td>
        <Button variant="outline-secondary"className="me-2">Edit</Button>
        <Button variant="outline-danger">Delete</Button>
      </td>
    </tr>

    )
    })}
   </tbody>
</Table>
</Container>
);
}
export default UserList;

