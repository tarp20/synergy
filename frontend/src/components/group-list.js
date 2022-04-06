import React, {useState, useEffect} from 'react';
import BackendService from '../services/backend';
import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const GroupList = props => {
  const[groups, setGroups] = useState([]);

useEffect(()=>{
  retrieveGroups();
})

const retrieveGroups = () => {
  BackendService.getAllGroups()
  .then(response => {
    setGroups(response.data);
  })
  .catch(e => {
    console.log(e);
  });
}

return(
<Container>
<Button className="btn  float-end mx-5 mb-5" variant="outline-secondary">Add Group</Button>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {groups.map((group)=>{
    return(
      <tr key={group.id}>
      <td class="align-middle">{group.name}</td>
      <td class="align-middle">{group.description}</td>
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
export default GroupList;

