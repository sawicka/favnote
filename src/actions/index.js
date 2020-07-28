import axios from 'axios';

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const removeItem = (itemType, id) => ({
  type: REMOVE_ITEM,
  payload: {
    itemType,
    id,
  },
});

export const addItem = (itemType, itemContent) => {
  const getId = () => Math.floor(Math.random() * 100);

  return {
    type: ADD_ITEM,
    payload: {
      itemType,
      itemContent: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export const authenticateAction = (username, password) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });

  return axios
    .post('http://localhost:9001/api/user/login', { username, password })
    .then((payload) => {
      console.log(payload);
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: AUTH_FAILURE });
    });
};

// {
//       id: 1,
//       title: 'Hello Roman',
//       content:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//       created: '1 day',
//       twitterName: 'hello_roman',
//     },
