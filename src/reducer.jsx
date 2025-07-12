export const initialState = {
  users: [],
  user: { name: '', email: '' },
  editing: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      };
    case 'TOGGLE_EDIT':
      return { ...state, editing: !state.editing };
    default:
      return state;
  }
}
