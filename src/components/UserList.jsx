import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  if (users.length === 0) {
    return <p>No users available.</p>;
  }

  return (
    <table border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email Address</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>

            <td>{user.email}</td>

            <td>
              <button onClick={() => onEdit(user)}>Edit</button>
            </td>

            <td>
              <button className="delete" onClick={() => onDelete(user.id)}>Delete</button>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;