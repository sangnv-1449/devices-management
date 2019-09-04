import React from "react";
import { Table } from "react-bootstrap";

function Users() {
  const users = [
    {
      id: 1,
      name: "Sang",
      email: "sang@mail.com",
      role: "Admin"
    },
    {
      id: 2,
      name: "Phan",
      email: "phan@mail.com",
      role: "Admin"
    }
  ];

  const displayUsers = users => {
    return users.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td></td>
      </tr>
    ));
  };

  return (
    <Table hover size="sm" variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{displayUsers(users)}</tbody>
    </Table>
  );
}

export default Users;
