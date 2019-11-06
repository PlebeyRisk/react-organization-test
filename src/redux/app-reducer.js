// const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS';

const initialState = {
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    // case INITIALIZATION_SUCCESS: {
    //   let stateCopy = {
    //     ...state,
    //     initialized: true
    //   };
    //   return stateCopy;
    // }
    default:
      return state;
  };
}

// export const setInititalizedStatus = (status) => ({
//   type: SET_INITITALIZED_STATUS,
//   status
// });

// export const initializeApp = () => async dispatch => {
//     dispatch(setInititalizedStatus('авторизация пользователя'));

//     await dispatch(auth());

//     dispatch(initializationSuccess());
//     dispatch(setInititalizedStatus(''));
// };

export default appReducer;