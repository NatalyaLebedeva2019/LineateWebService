export const ADD_USER = 'ADD_USER';
export function setUser(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}
