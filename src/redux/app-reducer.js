import { deleteElementByIndex } from "../utils/helpers/objects";
import { appAPI } from "../api/api";

const ADD_ORGANIZATION = 'ADD_ORGANIZATION';
const DELETE_ORGANIZATION = 'DELETE_ORGANIZATION';
const SET_FINDED_ORGANIZATION = 'SET_FINDED_ORGANIZATION';

const initialState = {
  organization: null,
  findedOrganization: null
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORGANIZATION:
      return {
        ...state,
        organization: [...state.organization, action.organization]
      };
    case DELETE_ORGANIZATION:
      return {
        ...state,
        organization: [...deleteElementByIndex(state.organization, action.index)]
      };
    case SET_FINDED_ORGANIZATION:
      return {
        ...state,
        findedOrganization: action.organization
      };
    default:
      return state;
  };
}

export const deleteOrganization = (index) => ({
  type: DELETE_ORGANIZATION,
  index
});
export const addOrganization = (organization) => ({
  type: ADD_ORGANIZATION,
  organization
});
export const setFindedOrganization = (organization) => ({
  type: SET_FINDED_ORGANIZATION,
  organization
});

export const findOrganization = (term) => async (dispatch) => {
  if (!term || term.trim().length === 0) {
    dispatch(setFindedOrganization(null));
    return;
  }

  const response = await appAPI.getOrganization(term);

  if (!response) return;

  dispatch(setFindedOrganization(response.suggestions));
};

export default appReducer;