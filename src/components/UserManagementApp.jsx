import React, { useReducer, useEffect } from 'react';
import { initialState, reducer } from '../reducer';
import AddUserForm from './AddUserForm';
import UserList from './UserList';

const UserManagementApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (savedUsers.length > 0) {
      dispatch({ type: 'SET_USERS', payload: savedUsers });
    }
  }, []);

  useEffect(() => {
    if (state.users.length > 0) {
      localStorage.setItem('users', JSON.stringify(state.users));
    }
  }, [state.users]);

  const handleAddUser = (user) => {
    dispatch({ type: 'ADD_USER', payload: user });
  };

  const handleUpdateUser = (user) => {
    dispatch({ type: 'UPDATE_USER', payload: user });
  };

  const handleDeleteUser = (userId) => {
    dispatch({ type: 'DELETE_USER', payload: userId });
  };

  const handleEditUser = (user) => {
    dispatch({ type: 'SET_USER', payload: user });
    dispatch({ type: 'TOGGLE_EDIT' });
  };

  return (
    <div>
      <h1>CRUD</h1>
      <AddUserForm
        user={state.user}
        onSubmit={state.editing ? handleUpdateUser : handleAddUser}
      />

      <UserList
        users={state.users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};

export default UserManagementApp;